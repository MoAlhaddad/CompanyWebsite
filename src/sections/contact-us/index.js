/** @jsx jsx */
import { jsx, Button, Container, Box, Input, Text, Textarea } from "theme-ui";
import { Formik } from "formik";
import styles from "./styles";
import { useState, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ErrorText = ({ children }) => (
  <Text sx={styles.errorText}>{children}</Text>
);

const ContactUs = React.forwardRef((props, ref) => {
  const [result, showResult] = useState(false);
  const [contactUsForm, setContactUsForm] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const sendEmail = (form) => {
    emailjs
      .sendForm(
        "service_hkwfhor",
        "template_c0cut8i",
        form,
        "lp3n9c12kH59C65ah"
      )
      .then(
        (result) => {
          setContactUsForm(form);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  const inputStyles = (error) => {
    if (error) return { ...styles.input, ...styles.errorInput };
    return styles.input;
  };
  const handleInputChange = (e, setFieldValue) => {
     e.preventDefault();
     setFieldValue(e.target.id, e.target.value);
  }
  return (
    <section
      ref={ref}
      id="contact-us"
      sx={{ variant: "section.contactUs", ...styles.container }}
    >
      <Container sx={styles.containerBox}>
        <Formik
          initialValues={{
            firstName: contactUsForm.firstName,
            lastName: contactUsForm.lastName,
            phoneNumber: contactUsForm.phoneNumber,
            email: contactUsForm.email,
          }}
          validate={(values) => {
            debugger;
            const errors = {};
            if (!values.firstName) errors.firstName = "First name is required";
            if (!values.lastName) errors.lastName = "Last name is required";
            if (!values.email) errors.email = "Email is required";
            if (
              !values.email.match(
                /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
              )
            )
              errors.email = "Provide a valid email";
            return errors;
          }}
          onSubmit={(values, { setValues, setIsSubmitting }) => {
            debugger;
            sendEmail(values);
            setValues(values);
            setIsSubmitting(false);
          }}
        >
          {({ values, errors, setFieldValue, handleSubmit }) => (
              <form sx={styles.form} onSubmit={handleSubmit}>
                <h2 style={{ width: "100%" }}>Reach Out to Us!</h2>
                <Box sx={styles.inputContainer50}>
                  <Text sx={styles.inputContainer50Text}>First Name *</Text>
                  <Input
                    sx={inputStyles(errors.firstName)}
                    onChange={e => handleInputChange(e, setFieldValue)}
                    value={values.firstName}
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                  />
                  <ErrorText>{errors.firstName && errors.firstName}</ErrorText>
                </Box>
                <Box sx={styles.inputContainer50}>
                  <Text sx={styles.inputContainer50Text}>Last Name *</Text>
                  <Input
                    sx={inputStyles(errors.lastName)}
                    onChange={e => handleInputChange(e, setFieldValue)}
                    value={values.lastName}
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                  />
                  <ErrorText>{errors.lastName && errors.lastName}</ErrorText>
                </Box>
                <Box sx={styles.inputContainer50}>
                  <Text sx={styles.inputContainer50Text}>Phone Number</Text>
                  <Input
                    sx={styles.input}
                    onChange={e => handleInputChange(e, setFieldValue)}
                    value={values.phoneNumber}
                    id="phoneNumber"
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                  />
                </Box>
                <Box sx={styles.inputContainer50}>
                  <Text sx={styles.inputContainer50Text}>Email *</Text>
                  <Input
                    sx={inputStyles(errors.email)}
                    onChange={e => handleInputChange(e, setFieldValue)}
                    value={values.email}
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                  <ErrorText>{errors.email && errors.email}</ErrorText>
                </Box>
                <Box sx={styles.textAreaContainer}>
                  <Text sx={styles.inputContainer50Text}>Message</Text>
                  <Textarea
                    sx={styles.textArea}
                    name="message"
                    defaultValue="hello"
                  />
                  <br />
                  <Button
                    sx={styles.submitButton}
                    className="btn"
                    aria-label="Send Message"
                    type="submit"
                  >
                    Send Message <FaPaperPlane />
                  </Button>
                  <Box className="row">{result ? <Result /> : null}</Box>
                </Box>
              </form>
            )}
        </Formik>
      </Container>
    </section>
  );
});

export default ContactUs;
