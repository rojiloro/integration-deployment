import { Container, Row, Col, Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useState, useContext, useEffect } from "react";
import { API } from "../config/api";
import { useQuery } from "react-query";
import { useMutation } from "react-query";

import cssModules from "../css/Rute.module.css";
import FormLogin from "./Auth/FormLogin";
import FormRegister from "./Auth/FormRegister";

function Rute({ startStation, destinationStation, search }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [state] = useContext(UserContext);
  const [showLogin, setShowLogin] = useState(false);
  const [showDaftar, setShowDaftar] = useState(false);

  let { data: tickets, refetch } = useQuery("ticketCache", async () => {
    const response = search ? await API.get(`/filter-ticket?start_station_id=${startStation}&destination_station_id=${destinationStation}`) : await API.get("/tickets");
    console.log(response.data.data);
    return response.data.data;
  });

  const handleBuy = async (id) => {
    try {
      let form = new FormData();
      form.set("ticket_id", id);
      const response = await API.post("/transaction", form);
      console.log(response);
      return response.data.data;
    } catch (error) {
      console.log("apakah ini : ", error);
    }
  };

  useEffect(() => {
    refetch();
  }, [search]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <p className="p-4 ">
          Tiket anda berhasil di tambahkan silakan segera melakukan pembayaran
          <Link to="/cetak" style={{ textDecoration: "none", color: "black" }}>
            <b style={{ cursor: "pointer" }}> Klik disini</b>
          </Link>
        </p>
      </Modal>
      {tickets < 1 ? (
        <h5 className="text-center">Admin has not added ticket</h5>
      ) : (
        <>
          {tickets?.map((ticket, index) => (
            <Container
              className={cssModules.ruteContainer}
              onClick={() => {
                !state.isLogin ? setShowLogin(true) : setShow(true);
                handleBuy(ticket.id);
              }}
              key={index}
              value={ticket.id}
            >
              <Row>
                <Col xs={2}>
                  <p className={cssModules.ruteText}>{ticket.name_train}</p>
                  <p className={cssModules.ruteText2}>{ticket.type_train}</p>
                </Col>
                <Col xs={2}>
                  <p className={cssModules.ruteText}>{ticket.start_time}</p>
                  <p className={cssModules.ruteText2}>{ticket.start_station.name}</p>
                </Col>
                <Col xs={2}>
                  <Image src="../assets/img/Arrow 5.png" className={cssModules.ruteImage} />
                </Col>
                <Col xs={2}>
                  <p className={cssModules.ruteTextGeser}>{ticket.arrival_time}</p>
                  <p className={cssModules.ruteText2Geser}>{ticket.destination_station.name}</p>
                </Col>
                <Col xs={2}>
                  <p className={cssModules.ruteTextGeser}>
                    {parseInt(ticket.arrival_time) <= parseInt(ticket.start_time) ? parseInt(ticket.start_time) - parseInt(ticket.arrival_time) : parseInt(ticket.arrival_time) - parseInt(ticket.start_time)} jam
                  </p>
                </Col>
                <Col s={3}>
                  <p className={cssModules.ruteTextGeserPink}>Rp {ticket.price}</p>
                </Col>
              </Row>
            </Container>
          ))}
        </>
      )}
      <FormLogin show={showLogin} showLogin={setShowLogin} showDaftar={setShowDaftar} />
      <FormRegister show={showDaftar} showDaftar={setShowDaftar} />
    </>
  );
}

export default Rute;
