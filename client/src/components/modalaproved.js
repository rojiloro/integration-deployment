import React from "react";
import { Button, Container, Modal } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

import cssModules from "../css/invoice.module.css";

function TiketApproved({ show, showModal }) {
  return (
    <>
      <Modal show={show} onHide={showModal}>
        <Container>
          <div style={{ marginLeft: "3.25rem" }}>
            <div className={cssModules.title}>
              <p>E-Ticket</p>
            </div>
            <div className={cssModules.shape2}>
              <Image src="../assets/img/Land Tick.png" />
              <Image src="../assets/img/train-facing-right 2.png" />
            </div>

            <div className={cssModules.inv}>
              <p>Kode Invoice : INV0101</p>
            </div>
            <div className={cssModules.api}>
              <p>Kereta Api</p>
            </div>
            <div className={cssModules.februari}>
              <p>Saturday, 21 Febuari 2020</p>
            </div>
            <div className={cssModules.wilis}>
              <p>Argo Wilis</p>
            </div>
            <div className={cssModules.ekse}>
              <p>Eksekutif (H)</p>
            </div>
            <div>
              <div className={cssModules.bulat} style={{ marginLeft: "-3rem" }}></div>
              <div className={cssModules.garis} style={{ marginLeft: "-2rem" }}></div>
              <div className={cssModules.bulat2} style={{ marginLeft: "-2rem" }}></div>
            </div>
            <div>
              <p className={cssModules.jam}>05.00</p>
              <p className={cssModules.date}>21 Febuari 2020</p>
            </div>
            <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
              <p className={cssModules.jam} style={{ marginLeft: "-0.2rem" }}>
                10.05
              </p>
              <p className={cssModules.date} style={{ marginLeft: "0rem" }}>
                21 Febuari 2020
              </p>
            </div>
            <div style={{ marginLeft: "10rem", marginTop: "-9.5rem" }}>
              <div>
                <p className={cssModules.jam}>Jakarta</p>
                <p className={cssModules.date}>Stasiun Jakarta</p>
              </div>
              <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
                <p className={cssModules.jam} style={{ marginLeft: "-0.2rem" }}>
                  Surabaya
                </p>
                <p className={cssModules.date} style={{ marginLeft: "0rem" }}>
                  Stasiun Surabaya
                </p>
              </div>
            </div>
            <Image style={{ marginLeft: "20rem", marginTop: "-28rem", width: "4.5rem", height: "4.5rem", flexBasis: "0" }} src="../assets/img/qr-code 1.png"></Image>
          </div>
          <hr></hr>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex" }}>
              <Image src="../assets/img/pass 1.png" style={{ width: "2.5rem", height: "2.5rem", flexShrink: "0" }} />
              <p className={cssModules.tunjukan}>Tunjukkan e-ticket dan identitas para penumpang saat checkin</p>
            </div>
            <div style={{ display: "flex" }}>
              <Image src="../assets/img/clock 1.png" style={{ width: "2.5rem", height: "2.5rem", flexShrink: "0" }} />
              <p className={cssModules.tunjukan}>
                Check-in <b>paling lambat 90 menit</b> sebelum keberangkatan
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <Image src="../assets/img/warning 1.png" style={{ width: "2.5rem", height: "2.5rem", flexShrink: "0" }} />
              <p className={cssModules.tunjukan}>Waktu tertera adalah waktu stasiun setempat</p>
            </div>
          </div>
        </Container>
      </Modal>
    </>
  );
}

export default TiketApproved;
