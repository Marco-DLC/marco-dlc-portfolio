export default function ContactMe() {

    const handleSubmit = (event) => {
        event.preventDefault();
      
        const myForm = event.target;
        const formData = new FormData(myForm);
        
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
          .then(() => alert("Thank you for your submission"))
          .catch((error) => alert(error));
      };
      
      document
        .querySelector("form")
        .addEventListener("submit", handleSubmit);
      
  return (
    <div id="ContactMe">
      <h2>Contact Me</h2>
      <form name="contact" action={handleSubmit} method="POST">
      <input type="hidden" value="contact" />
        <p>
          <label htmlFor="name" >Name: </label>
          <input type="text" id='name' name="name" />
        </p>
        <p>
          <label htmlFor="email">Email: </label>
          <input type="email" id='email' name="email" />
        </p>
        <p>
          <label htmlFor="message">Message: </label>
          <textarea id='message' name="message" ></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}
