import styles from "../Doctor/Doctor.module.css";
export default function DoctorInfo(props: any) {
  console.log(props.info);
  return (
    <>
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
      </div>
    </>
  );
}
