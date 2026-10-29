// Badge.jsx

function Badge({ texte = "Nouveau", couleur = "bg-green-500", arrondi = "rounded" }) {
    return <span className={`${couleur} ${arrondi}`}>{texte}</span>
}

export default Badge;