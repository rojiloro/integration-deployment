import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import cssModules from "../css/Tiket.module.css";
import Image from "react-bootstrap/Image";
import { useState, useEffect } from "react";
import { useMutation, useQuery } from "react-dom";
import { API } from "../config/api";

import Rute from "./Rute";

function FormTiket() {
  const [stations, setStations] = useState([]);
  const [form, setForm] = useState({
    start_station_id: "",
    destination_station_id: "",
  });

  const getStations = async () => {
    try {
      const response = await API.get("/stations");
      setStations(response.data.data);
      console.log("data filter si..", stations);
    } catch (error) {
      alert("cek console log yak");
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [search, setSearch] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    form.start_station_id === "" && form.destination_station_id === "" ? setSearch(false) : setSearch(true);
  };

  useEffect(() => {
    getStations();
  }, []);
  return (
    <>
      <div>
        <Container className={cssModules.homeTiketContainer}>
          <Row>
            <Col sm={4} className={cssModules.tiketKolom}>
              <div className={cssModules.tiketKotakOren}></div>
              <div className={cssModules.tiketTag}>
                <Image src="../assets/img/icon-train.png" className={cssModules.iconTrain} />
                <p className={cssModules.tiketPtext}>Tiket Kereta Api</p>
              </div>
            </Col>
            <Col sm={8}>
              <p className={cssModules.tiketPtext2}>Tiket Kereta Api</p>
              <Row>
                <Col xl={5}>
                  <div className={cssModules.tiketGrup}>
                    <p className={cssModules.tiketPtext3}>Asal</p>
                    <select className={cssModules.tiketInput} name="start_station_id" value={form.start_station_id} onChange={handleChange}>
                      <option hidden>Stasiun keberangkatan</option>
                      {stations.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <p className={cssModules.tiketPtext3}>Tanggal Berangkat</p>
                    <input type="Checkbox" className={cssModules.tiketCheckbox} />
                    <p className={cssModules.tiketPtext4}>Pulang Pergi</p>
                  </div>
                  <div className={cssModules.tiketGrup}>
                    <input type="date" className={cssModules.tiketDate} />
                  </div>
                </Col>
                <Col xl={2}>
                  <Image src="../assets/img/Rounded.png" className={cssModules.imgRounded} />
                </Col>
                <Col xl={5}>
                  <div className={cssModules.tiketGrup}>
                    <p className={cssModules.tiketPtext3}>Tujuan</p>
                    <select className={cssModules.tiketInput} name="destination_station_id" value={form.destination_station_id} onChange={handleChange}>
                      <option hidden>Stasiun tujuan</option>
                      {stations.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className={cssModules.tiketGrup2}>
                    <p className={cssModules.tiketPtext3}>Dewasa</p>
                    <p className={cssModules.tiketPtext5}>Bayi</p>
                  </div>
                  <div className={cssModules.tiketSelectP}>
                    <div className={cssModules.tiketGrup}>
                      <select className={cssModules.tiketSelect}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className={cssModules.tiketGrup}>
                      <select className={cssModules.tiketSelect}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div>
                      <Button className={cssModules.btnCari} onClick={handleClick}>
                        Cari Tiket
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row style={{ marginLeft: "1rem" }}>
            <Col xs={2}>
              <p>Nama Kereta</p>
            </Col>
            <Col xs={2}>
              <p>Berangkat</p>
            </Col>
            <Col xs={2}>
              <p>Tiba</p>
            </Col>
            <Col xs={2}>
              <p>Durasi</p>
            </Col>
            <Col s={2}>
              <p>Harga Per Orang</p>
            </Col>
          </Row>
        </Container>
        <Rute startStation={form.start_station_id} destinationStation={form.destination_station_id} search={search} />
      </div>
    </>
  );
}

export default FormTiket;
