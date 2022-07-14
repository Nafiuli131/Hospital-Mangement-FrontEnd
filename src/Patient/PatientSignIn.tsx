import styles from "../Patient/Patient.module.css";
import { useState, useEffect } from "react";
export default function PatientSignIn(props) {
  const [pname, setpName] = useState<any>();
  const [age, setAge] = useState<any>();
  const [gender, setGender] = useState<any>();
  const [pemail, setpEmail] = useState<any>();
  const [pPass, setpPass] = useState<any>();
  const axios = require("axios");
  const saveUrl = "http://localhost:8080/registerPatient";
  const editUrl = "http://localhost:8080/editPatientInfo";
  useEffect(() => {
    if (props.type == "editPatient") {
      setpName(props.name);
      setAge(props.age);
      setGender(props.gender);
      setpEmail(props.email);
      setpPass(props.pass);
    }
  }, []);

  function getName(e) {
    setpName(e.target.value);
  }
  function getAge(e) {
    setAge(e.target.value);
  }
  function getGender(e) {
    setGender(e.target.value);
  }
  function getEmail(e) {
    setpEmail(e.target.value);
  }
  function getPassword(e) {
    setpPass(e.target.value);
  }
  function postData() {
    let postData;
    postData = {
      pateint_name: pname,
      patient_gender: gender,
      patient_age: age,
      patient_email: pemail,
      patient_pass: pPass,
    };
    if (props.type == "editPatient") {
      axios
        .put(`${editUrl}/${pemail}/${pname}/${age}/${gender}/${pPass}`)
        .then((res) => {
          alert("edit successfully");
        });
    } else {
      axios
        .post(saveUrl, postData)
        .then((res) => {
          alert("register patient successfully");
        })
        .catch((error) => {
          alert("registration failed");
        });
    }
  }
  return (
    <div className={styles.Authformcontainer}>
      <form className={styles.Authform}>
        <div className={styles.Authformcontent}>
          <h3 className={styles.Authformtitle}>Register as a Patient</h3>
          <div className="text-center">
            <span style={{ cursor: "pointer" }} className="link-primary"></span>
          </div>
          <div className="form-group mt-3">
            <label>Name </label>
            <input
              onChange={(e) => {
                getName(e);
              }}
              value={pname}
              className="form-control mt-1"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Age </label>
            <input
              onChange={(e) => {
                getAge(e);
              }}
              value={age}
              className="form-control mt-1"
              placeholder="Enter Age"
            />
          </div>
          <div className="form-group mt-3">
            <label>Gender </label>
            <input
              onChange={(e) => {
                getGender(e);
              }}
              value={gender}
              className="form-control mt-1"
              placeholder="Enter Gender"
            />
          </div>
          {/* <div className="form-group mt-3">
            <label>Disease </label>
            <input className="form-control mt-1" placeholder="Enter Disease" />
          </div> */}
          {props.type == "editPatient" ? (
            ""
          ) : (
            <div className="form-group mt-3">
              <label>Email </label>
              <input
                onChange={(e) => {
                  getEmail(e);
                }}
                value={pemail}
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
          )}

          <div className="form-group mt-3">
            <label>Password</label>
            <input
              onChange={(e) => {
                getPassword(e);
              }}
              value={pPass}
              type={props.type == "editPatient" ? "text" : "password"}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button onClick={postData} className="btn btn-primary">
              Submit
            </button>
          </div>
          {/* <div className="forgot-password text-right mt-2">Forget Password</div> */}
        </div>
      </form>
    </div>
  );
}
