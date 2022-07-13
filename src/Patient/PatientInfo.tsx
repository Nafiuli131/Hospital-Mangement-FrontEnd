export default function PatientInfo(props: any) {
  return (
    <>
      <div>
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
        </div>
      </div>
    </>
  );
}
