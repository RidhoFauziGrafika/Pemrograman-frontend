import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";

function AddMovieForm(props) {
  //  destructing props: state movies
  const { movies, setMovies } = props;

  // membuat state object
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    image: "",
    typeMovie: "",
  });

  // membuat fungsi handleChange untuk handle semua input form
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // membuat state Error
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isImageError, setIsImageError] = useState(false);
  const [isTypeMovieError, setIsTypeMovieError] = useState(false);

  const { title, date, image, typeMovie } = formData;

  function validate() {
    // membuat kondisi jika input kosong
    if (title === "") {
      setIsTitleError(true);
      return false;
    } else if (date === "") {
      setIsDateError(true);
      setIsTitleError(false);
      return false;
    } else if (image === "") {
      setIsImageError(true);
      setIsDateError(false);
    } else if (typeMovie === "") {
      setIsTypeMovieError(true);
      setIsImageError(false);
      return false;
    } else {
      setIsTitleError(false);
      setIsDateError(false);
      return true;
    }
  }

  function addMovie() {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: typeMovie,
      poster: image,
    };

    setMovies([...movies, movie]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    validate() && addMovie();
  }

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
        <form onSubmit={handleSubmit} className={styles.addMovieForm__form}>
          <h2 className={styles.addMovieForm__title}>Add Movie</h2>
          <div>
            <div>
              <div className={styles.addMovieForm__form}>
                <div>
                  <label className={styles.addMovieForm__labelTitle}>
                    Title
                  </label>
                  <input
                    type="text"
                    className={styles.addMovieForm__formAddMovie}
                    value={title}
                    onChange={handleChange}
                    name="title"
                  />
                  {isTitleError && <Alert> Title wajib diisi</Alert>}
                </div>
                <div>
                  <label className={styles.addMovieForm__labelTitle}>
                    Year
                  </label>
                  <input
                    type="number"
                    className={styles.addMovieForm__formAddMovie}
                    value={date}
                    onChange={handleChange}
                    name="date"
                  />
                  {isDateError && <Alert> Date wajib diisi</Alert>}
                </div>
                <div>
                  <label className={styles.addMovieForm__labelTitle}>
                    Gambar
                  </label>
                  <input
                    type="text"
                    className={styles.addMovieForm__formAddMovie}
                    value={image}
                    onChange={handleChange}
                    name="image"
                  />
                  {isImageError && <Alert>Gambar wajib diisi</Alert>}
                </div>
                <div>
                  <label className={styles.addMovieForm__labelTitle}>
                    Type Movie
                  </label>
                  <select
                    className={styles.addMovieForm__formAddMovie}
                    value={typeMovie}
                    onChange={handleChange}
                    name="typeMovie"
                  >
                    <option value="Action">Action</option>
                    <option value="Horror">Horror</option>
                    <option value="Drama">Drama</option>
                    <option value="Comedy">Comedy</option>
                  </select>
                  {isTypeMovieError && <Alert>Type Movie wajib diisi</Alert>}
                </div>
                <button className={styles.addMovieForm__button}>Submit</button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddMovieForm;
