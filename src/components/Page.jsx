//Pages.jsx

import Carte from "./Carte";


function Page({titre, children}) {
    return (
        <div>
            <h1>{titre}</h1>
            <Carte icone="👩🏾‍💻" titre="À propos">
                <p>Cheffe de service SI, en formation à Montréal.</p>
            </Carte>
            <Carte titre="Objectif">
                <p>Réussir mon entretien React.</p>
                <p>Date : 6 décembre.</p>
            </Carte>
        </div>
    );
}

export default Page;