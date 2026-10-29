// Contact.jsx

function Contact() {
  const fiche = {
    titre: "Contact",
    ville: "Montréal",
    courriel: "flora.nadine@gmail.com",
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-md mx-auto mt-6">
        <h2 className="text-xl font-bold mb-2">{fiche.titre}</h2>
        <p>Ville : <span className="font-semibold mb-1">{fiche.ville}</span></p>
        <p>Courriel : <span className="font-semibold mb-1">{fiche.courriel}</span></p>
    </div>
      );

    }


    export default Contact;

 /* function Equipe() {
  const service = "Système d'Information";
  const techniciens = 15;
  const utilisateurs = 50;
  const equipes = ["réseaux", "maintenance", "exploitation", "développement"];

  return (
    <div>
      <h1>Service {service.toUpperCase()}</h1>
      <p>Il y a {Math.round((techniciens/utilisateurs) * 100)} utilisateurs de plus que {utilisateurs - 3}: Environ 3 utlisateurs par technicien.</p>
      <p>Première équipe : {equipes[0]}.  Nombre d'équipes : {equipes.length}.</p>


      <p>Il y a {Math.round(utilisateurs/techniciens)} utilisateurs de plus que {utilisateurs - Math.round(utilisateurs/techniciens)}: 
        Environ 3 utlisateurs par technicien.</p>
    </div>
  );
}
}

function Logo() {
  const image = "/logo-artf.png";
  const organisme = "ARTF";
  const largeur = 120;

  return (
    <img src="`{image}`" alt="Logo de {organisme}" width={largeur} />
 
  );
} */