import { useState } from "react";
import styles from "../Patient/Patient.module.css";
import PatientSignIn from "./PatientSignIn.tsx";
export default function PatientInfo(props: any) {
  const [edit, setEdit] = useState(false);
  function editInfo() {
    setEdit(true);
  }

  return (
    <>
      <div>
        {!edit ? (
          <div className="container">
            <div className="row">
              <div>
                <br></br>
                <h3>Name</h3>
                <p>{props.info.pateint_name}</p>
                <h3>Email</h3>
                <p>{props.info.patient_email}</p>
                <h3>Gender</h3>
                <p>{props.info.patient_gender}</p>
                <h3>Age</h3>
                <p>{props.info.patient_age}</p>
              </div>
            </div>
            <div className={styles.editStyle}>
              <div onClick={editInfo} className="btn btn-primary">
                Edit
              </div>
            </div>
          </div>
        ) : (
          <PatientSignIn
            type={"editPatient"}
            name={props.info.pateint_name}
            age={props.info.patient_age}
            gender={props.info.patient_gender}
            pass={props.info.patient_pass}
            email={props.info.patient_email}
          />
        )}
      </div>
    </>
  );
}
