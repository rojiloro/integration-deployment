import { Button, Container } from "react-bootstrap";
import Footer from "../components/Footer";
import { useMutation, useQuery } from "react-query";
import { API } from "../config/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTicket() {
  let Navigate = useNavigate();
  const [station, setStation] = useState([]);
  const [form, setForm] = useState({
    name_train: "",
    type_train: "",
    start_date_train: "",
    start_station_id: "",
    start_time: "",
    destination_station_id: "",
    arrival_time: "",
    price: "",
    qty: "",
  });

  console.log(form);

  const getStations = async () => {
    try {
      const response = await API.get("/stations");
      setStation(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.set("name_train", form.name_train);
      formData.set("type_train", form.type_train);
      formData.set("start_date", form.start_date);
      formData.set("start_station_id", form.start_station_id);
      formData.set("start_time", form.start_time);
      formData.set("destination_station_id", form.destination_station_id);
      formData.set("arrival_time", form.arrival_time);
      formData.set("price", form.price);
      formData.set("qty", form.qty);
      console.log(form.destination_station_id);
      console.log(form.start_station_id);

      const response = await API.post("/ticket", formData);
      console.log("add ticket success : ", response);

      Navigate("/adminindex");
    } catch (error) {
      console.log("add ticket failed : ", error);
    }
  });

  useEffect(() => {
    getStations();
  }, []);
  return (
    <>
      <div>
        <Container>
          <h2 style={{ marginTop: "3.31rem", marginBottom: "2.44rem" }}>Tambah Tiket</h2>
          <form onSubmit={(e) => handleSubmit.mutate(e)}>
            <input onChange={handleChange} value={form.name_train} name="name_train" type="text" placeholder="Nama Kereta" style={{ width: "100%", borderRadius: "0.3125rem", border: "2px solid #B1B1B1", marginBottom: "2.13rem" }} />
            <select onChange={handleChange} value={form.type_train} name="type_train" style={{ width: "100%", borderRadius: "0.3125rem", border: "2px solid #B1B1B1", marginBottom: "2.13rem" }}>
              <option hidden>Jenis Kereta</option>
              <option value="ekonomi">Ekonomi</option>
              <option value="eksekutif">Eksekutif</option>
              <option value="premium">Premium</option>
              <option value="bisnis">Bisnis</option>
            </select>
            <input
              onChange={handleChange}
              value={form.start_date}
              name="start_date"
              type="text"
              placeholder="Tanggal Keberangkatan"
              style={{ width: "100%", borderRadius: "0.3125rem", border: "2px solid #B1B1B1", marginBottom: "2.13rem" }}
            />
            <select onChange={handleChange} value={form.start_station_id} name="start_station_id" style={{ width: "100%", borderRadius: "0.3125rem", border: "2px solid #B1B1B1", marginBottom: "2.13rem" }}>
              <option hidden>Stasiun Keberangkatan</option>
              {station.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <input onChange={handleChange} value={form.start_time} name="start_time" type="text" placeholder="Jam Keberangkatan" style={{ width: "100%", borderRadius: "0.3125rem", border: "2px solid #B1B1B1", marginBottom: "2.13rem" }} />
            <select onChange={handleChange} value={form.destination_station_id} name="destination_station_id" style={{ width: "100%", borderRadius: "0.3125rem", border: "2px solid #B1B1B1", marginBottom: "2.13rem" }}>
              <option hidden>Stasiun Tujuan</option>
              {station.map((item) => (
                <option key={item.ID} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <input onChange={handleChange} value={form.arrival_time} name="arrival_time" type="text" placeholder="Jam Tiba" style={{ width: "100%", borderRadius: "0.3125rem", border: "2px solid #B1B1B1", marginBottom: "2.13rem" }} />
            <input onChange={handleChange} value={form.price} name="price" type="text" placeholder="Harga Tiket" style={{ width: "100%", borderRadius: "0.3125rem", border: "2px solid #B1B1B1", marginBottom: "2.13rem" }} />
            <input onChange={handleChange} value={form.qty} name="qty" type="text" placeholder="Qty" style={{ width: "100%", borderRadius: "0.3125rem", border: "2px solid #B1B1B1", marginBottom: "2.13rem" }} />
            <Button type="submit" variant="success" style={{ width: "25rem", display: "flex", justifyContent: "center", marginLeft: "24rem", marginBottom: "5rem" }}>
              Save
            </Button>
          </form>
        </Container>
        <Footer />
      </div>
    </>
  );
}
