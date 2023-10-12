import React from "react";
import styles from "../styles/components/contactForm.module.scss";
import Button from "./shared/Button";
import { useState, useEffect, useRef } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({});
  const refs = {
    name: useRef(null),
    email: useRef(null),
    subject: useRef(null),
    message: useRef(null),
  };

  useEffect(() => {
    // add padding to the form when there is a value in the input dynamically
    for (const [key, value] of Object.entries(formData)) {
      const ref = refs[key];
      if (ref && value !== "") {
        ref.current.style.padding = "0.5rem 0";
      } else if (ref) {
        ref.current.style.padding = "0";
      }
    }
  }, [formData]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      action="https://formsubmit.co/80c8566818e48be1248861ee6ba7081e"
      method="POST"
      className={styles.form}
    >
      <label htmlFor="name">
        NAME
        <input
          ref={refs.name}
          type="text"
          name="name"
          id="name"
          required
          onChange={(e) => handleInputChange(e)}
        />
      </label>
      <label htmlFor="email">
        EMAIL
        <input
          ref={refs.email}
          type="email"
          name="email"
          id="email"
          required
          onChange={(e) => handleInputChange(e)}
        />
      </label>
      <label htmlFor="subject">
        SUBJECT
        <input
          ref={refs.subject}
          type="text"
          name="subject"
          id="subject"
          required
          onChange={(e) => handleInputChange(e)}
        />
      </label>
      <label htmlFor="message">
        MESSAGE
        <input
          ref={refs.message}
          type="text"
          name="message"
          id="message"
          required
          onChange={(e) => handleInputChange(e)}
        />
      </label>
      <Button value="Send" />
    </form>
  );
};

export default ContactForm;
