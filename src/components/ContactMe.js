import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css'
export const ContactMe = () => {

  const form = useRef();

  const sendEmail = (e) => {
  
    e.preventDefault();

    emailjs
      .sendForm('service_r8a6alr', 'template_pq0xh0d', form.current, {
        publicKey: '1vE5NartqLzqPi4AT',
      })
      .then(
        () => {
          alert('SUCCESS')
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
   const hstyle={
      color:'green'
   };
  return (
    <section id="contact-me" >
    <div className="contactForm">
    <form ref={form} onSubmit={sendEmail}>
     <h1 style={hstyle}>Contact Us</h1>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
    </section>
    
  );
};

export default ContactMe