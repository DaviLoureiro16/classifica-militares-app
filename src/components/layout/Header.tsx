import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import "../../styles/Layout.css";

const itensMenu = [
  { label: "Início", path: "/" },
  { label: "Importar", path: "/importar" },
  { label: "Classificação", path: "/classificacao" },
  { label: "Consulta", path: "/consulta" },
  { label: "Sobre", path: "/sobre" },
];

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className="layout-header">
      <div className="layout-header__container">
        <Link to="/" className="layout-header__logo" onClick={fecharMenu}>
          <span className="layout-header__logo-icon">CM</span>
          <span className="layout-header__logo-text">Classifica Militares</span>
        </Link>

        <button
          className="layout-header__toggle"
          aria-label="Abrir menu"
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span className={`layout-header__toggle-bar ${menuAberto ? "open" : ""}`} />
          <span className={`layout-header__toggle-bar ${menuAberto ? "open" : ""}`} />
          <span className={`layout-header__toggle-bar ${menuAberto ? "open" : ""}`} />
        </button>

        <nav className={`layout-header__nav ${menuAberto ? "open" : ""}`}>
          <ul className="layout-header__menu">
            {itensMenu.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `layout-header__menu-item ${isActive ? "active" : ""}`
                  }
                  onClick={fecharMenu}
                  end={item.path === "/"}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
