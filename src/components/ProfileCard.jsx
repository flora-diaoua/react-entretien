// ProfileCard.jsx

import Avatar from "./Avatar";


function ProfileCard(props) {
  return (
    <div>
      <Avatar emoji={props.emoji} />
      <h2>{props.nom}</h2>
      <p>{props.metier}</p>
    </div>
  );
}
export default ProfileCard;