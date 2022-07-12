import styles from "../Patient/Patient.module.css";
export default function PatientSignIn() {
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
            <input className="form-control mt-1" placeholder="Enter Name" />
          </div>
          <div className="form-group mt-3">
            <label>Age </label>
            <input className="form-control mt-1" placeholder="Enter Age" />
          </div>
          <div className="form-group mt-3">
            <label>Gender </label>
            <input className="form-control mt-1" placeholder="Enter Gender" />
          </div>
          {/* <div className="form-group mt-3">
            <label>Disease </label>
            <input className="form-control mt-1" placeholder="Enter Disease" />
          </div> */}
          <div className="form-group mt-3">
            <label>Email </label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          {/* <div className="forgot-password text-right mt-2">Forget Password</div> */}
        </div>
      </form>
    </div>
  );
}
