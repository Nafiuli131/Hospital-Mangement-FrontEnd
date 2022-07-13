import styles from "../Doctor/Doctor.module.css";
import { useState, useEffect } from "react";

export default function DoctorSignIn(props: any) {
  const [dname, setdName] = useState<any>();
  const [dqualification, setdQualification] = useState<any>();
  const [darea, setDarea] = useState<any>();
  const [demail, setdEmail] = useState<any>();
  const [dPass, setdPass] = useState<any>();
  const axios = require("axios");
  const saveUrl = "http://localhost:8080/saveDoctor";
  const editUrl = "http://localhost:8080/editDoctorInfo";
  useEffect(() => {
    if (props.type == "editDoctor") {
      setdName(props.name);
      setdEmail(props.email);
      setDarea(props.specialization);
      setdPass(props.password);
      setdQualification(props.qualification);
    }
  }, []);
  function name(e) {
    setdName(e.target.value);
  }
  function qualification(e) {
    setdQualification(e.target.value);
  }
  function area(e) {
    setDarea(e.target.value);
  }
  function email(e) {
    setdEmail(e.target.value);
  }
  function password(e) {
    setdPass(e.target.value);
  }
  function postSubmit() {
    let doctorInfo;
    doctorInfo = {
      d_name: dname,
      qualification: dqualification,
      specified_area: darea,
      email: demail,
      password: dPass,
    };
    if (props.type == "editDoctor") {
      axios
        .put(
          `${editUrl}/${demail}/${dname}/${dqualification}/${darea}/${dPass}`
        )
        .then((res) => {
          alert("edit successfully");
        });
    } else {
      axios
        .post(saveUrl, doctorInfo)
        .then((response) => {
          alert("save successfully");
        })
        .catch((error) => {
          alert("don't save successfully");
        });
    }
  }

  return (
    <div className={styles.Authformcontainer}>
      <form className={styles.Authform}>
        <div className={styles.Authformcontent}>
          <h3 className={styles.Authformtitle}>Register as a Doctor</h3>
          <div className="text-center">
            <span style={{ cursor: "pointer" }} className="link-primary"></span>
          </div>
          <div className="form-group mt-3">
            <label>Name </label>
            <input
              onChange={(e) => {
                name(e);
              }}
              value={dname}
              className="form-control mt-1"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Qualification </label>
            <input
              onChange={(e) => {
                qualification(e);
              }}
              value={dqualification}
              className="form-control mt-1"
              placeholder="Enter Qualification"
            />
          </div>
          <div className="form-group mt-3">
            <label>Specialized Area </label>
            <input
              onChange={(e) => {
                area(e);
              }}
              value={darea}
              className="form-control mt-1"
              placeholder="Enter Specialized Area "
            />
          </div>
          {props.type == "editDoctor" ? (
            ""
          ) : (
            <div className="form-group mt-3">
              <label>Email </label>
              <input
                onChange={(e) => {
                  email(e);
                }}
                value={demail}
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
                password(e);
              }}
              value={dPass}
              type={props.type == "editDoctor" ? "text" : "password"}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button onClick={postSubmit} className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
