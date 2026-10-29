// Carte.jsx

function Carte( {titre , icone="📌" , children} ) {
    return (
        <div>
            <h3>{icone} {titre}</h3>
            {children}
        </div>
    );
}

export default Carte;