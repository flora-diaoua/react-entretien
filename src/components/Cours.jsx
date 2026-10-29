//Cours.jsx

function Cours(props) {
    return (
        <div>
            <h3>{props.titre}</h3>
            <p>Durée : {props.heures} heures, niveau {props.niveau}</p>
        </div>
    );
}

export default Cours;