import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/contact.css";

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cv7wda2",
        "template_n3k8kxf",
        form.current,
        "KEgy-wTRNGD0D2r4g"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="home-body">
      <nav>
        <div className="nav-anchors">
          <a href="/">Home</a>
          <a href="/about">About Me</a>
        </div>
        <div className="nav-anchors">
          <a href="/work">My Work</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
      <main className="about-cont">
        <section className="bio">
          <p>Please reach out to me with and questions you may have.</p>
          <p className="bio-text">
            <a href="https://github.com/EfSoren">GitHub -</a>
            <a href="https://www.linkedin.com/in/ethan-sorensen-076324266/">
              - LinkedIn
            </a>
          </p>
          <p className="bio-text">
            “Technology is best when it brings people together.” - Matt
            Mullenweg
          </p>
          <form className="email-box" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input className="form-box" type="text" name="from_name" />
            <label>Your Email</label>
            <input className="form-box" type="email" name="user_email" />
            <label>Message</label>
            <textarea className="message-box" name="message" />
            <input className="send-box" type="submit" value="Send" />
          </form>
        </section>
      </main>
    </div>
  );
}
