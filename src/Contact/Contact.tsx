import styles from "../Contact/Contact.module.css";
export default function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div>
            <br></br>
            <h3 className={styles.header}>About Me</h3>
            <p>Hi I'm Nafiul Islam</p>
            <p>
              I pursued my B.S. in Computer Science and Engineering from the
              passion of exploring this field. With this aim, I have the focus
              to engage in core software development, and contribute to
              academic-industrial research that would make the lives of common
              people better. I am more fond of learning and working in the
              domains of Blockchain, Algorithms, Web Developing, Machine
              Learning, Data Mining and Networking related developments. Also, I
              have a keen interest in applying software engineering. I wish to
              contribute to the country’s economy with my skills and build
              applications that can positively affect human lives in society.
            </p>
            <h3 className={styles.header}>Current Position and Workplace </h3>
            <p>
              <div> Programmer </div>
              <div> Software Development and Implementation Department,</div>
              <div> Synesis IT Limited</div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
