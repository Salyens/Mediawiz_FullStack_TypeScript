import styles from "./button.module.css";

const ClientSubmit = ({ onClick }) => {
  return (
    <button className={`${styles.btn} w-full sm:w-80 mb-20`} onClick={() => onClick()}>
      Оставить заявку
    </button>
  );
};

export default ClientSubmit;
