import { useState } from "react";
// import styles from "../src/App.css";
import styles from "./app.module.css";
import Header from "../components/Header.jsx";
import Body from "../components/Body.jsx";
import Gallery from "../components/CardContainer.jsx";

// to do:
/*
-make images fit whole width and height
-when screen smaller: 
  -make images go one under the other
  -make hamburger menu appear and the headers: (home, about us, contact us, login) appear under it

*/

function App() {
  return (
    <>
      <div className={styles.app}>
        <Header></Header>
        <Body></Body>
        <Gallery></Gallery>
      </div>
    </>
  );
}

export default App;
