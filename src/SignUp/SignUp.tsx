import styles from "../SignUp/SignUp.module.css";
import { useState } from "react";
import DoctorSignIn from "../Doctor/DoctorSignIn.tsx";
import PatientSignIn from "../Patient/PatientSignIn.tsx";
import DoctorInfo from "../Doctor/DoctorInfo.tsx";
import PatientInfo from "../Patient/PatientInfo.tsx";
export default function SignUp(props: any) {
  const [doctor, setDoctor] = useState(false);
  const [patient, setPatient] = useState(false);
  const [sign, setSign] = useState(true);
  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [doctorInfo, setDoctorInfo] = useState<any>(false);
  const [patientInfo, setPatientInfo] = useState<any>(false);
  const [doctorData, setDoctorData] = useState<any>();
  const [patientData, setPatientData] = useState<any>();
  const axios = require("axios");
  const getUrl = "http://localhost:8080/getDoctorInfo";
  const patientUrl = "http://localhost:8080/findPatient";
  function signIn() {
    if (props.type == "doctor") {
      setDoctor(true);
      setPatient(false);
      setSign(false);
    } else if (props.type == "patient") {
      setPatient(true);
      setDoctor(false);
      setSign(false);
    }
  }
  function getEmail(e) {
    setEmail(e.target.value);
  }
  function getPass(e) {
    setPassword(e.target.value);
  }
  function submitData() {
    if (props.type == "doctor") {
      axios.get(`${getUrl}/${email}/${password}`).then((res) => {
        if (res.data) {
          setDoctorData(res.data);
          showDoctorInfo();
        } else {
          alert("No doctor found");
        }
      });
    } else if (props.type == "patient") {
      axios.get(`${patientUrl}/${email}/${password}`).then((res) => {
        if (res.data) {
          setPatientData(res.data);
          showPatientInfo();
        } else {
          alert("No patient found");
        }
      });
    }
  }
  function showPatientInfo() {
    setPatientInfo(true);
    setDoctorInfo(false);
    setPatient(false);
    setDoctor(false);
    setSign(false);
  }
  function showDoctorInfo() {
    setPatientInfo(false);
    setDoctorInfo(true);
    setPatient(false);
    setDoctor(false);
    setSign(false);
  }

  return (
    <>
      {doctor ? <DoctorSignIn /> : null}
      {patient ? <PatientSignIn /> : null}
      {doctorInfo ? <DoctorInfo info={doctorData} /> : null}
      {patientInfo ? <PatientInfo info={patientData} /> : null}
      {sign ? (
        <div className={styles.Authformcontainer}>
          <form className={styles.Authform}>
            <div className={styles.Authformcontent}>
              <h3 className={styles.Authformtitle}>Sign In</h3>
              <h3 className={styles.Authformtitle}>
                {props.type == "doctor" ? "Doctor Table" : "Patient Table"}
              </h3>
              <div className="text-center">
                Already registered?
                <span
                  onClick={signIn}
                  style={{ cursor: "pointer" }}
                  className="link-primary"
                >
                  Sign In
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  onChange={(e) => {
                    getEmail(e);
                  }}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  onChange={(e) => {
                    getPass(e);
                  }}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <div onClick={submitData} className="btn btn-primary">
                  Submit
                </div>
              </div>
              {/* <div className="forgot-password text-right mt-2">Forget Password</div> */}
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}
