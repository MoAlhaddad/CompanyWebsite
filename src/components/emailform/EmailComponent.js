import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p>Your Message has been Successfully sent. I will contact you soon </p>
  );
};

function EmailComponent() {
  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hkwfhor",
        "template_c0cut8i",
        form.current,
        "lp3n9c12kH59C65ah"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="formWord">
        <h2>Reach Out to Us!</h2>
        <span>Full Name</span>
        <br />
        <input className="input100" type="text" name="fullName" required />
        <br />
        <span>Phone Number</span>
        <br />
        <input className="input100" type="text" name="phone" required />
        <br />
        <span>Email</span>
        <br />
        <input className="input100" type="text" name="email" required />
        <br />
      </div>
      <div className="formWord">
        <span>Message</span>
        <br />
        <textarea name="message" required></textarea>
        <br />
        <button>SUBMIT</button>

        <div className="row">{result ? <Result /> : null}</div>
      </div>
    </form>
  );
}

export default EmailComponent;
