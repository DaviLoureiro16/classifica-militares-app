import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { ImportarPage } from "./pages/ImportarPage";
import { ClassificacaoPage } from "./pages/ClassificacaoPage";
import { ConsultaPage } from "./pages/ConsultaPage";
import { SobrePage } from "./pages/SobrePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/importar" element={<ImportarPage />} />
          <Route path="/classificacao" element={<ClassificacaoPage />} />
          <Route path="/consulta" element={<ConsultaPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
