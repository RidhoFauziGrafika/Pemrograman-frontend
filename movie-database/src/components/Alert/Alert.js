import styles from "./Alert.module.css";

function Alert(props) {
  const { children } = props;

  return (
    <div>
      <span className={styles.addMovieForm__titleError}>{children}</span>
    </div>
  );
}

export default Alert;
