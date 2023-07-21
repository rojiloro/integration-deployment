import React from "react";

import { Modal } from "react-bootstrap";
import { Container, Image, Row, Col } from "react-bootstrap";
import cssModules from "../css/Admin.module.css";

function ModalTiketAdmin({ show, showModal }) {
  const handleShowClose = () => showModal(false);

  return (
    <>
      <div>
        <Modal show={show} onHide={handleShowClose}>
          <Container>
            <div className={cssModules.shape}>
              <Image src="../assets/img/Land Tick.png" />
              <Image src="../assets/img/train-facing-right 2.png" />
            </div>
            <button style={{ float: "right", position: "relative", top: "-2rem" }} className="btn-close" onClick={handleShowClose}></button>

            <div style={{ marginLeft: "1.94rem", marginTop: "1.86rem" }}>
              <p style={{ fontWeight: "bold", fontSize: "2.25rem" }}>INVOICE</p>
              <p className={cssModules.kode}>Kode Invoice : INV0101</p>
            </div>

            <div style={{ marginLeft: "1.94rem" }}>
              <Row>
                <Col xs={6}>
                  <div>
                    <p className={cssModules.kereta}>Kereta Api</p>
                    <p className={cssModules.day}>Saturday, 21 Febuari 2020</p>
                  </div>
                  <div>
                    <p className={cssModules.argo}>Argo Wilis</p>
                    <p className={cssModules.ekse}>Eksekutif (H)</p>
                  </div>
                  <div>
                    <div className={cssModules.bulat}></div>
                    <div className={cssModules.garis}></div>
                    <div className={cssModules.bulat2}></div>
                  </div>
                  <div>
                    <p className={cssModules.jam}>05.00</p>
                    <p className={cssModules.date}>21 Febuari 2020</p>
                  </div>
                  <div style={{ marginTop: "4.31rem", marginLeft: "2rem" }}>
                    <p className={cssModules.jam}>10.05</p>
                    <p className={cssModules.date} style={{ marginLeft: "0rem" }}>
                      21 Febuari 2020
                    </p>
                  </div>
                </Col>
                <Col xs={6}>
                  <Image src="../assets/img/qr-code 1.png" className={cssModules.img} />
                  <p className={cssModules.tck}>TCK0101</p>
                  <div style={{ marginTop: "5.5rem", marginLeft: "-2rem" }}>
                    <p className={cssModules.jam}>Jakarta</p>
                    <p className={cssModules.stasiun}>Stasiun Gambir</p>
                  </div>
                  <div style={{ marginTop: "4.2rem", marginLeft: "-2.1rem" }}>
                    <p className={cssModules.jam}>Surabaya</p>
                    <p className={cssModules.stasiun}>Stasiun Surabaya</p>
                  </div>
                </Col>
              </Row>
            </div>
            <hr></hr>
            <div style={{ display: "flex" }}>
              <p className={cssModules.tanda}>No. Tanda Pengenal</p>
              <p className={cssModules.tanda}>Nama Pemesan</p>
              <p className={cssModules.tanda}>No. Handphone</p>
              <p className={cssModules.tanda}>Email</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className={cssModules.identitas} style={{ marginRight: "3rem" }}>
                31175033003970001
              </p>
              <p className={cssModules.identitas} style={{ marginLeft: "0.5rem" }}>
                Oji
              </p>
              <p className={cssModules.identitas} style={{ marginLeft: "4.3rem" }}>
                083896833112
              </p>
              <p className={cssModules.identitas} style={{ marginLeft: "1rem" }}>
                oji@gmail.com
              </p>
            </div>
            <hr style={{ marginTop: "-0.5rem" }}></hr>
            <div className={cssModules.abuAbu}>
              <p className={cssModules.total}>Total</p>
              <p className={cssModules.totalAngka}>250.000</p>
            </div>
          </Container>
        </Modal>
      </div>
    </>
  );
}

export default ModalTiketAdmin;
