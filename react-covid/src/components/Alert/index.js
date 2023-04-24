import styles from "./Alert.module.css";

function Alert(props) {
  const { children } = props;

  return (
    <div>
      <span className={styles.addCovidForm__titleError}>{props.children}</span>
    </div>
  );
}

export default Alert;
