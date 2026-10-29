// Carte.jsx

import { defaultClientMainFields } from "vite";

function Carte() {
  const nom = "Flora";
  return (
    <div className="carte">
        <h2>{nom}</h2>
        <img src="avatar.png" />
        <p>Montréal</p>
    </div>
  );
}

export default Carte;