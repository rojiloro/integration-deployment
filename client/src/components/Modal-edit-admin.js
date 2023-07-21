import React from "react";
import { Modal, Container, Image, Button } from "react-bootstrap";
import cssModules from "../css/Admin.module.css";

function ModalEditAdmin({ showEdit, showEditModal }) {
  const handleShowClose = () => showEditModal(false);
  return (
    <>
      <div>
        <Modal show={showEdit} onHide={handleShowClose}>
          <Container>
            <div className={cssModules.shape}>
              <Image src="../assets/img/Land Tick.png" />
              <Image src="../assets/img/train-facing-right 2.png" />
            </div>
            <button style={{ float: "right", position: "relative", top: "-2rem" }} className="btn-close" onClick={handleShowClose}></button>

            <div className={cssModules.inputAbu2}>
              <p className={cssModules.textInput}>1</p>
            </div>
            <div className={cssModules.inputAbu2} style={{ marginTop: "2.13rem" }}>
              <p className={cssModules.textInput}>Oji</p>
            </div>
            <div className={cssModules.inputAbu2} style={{ marginTop: "2.13rem" }}>
              <p className={cssModules.textInput}>Jakarta - Surabaya</p>
            </div>
            <div className={cssModules.inputAbu2} style={{ marginTop: "2.13rem" }}>
              <p className={cssModules.textInput}>bca.jpg</p>
            </div>
            <div className={cssModules.inputwhite} style={{ marginTop: "2.13rem" }}>
              <p className={cssModules.anjir}>Approved</p>
            </div>
            <div style={{ marginLeft: "8rem", marginBottom: "2.13rem" }}>
              <Button variant="success" style={{ width: "12.875rem", height: "2.5rem", flexShrink: 0, display: "flex", justifyContent: "center" }}>
                Save
              </Button>
            </div>
          </Container>
        </Modal>
      </div>
    </>
  );
}

export default ModalEditAdmin;
