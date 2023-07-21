import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import ModalApproved from "./modalaproved";

import { Container, Row, Col, Button } from "react-bootstrap";
import cssModules from "../css/Cetak.module.css";

function TiketApproved(props) {
  const [showApproved, setShowApproved] = useState(false);
  return (
    <>
      <div>
        <Container>
          <h1 className={cssModules.cetakh1}>Tiket Saya</h1>
          <div className={cssModules.wrap}>
            <div className={cssModules.shape}>
              <Image src="../assets/img/Land Tick.png" />
              <Image src="../assets/img/train-facing-right 2.png" />
            </div>
            <Row>
              <Col s={2}>
                <p className={cssModules.text1}>Argo wilis</p>
                <p className={cssModules.text2}>Eksekutif (H)</p>
                <div>
                  <div className="d-inline-block mx-5" style={{ lineHeight: "0.2" }}>
                    <p style={{ color: "green" }}>Approved</p>
                  </div>
                </div>
                <p className={cssModules.heading}>No. Tanda Pengenal</p>
              </Col>
              <Col s={2} className="mx-2">
                <div className={cssModules.bulat}></div>
                <div className={cssModules.garis}></div>
                <div className={cssModules.bulat2}></div>
                <div>
                  <p className={cssModules.text4}>05.00</p>
                  <p className={cssModules.text5}>21 Februari 2020</p>
                </div>
                <div className={cssModules.wrapText}>
                  <p className={cssModules.text4}>10.05</p>
                  <p className={cssModules.text5}>21 Februari 2020</p>
                </div>
                <p className={cssModules.heading1}>Nama Pemesan</p>
              </Col>
              <Col s={2}>
                <div>
                  <p className={cssModules.text4}>Jakarta (GMR)</p>
                  <p className={cssModules.text5}>Stasiun Gambir</p>
                </div>
                <div className={cssModules.wrapText}>
                  <p className={cssModules.text4}>Surabaya</p>
                  <p className={cssModules.text5}>Stasiun Surabaya</p>
                </div>
                <p className={cssModules.heading1}>No Handphone</p>
              </Col>
              <Col xs={2}>
                <div className={cssModules.email}>
                  <p className={cssModules.heading1}>Email</p>
                </div>
              </Col>

              <Col m={2}>
                <div>
                  <p className={cssModules.text6}>Kereta Api</p>
                  <p className={cssModules.text7}>
                    <b>Saturday</b>, 21 Februari 2020
                  </p>
                </div>
              </Col>
            </Row>
            <hr className={cssModules.Identitas} style={{ width: "75%" }} />
            <Row>
              <Col s={2}>
                <p className={cssModules.text3}>31175033003970001</p>
              </Col>
              <Col s={2}>
                <p className={cssModules.text3}>Oji</p>
              </Col>
              <Col s={2}>
                <p className={cssModules.text3}>083896833112</p>
              </Col>
              <Col s={2}>
                <div className={cssModules.mail}>
                  <p className={cssModules.text3}>oji@gmail.com</p>
                </div>
              </Col>
              <Col s={2}>
                <Button className={cssModules.btn} onClick={() => setShowApproved(true)}>
                  Bayar Sekarang
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
        <ModalApproved show={showApproved} showModal={setShowApproved} />
      </div>
    </>
  );
}

export default TiketApproved;
