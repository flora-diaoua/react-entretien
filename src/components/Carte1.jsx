/*const Carte = () => {
  const prenom = "Flora";
  const image = "avatar.png";
  const annees = 10;

  return (
    <div>
        <img src={image} className="rounded-full" />
        <h2>{prenom}</h2>
        <p>Expérience : {annees} ans
            <br />
        </p>
    </div>
  );
};
-------------   =========== ---------------
function Carte(props) {
  return (
    <div>
      <h2>{props.titre}</h2>
      <p>{props.description}</p>
    </div>
  );
}
  -------------   =========== ---------------
*/

// Carte1.jsx

function Carte1(props) {
  const { titre, description } = props;
  return (
    <div>
      <h2>{titre}</h2>
      <p>{description}</p>
    </div>
  );
}
export default Carte1;