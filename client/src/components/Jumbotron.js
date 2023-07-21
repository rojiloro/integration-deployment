import { Container, Row, Col } from "react-bootstrap";
import cssModules from "../css/Jumbotron.module.css";
import Image from "react-bootstrap/Image";

function Jumbotron() {
  return (
    <>
      <div className={cssModules.homeJumbotron}>
        <Container>
          <Row>
            <Col>
              <p className={cssModules.homeText}>Selamat Pagi, Ticket Seekers .</p>
              <p className={cssModules.homeTextKedua}>Ingin Pulkam dengan Good Deal ?</p>
              <p className={cssModules.homeTextKedua}>Masuk atau Daftar Sekarang ! !</p>
            </Col>
            <Col>
              <Image src="../assets/img/iklan-1.png" className={cssModules.homeImage1} />
              <Image src="../assets/img/iklan-2.png" className={cssModules.homeImage2} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Jumbotron;
