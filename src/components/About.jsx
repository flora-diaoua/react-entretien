// About.jsx

function About(){
    const profil = {
        nom: "Diaoua",
        prenom: "Flora",
        poste: "Cheffe de service",
        formation: "programmation",
        competences: ["React", "JavaScript", "PHP"],

    }
    return (
        <section className="bg-white rounded-xl shadow p-6 max-w-md lg:max-w-2xl mx-auto mt-6">
            <h2 className="text-xl md:text-3xl font-bold mb-2">À propos</h2>
            <p className="text-gray-600 mb-4">
                {profil.prenom} {profil.nom}, {profil.poste}, 
                suit actuellement une formation en {profil.formation}
            </p>
            <h3 className="font-semibold mb-1">Compétences : </h3>
            <ul className="list-disc pl-5">
                <li>{profil.competences[0]}</li>
                <li>{profil.competences[1]}</li>
                <li>{profil.competences[2]}</li>
            </ul>
        </section>
    );
}

export default About;