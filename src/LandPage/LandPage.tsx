import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Styles from "../LandPage/LandPage.module.css";
import { useState } from "react";
import Contact from "../Contact/Contact.tsx";
import Patient from "../Patient/Patient.tsx";
import Doctor from "../Doctor/Doctor.tsx";

export default function LandPage() {
  const [home, setHome] = useState<any>(true);
  const [contact, setContact] = useState<any>(false);
  const [doctor, setDoctor] = useState<any>(false);
  const [patient, setPatient] = useState<any>(false);
  function getContact() {
    setContact(true);
    setHome(false);
    setDoctor(false);
    setPatient(false);
  }
  function getHome() {
    setHome(true);
    setContact(false);
    setDoctor(false);
    setPatient(false);
  }
  function getDoctor() {
    setDoctor(true);
    setContact(false);
    setHome(false);
    setPatient(false);
  }
  function getPatient() {
    setPatient(true);
    setContact(false);
    setDoctor(false);
    setHome(false);
  }
  return (
    <>
      <>
        <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
          <Container>
            <button className={Styles.navBarStyle}>
              <Navbar.Brand>Hospital Mangement System</Navbar.Brand>
            </button>

            <Nav>
              <button className={Styles.navBarStyle} onClick={getHome}>
                <Nav.Link>Home</Nav.Link>
              </button>
              <button className={Styles.navBarStyle} onClick={getContact}>
                <Nav.Link>Contact</Nav.Link>
              </button>
            </Nav>
          </Container>
        </Navbar>

        {home ? (
          <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="container">
              <div className="row">
                <div className={Styles.header}>
                  Welcome to the hospital management system
                </div>
              </div>
            </div>

            {/* login */}
            <Navbar
              bg="primary"
              variant="dark"
              fixed="bottom"
              collapseOnSelect
              expand="lg"
            >
              <Container>
                <button className={Styles.navBarStyle}>
                  <Navbar.Brand>Please Login as a</Navbar.Brand>
                </button>

                <Nav>
                  <button className={Styles.navBarStyle} onClick={getPatient}>
                    <Nav.Link>Patient</Nav.Link>
                  </button>
                  <button className={Styles.navBarStyle} onClick={getDoctor}>
                    <Nav.Link>Doctor</Nav.Link>
                  </button>
                </Nav>
              </Container>
            </Navbar>
          </>
        ) : null}
      </>

      {contact ? <Contact /> : null}
      {doctor ? <Doctor /> : null}
      {patient ? <Patient /> : null}
    </>
  );
}
