// Convert text to binary ZIP and extract.
// Reads text from stdin, converts each char to its byte value.
// For chars 0x00-0xFF: byte = charCode (latin-1 mapping)
// For chars > 0xFF: encode as UTF-8 to recover original bytes
const fs = require('fs');
const { execSync } = require('child_process');
const zlib = require('zlib');
const path = require('path');

let input = '';
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (chunk) => { input += chunk; });
process.stdin.on('end', () => {
  // Convert text to binary
  const bytes = [];
  for (let i = 0; i < input.length; i++) {
    const code = input.charCodeAt(i);
    if (code <= 0xFF) {
      bytes.push(code);
    } else if (code === 0xFFFD) {
      // Replacement char - data loss
      bytes.push(0xEF); bytes.push(0xBF); bytes.push(0xBD);
    } else {
      // Encode as UTF-8 to recover original bytes
      const encoded = Buffer.from(input[i], 'utf-8');
      for (const b of encoded) bytes.push(b);
    }
  }
  
  const buf = Buffer.from(bytes);
  console.log(`Reconstructed ${buf.length} bytes`);
  console.log(`ZIP signature: ${buf.slice(0,4).toString('hex')} (${buf[0]===0x50 && buf[1]===0x4B && buf[2]===0x03 && buf[3]===0x04 ? 'VALID' : 'INVALID'})`);
  
  fs.writeFileSync('plugin.zip', buf);
  console.log('Wrote plugin.zip');
  
  // Manual ZIP extraction
  const extractDir = 'plugin-extract';
  if (!fs.existsSync(extractDir)) fs.mkdirSync(extractDir, { recursive: true });
  
  let pos = 0;
  let filesExtracted = 0;
  
  while (pos < buf.length - 4) {
    // Look for local file header signature
    if (buf[pos] === 0x50 && buf[pos+1] === 0x4B && buf[pos+2] === 0x03 && buf[pos+3] === 0x04) {
      try {
        const method = buf.readUInt16LE(pos + 8);
        const crc32 = buf.readUInt32LE(pos + 14);
        const compSize = buf.readUInt32LE(pos + 18);
        const uncompSize = buf.readUInt32LE(pos + 22);
        const nameLen = buf.readUInt16LE(pos + 26);
        const extraLen = buf.readUInt16LE(pos + 28);
        
        const nameStart = pos + 30;
        const nameBuf = buf.slice(nameStart, nameStart + nameLen);
        const name = nameBuf.toString('utf-8');
        
        const dataStart = nameStart + nameLen + extraLen;
        const compData = buf.slice(dataStart, dataStart + compSize);
        
        console.log(`\n  File: ${name}`);
        console.log(`    Method: ${method}, Comp: ${compSize}, Uncomp: ${uncompSize}`);
        
        if (name.endsWith('/')) {
          // Directory entry
          const dirPath = path.join(extractDir, name);
          if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
          pos = dataStart + compSize;
          continue;
        }
        
        let fileData;
        if (method === 0) {
          // Stored
          fileData = compData;
        } else if (method === 8) {
          // Deflate
          try {
            fileData = zlib.inflateRawSync(compData);
          } catch (e) {
            console.log(`    DECOMPRESS ERROR: ${e.message}`);
            // Try with full zlib header
            try {
              fileData = zlib.inflateSync(compData);
            } catch (e2) {
              console.log(`    INFLATE ERROR: ${e2.message}`);
              pos = dataStart + compSize;
              continue;
            }
          }
        } else {
          console.log(`    Unknown method ${method}`);
          pos = dataStart + compSize;
          continue;
        }
        
        // Write file
        const filePath = path.join(extractDir, name);
        const fileDir = path.dirname(filePath);
        if (!fs.existsSync(fileDir)) fs.mkdirSync(fileDir, { recursive: true });
        fs.writeFileSync(filePath, fileData);
        filesExtracted++;
        console.log(`    Extracted: ${fileData.length} bytes`);
        
        pos = dataStart + compSize;
      } catch (e) {
        console.log(`  Parse error at ${pos}: ${e.message}`);
        pos += 4;
      }
    } else if (buf[pos] === 0x50 && buf[pos+1] === 0x4B && buf[pos+2] === 0x01 && buf[pos+3] === 0x02) {
      // Central directory
      console.log(`\nCentral directory at pos ${pos}`);
      break;
    } else if (buf[pos] === 0x50 && buf[pos+1] === 0x4B && buf[pos+2] === 0x05 && buf[pos+3] === 0x06) {
      // End of central directory
      console.log(`\nEnd of central directory at pos ${pos}`);
      break;
    } else {
      pos++;
    }
  }
  
  console.log(`\n=== Extracted ${filesExtracted} files ===`);
});
