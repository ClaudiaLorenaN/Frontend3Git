import Button from "./Button";
import CardStyles from "../Styles/Card.module.css";

const Card = ({ conjuntoTareas, task, setTask }) => {
  return (
    <div className={CardStyles.cardContainer}>
      <img src={conjuntoTareas.img} alt="" className={CardStyles.cardImg} />
      {/* <h4>{conjuntoTareas.nombre}</h4> */}
      <Button onClick={() => setTask([...task, conjuntoTareas])}>
        {conjuntoTareas.nombre}
      </Button>
    </div>
  );
};

export default Card;
