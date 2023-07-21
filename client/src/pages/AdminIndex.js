import { Container, Row, Col, Button } from "react-bootstrap";
import cssModules from "../css/Admin.module.css";
import TableAdmin from "../components/TableAdmin";

function AdminIndex() {
  return (
    <>
      <Container>
        <div style={{ display: "flex" }}>
          <p className="fw-bold fs-3" style={{ marginTop: "5.13rem" }}>
            List transaksi
          </p>
        </div>
        <div className={cssModules.header}>
          <Row>
            <Col m={2}>
              <p>No</p>
            </Col>
            <Col s={2}>
              <p>Users</p>
            </Col>
            <Col s={2}>
              <p>Tiket</p>
            </Col>
            <Col s={2}>
              <p>Bukti Transfer</p>
            </Col>
            <Col s={2}>
              <p>Status Payment</p>
            </Col>
            <Col s={2}>Action</Col>
          </Row>
          <hr></hr>
          <TableAdmin />
        </div>
      </Container>
    </>
  );
}

export default AdminIndex;
