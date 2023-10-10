"use client";
import React from "react";
import styles from "../styles/pages/contactPage.module.scss";
import Title from "./shared/Title";
import ContactForm from "./contactForm";

const ContactPage = () => {
  return (
    <section className={styles.contactPage} id="contact">
      <div className={styles.contactWrapper}>
        <h1 className={styles.title}>
          <Title text="Get In Touch" />
        </h1>
        <p className={styles.text}>
          Have a sweet project in mind or just want to reach out to me? Feel
          free to send a message!
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
