import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink
            to="/Leclub"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            Le club
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Activite"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            Activités
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Resultat"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            Résultats compétitions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
