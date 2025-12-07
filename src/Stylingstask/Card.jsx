import Styles from "./Card.module.css"
const Card = ({image,name,designation}) => {
  return <>
  <section className={Styles.card}>
    <img src={image} alt="trainer_name" />
    <h1 className="name">{name}</h1>
    <h2 className="designation">{designation}</h2>
    <button>Know More</button>
  </section>
  </>
}

export default Card