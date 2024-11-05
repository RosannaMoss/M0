import styles from "./app.module.css";
import Header from "../components/Header.jsx";
import Body from "../components/Body.jsx";
import Gallery from "../components/CardContainer.jsx";

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
