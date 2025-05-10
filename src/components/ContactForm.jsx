import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-form">
      <h2 className="section-title">Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <input type="text" placeholder="Company" className="input-field" />
        <select className="input-field">
          <option value="">License Type</option>
          <option value="enterprise">Enterprise</option>
          <option value="standard">Standard</option>
        </select>
        <textarea placeholder="Message" className="input-field" rows="4"></textarea>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
