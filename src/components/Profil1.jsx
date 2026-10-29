// Profil.jsx




function Profil() {

    const etudiante = {
    prenom: "Flora",
    ecole: "Collège LaSalle",
    photo: "/flora.jpg",
    heuresFaites: 20,
    heuresPrevues: 103,
    };
    const fini = etudiante.heuresFaites >= etudiante.heuresPrevues ? "Formation terminée" : "Formation en cours";
    return (
        <div>
            <img src={etudiante.photo} alt={`Photo de ${etudiante.prenom}}`} />
            <h1>{etudiante.prenom.toUpperCase()}</h1>
            <p>Étudiante au {etudiante.ecole}.</p>
            <p>Il reste {etudiante.heuresPrevues-etudiante.heuresFaites} heures.</p>
            <p>{fini}</p>
        </div>
    );

}
export default Profil;
