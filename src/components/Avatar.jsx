// Avatar.jsx


function Avatar({ emoji = "👤" , taille = "text-2xl" }) {
  return <span className={ taille }>{ emoji }</span>;
}


export default Avatar;