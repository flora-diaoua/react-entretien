// Fiche.jsx

const employee = { prenom: "Flora", poste: "développeuse", equipe: 15 };
const competences = ["React", "Laravel", "MySQL"];
const majuscule = (texte) => texte.toUpperCase();

const Statut = () => {
  const user = { nom: "Diaoua", ville: "Montréal", actif: true };

  const statut = "true" ? "Actif" : "Fictif";

  return <p>{statut}</p>;
};

const Fiche = () => {
    return (
        <div>
            <h1>{majuscule(employee.prenom)}</h1>
            <p>Poste : {employee.poste}</p>
            <p>Équipe de {employee.equipe +1} personnes (avec moi)</p>
            <p>Compétence principale : {competences[0]}</p>
            <p>Nombre de compétences : {competences.length}</p>
        </div>
    );
}