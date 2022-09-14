import styles from "../styles/card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;