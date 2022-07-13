import styles from "../Doctor/Doctor.module.css";
import { useState } from "react";
import DoctorSignIn from "./DoctorSignIn.tsx";
export default function DoctorInfo(props: any) {
  const [editDoctorInfo, setEditDoctorInfo] = useState(false);
  function editInfo() {
    setEditDoctorInfo(true);
  }
  return (
    <>
      {!editDoctorInfo ? (
        <div>
          <div className="container">
            <div className="row">
              <div>
                <br></br>
                <h3>Name</h3>
                <p>{props.info.d_name}</p>
                <h3>Email</h3>
                <p>{props.info.email}</p>
                <h3>Qualification</h3>
                <p>{props.info.qualification}</p>
                <h3>Specified Area</h3>
                <p>{props.info.specified_area}</p>
              </div>
            </div>
          </div>
          <div className={styles.editStyle}>
            <div onClick={editInfo} className="btn btn-primary">
              Edit
            </div>
          </div>
        </div>
      ) : (
        <>
          <DoctorSignIn
            type={"editDoctor"}
            name={props.info.d_name}
            email={props.info.email}
            qualification={props.info.qualification}
            specialization={props.info.specified_area}
            password={props.info.password}
          />
        </>
      )}
    </>
  );
}
