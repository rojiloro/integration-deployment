import React from "react";
import { Button, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { API } from "../config/api";
import { useEffect } from "react";

import cssModules from "../css/invoice.module.css";
import { Link } from "react-router-dom";

function Detailinvoice() {
  let param = useParams();
  let id = parseInt(param.id);

  let navigate = useNavigate();

  let { data: transaction } = useQuery("myTicketTransCache", async () => {
    const response = await API.get(`/transaction/${id}`);
    console.log(response.data.data);
    return response.data.data;
  });

  // handle buy
  const handleBuy = useMutation(async () => {
    try {
      const response = await API.get(`/getpayment/${id}`);
      console.log("ini response yak", response);

      const token = response.data.data.token;
      console.log("ini token", token);

      window.snap.pay(token, {
        onSuccess: function (result) {
          console.log(result);
          navigate("/tiketApproved");
        },
        onPending: function (result) {
          console.log(result);
          navigate("/tiketApproved");
        },
        onError: function (result) {
          console.log(result);
          navigate("/tiketApproved");
        },
        onClose: function () {
          alert("Close popup yak");
        },
      });
    } catch (error) {
      alert("cek console yagesyak..");
      console.log(error);
    }
  });

  useEffect(() => {
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    const myMidtransClientKey = process.env.REACT_APP_MIDTRANS_CLIENT_KEY;

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;

    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);
  return (
    <>
      <div>
        <Container>
          <p className="fs-3 fw-400" style={{ marginTop: "5rem" }}>
            Invoice
          </p>
          <div className={cssModules.content1}>
            <Row>
              <Col xs={2}>
                <Image src="../assets/img/error 1.png" className={cssModules.img1} />
              </Col>
              <Col l={10}>
                <div className={cssModules.text1}>
                  <p>Silakan melakukan pembayaran memalui M-Banking, E-Banking dan ATM Ke No.rek Yang Tertera </p>
                  <p className="mt-5">No.rek : 09812312312</p>
                </div>
              </Col>
            </Row>
          </div>
          {/* box yang ada barcodenya */}
          <div className={cssModules.box}>
            <div className={cssModules.box2}>
              <Row>
                <Col m={10}>
                  <h1 className={cssModules.h1}>Kereta Api</h1>
                  <p className={cssModules.text2}>
                    <b>Saturday</b>, 21 Febuari 2020
                  </p>
                </Col>
                <Col xs={2}>
                  <Image src="../assets/img/qr-code 1.png" className={cssModules.img2} />
                </Col>
              </Row>
            </div>
            <Row>
              <Col m={6}>
                <div>
                  <p className={cssModules.text3}>{transaction?.ticket.name_train}</p>
                  <p className={cssModules.text4}>{transaction?.ticket.type_train}</p>
                </div>
                <div style={{ marginLeft: "-1rem" }}>
                  <div className={cssModules.bulat}></div>
                  <div className={cssModules.garis}></div>
                  <div className={cssModules.bulat2}></div>
                </div>
                <div className={cssModules.posisi1}>
                  <p className={cssModules.text5}>{transaction?.ticket.start_time}</p>
                  <p className={cssModules.text6}>{transaction?.ticket.star_date}</p>
                </div>
                <div className={cssModules.posisi1}>
                  <p className={cssModules.text5}>{transaction?.ticket.arrival_time}</p>
                  <p className={cssModules.text6}>{transaction?.ticket.star_date}</p>
                </div>
              </Col>
              <Col m={6}>
                <div className={cssModules.posisi2}>
                  <p className={cssModules.text5}>Jakarta</p>
                  <p className={cssModules.text6}>{transaction?.ticket.start_station.name}</p>
                </div>
                <div className={cssModules.posisi3}>
                  <p className={cssModules.text5}>Surabaya</p>
                  <p className={cssModules.text6}>{transaction?.ticket.destination_station.name}</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <div className={cssModules.content2}>
            <div className={cssModules.shape}>
              <Image src="../assets/img/Land Tick.png" />
              <Image src="../assets/img/train-facing-right 2.png" />
            </div>
            <div className={cssModules.wrap}>
              <Row>
                <Col m={3}>
                  <p>No Tanda Pengenal</p>
                </Col>
                <Col m={3}>
                  <p>Nama Pemesan</p>
                </Col>
                <Col m={3}>
                  <p>No. Handphone</p>
                </Col>
                <Col m={3}>
                  <p>Email</p>
                </Col>
              </Row>
            </div>
            <hr></hr>
            <div className={cssModules.abu2}>
              <Row>
                <Col m={3}>
                  <p>31175033003970001</p>
                </Col>
                <Col m={3}>
                  <p>{transaction?.user.fullname}</p>
                </Col>
                <Col m={3}>
                  <p>{transaction?.user.telepon}</p>
                </Col>
                <Col m={3}>
                  <p>{transaction?.user.email}</p>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <p className="fs-3 fw-400 mt-5">Rincian Harga</p>
          <div className={cssModules.content3}>
            <Row>
              <Col m={6}>
                <div className={cssModules.wrap2}>
                  <p>{transaction?.ticket.name_train} (Dewasa) x1</p>
                </div>
              </Col>
              <Col m={6}>
                <div className={cssModules.wrap2}>
                  <p>Rp 250.000</p>
                </div>
              </Col>
            </Row>
            <div className={cssModules.total}>
              <Row>
                <Col m={6}>
                  <p style={{ fontSize: "1.5rem", marginLeft: "2rem" }}>Total</p>
                </Col>
                <Col m={6}>
                  <p style={{ fontSize: "1.5rem", fontWeight: "900", marginLeft: "2rem" }}>Rp 250.000</p>
                </Col>
              </Row>
            </div>
          </div>
          <div>
            <Link to="/tiketApproved">
              <Button className={cssModules.btn} type="submit" onClick={() => handleBuy.mutate(id)}>
                Bayar Sekarang
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Detailinvoice;
