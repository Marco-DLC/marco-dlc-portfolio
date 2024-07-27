import { useState } from "react";

export default function ContactMe({contactRef}) {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setIsSent(true))
      .catch((error) => alert(error));
  };

  document.querySelector("form").addEventListener("submit", handleSubmit);
      
  return (
    <div id="ContactMe" ref={contactRef}>
      <h2 className="fade-scale-in">Contact Me</h2>
      {isSent ? (
        <div>
          <h3>Thank You!</h3>
          <p>Your message has been sent.</p>
        </div>
      ) : (
        <form className="fade-scale-in" name="contact" action={handleSubmit} method="POST">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" required />
          </p>
          <p>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" required />
          </p>
          <p>
            <label htmlFor="message">Message: </label>
            <textarea id="message" name="message" required></textarea>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      )}
    </div>
  );
}
