import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_xxxx", "template_xxxx", formRef.current, "user_xxxx")
      .then(() => alert("Message Sent!"), (error) => console.error(error));
  };

  return (
    <section id="contact" ref={ref}>
      <h2>Contact Us</h2>
      <form ref={formRef} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button class="submit_button" type="submit">Send</button>
      </form>
    </section>
  );
});

export default Contact;
