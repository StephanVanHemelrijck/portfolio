import React from "react";
import styles from "../styles/components/contactForm.module.scss";
import Button from "./shared/Button";
import { useState, useEffect } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({});

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
