import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
  return (
    <div className={styles.container}>
      <section className={styles.addMovie}>
        <div className={styles.addMovie__left}>
          <img
            className={styles.addMovie__image}
            src="https://picsum.photos/536/354"
            alt="placeholder"
          />
        </div>
        <form>
          <h2 className={styles.addMovie__title}>Add Movie</h2>
          <div className={styles.addMovieForm__form}>
            <label className={styles.addMovieForm__labelTitle}>Title</label>
            <input type="text" className={styles.addMovieForm__formTitle} />

            <label className={styles.addMovieForm__labelYear}>Year</label>
            <input type="number" className={styles.addMovieForm__formYear} />

            <button className={styles.addMovieForm__button}>Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddMovieForm;
