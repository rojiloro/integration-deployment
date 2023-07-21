import { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ModalTiketAdmin from "./Modal-tiket-admin";
import ModalEditAdmin from "./Modal-edit-admin";

import { API } from "../config/api";
import { useQuery } from "react-query";

function TableAdmin() {
  const [show, setShow] = useState(false);
  const [showEdit, setEditShow] = useState(false);

  let { data: transactions } = useQuery("transactionCache", async () => {
    const response = await API.get("/transaction");
    console.log("lu apa si: ", response.data.data);
    return response.data.data;
  });
  console.log("bro", transactions);

  return (
    <div>
      {transactions?.map((transaction, index) => (
        <>
          <Row>
            <Col m={2}>
              <p>{index + 1}</p>
            </Col>
            <Col s={2}>
              <p>{transaction?.user.fullname}</p>
            </Col>
            <Col s={2}>
              <p>
                {transaction?.ticket.start_station.name} - {""} {transaction?.ticket.destination_station.name}
              </p>
            </Col>
            <Col s={2}>
              <p>Bri.jpg</p>
            </Col>
            <Col s={2}>
              <p>{transaction?.status}</p>
            </Col>
            <Col s={2}>
              <Row>
                <div style={{ cursor: "pointer", display: "flex" }}>
                  <Col xs={4}>
                    <Image src="../assets/img/search 1.png" onClick={() => setShow(true)} />
                  </Col>
                  <Col xs={4}>
                    <Image src="../assets/img/edit.png" onClick={() => setEditShow(true)} />
                  </Col>
                  <Col xs={4}>
                    <Image src="../assets/img/trash 1.png" />
                  </Col>
                </div>
              </Row>
            </Col>
          </Row>
          <hr></hr>
        </>
      ))}

      <ModalTiketAdmin show={show} showModal={setShow} />
      <ModalEditAdmin showEdit={showEdit} showEditModal={setEditShow} />
    </div>
  );
}

export default TableAdmin;
