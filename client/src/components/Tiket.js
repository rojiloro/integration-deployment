import React from "react";
import Image from "react-bootstrap/Image";
import { API } from "../config/api";

import { Container, Row, Col, Button } from "react-bootstrap";
import cssModules from "../css/Cetak.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";

function Tiket() {
  let navigate = useNavigate();
  let param = useParams();
  let id = parseInt(param.id);

  let { data: myTicket } = useQuery("myTicketCache", async () => {
    const response = await API.get("/transaction-user");
    return response.data.data;
  });

  const handleBuy = async (id) => {
    try {
      const response = await API.get(`/transaction/${id}`);
      console.log(response.data.data);
      navigate(`/invoice/${id}`);
      return response.data.data;
    } catch (error) {
      console.log(error);
      alert("cek console log bosque");
    }
  };

  return (
    <>
      <div>
        <Container>
          <h1 className={cssModules.cetakh1}>Tiket Saya</h1>
          {myTicket?.map((data, index) => (
            <div style={{ marginTop: "3rem" }} className={cssModules.wrap}>
              <div className={cssModules.shape}>
                <Image src="../assets/img/Land Tick.png" />
                <Image src="../assets/img/train-facing-right 2.png" />
              </div>
              <Row key={index}>
                <Col s={2}>
                  <p className={cssModules.text1}>{data.ticket.name_train}</p>
                  <p className={cssModules.text2}>{data.ticket.type_train}</p>
                  <div className={cssModules.box}>
                    {data.status === "success" ? (
                      <div className="alert alert-success d-inline-block">{data.status === "success" && <p className={cssModules.pending}>{data.status}</p>}</div>
                    ) : (
                      <div className="alert alert-warning d-inline-block">{data.status === "pending" && <p className={cssModules.pending}>{data.status}</p>}</div>
                    )}
                  </div>
                  <p className={cssModules.heading}>No. Tanda Pengenal</p>
                </Col>
                <Col s={2} className="mx-2">
                  <div className={cssModules.bulat}></div>
                  <div className={cssModules.garis}></div>
                  <div className={cssModules.bulat2}></div>
                  <div>
                    <p className={cssModules.text4}>{data.ticket.start_time}</p>
                    <p className={cssModules.text5}>{data.ticket.start_date}</p>
                  </div>
                  <div className={cssModules.wrapText}>
                    <p className={cssModules.text4}>{data.ticket.arrival_time}</p>
                    <p className={cssModules.text5}>{data.ticket.start_date}</p>
                  </div>
                  <p className={cssModules.heading1}>Nama Pemesan</p>
                </Col>
                <Col s={2}>
                  <div>
                    <p className={cssModules.text4}>Jakarta (GMR)</p>
                    <p className={cssModules.text5}>{data.ticket.start_station.name}</p>
                  </div>
                  <div className={cssModules.wrapText}>
                    <p className={cssModules.text4}>Surabaya</p>
                    <p className={cssModules.text5}>{data.ticket.destination_station.name}</p>
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
                  <p className={cssModules.text3}>{data.user.fullname}</p>
                </Col>
                <Col s={2}>
                  <p className={cssModules.text3}>{data.user.telepon}</p>
                </Col>
                <Col s={2}>
                  <div className={cssModules.mail}>
                    <p className={cssModules.text3}>{data.user.email}</p>
                  </div>
                </Col>
                <Col s={2}>
                  {data.status === "pending" && (
                    <Button className={cssModules.btn} onClick={() => handleBuy(data.id)}>
                      Bayar Sekarang
                    </Button>
                  )}
                  {data.status === "success"}
                </Col>
              </Row>
            </div>
          ))}
          ;
        </Container>
      </div>
    </>
  );
}

export default Tiket;
