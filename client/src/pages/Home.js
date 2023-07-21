// import component
import Jumbotron from "../components/Jumbotron";
import FormTiket from "../components/FormTiket";

// import react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <>
      <Jumbotron />
      <FormTiket />
    </>
  );
}

export default Home;
