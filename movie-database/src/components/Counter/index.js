import { useEffect } from "react";
import { useState } from "react";

function Counter() {
  // mengembalikan sepasang value (array) : [0]
  const [angka, setAngka] = useState(0);
  function addAngka() {
    // state tidak boleh diubah secara langsung
    setAngka(angka + 1);
  }
  /**
   * useEffect dijalankan pada lifecyle mount dan update
   */

  function updateDOM() {
    console.log("Lifecyle: Dimount");

    // melakukan side effect : mengakses data
    document.title = `Hasil ${angka}`;
  }
  useEffect(updateDOM, [angka]);

  console.log("Lifecyle: Dirender");

  return (
    <div>
      <p>Hasil : {angka}</p>
      <button onClick={addAngka}>Add</button>
    </div>
  );
}

export default Counter;
