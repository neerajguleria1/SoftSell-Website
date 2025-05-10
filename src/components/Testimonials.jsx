import './Testimonials.css';
import AdityaImage from './images/Aditya-Adhana.png'; // Make sure this image exists in the correct path

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="section-title">Customer Testimonials</h2>
      <div className="reviews">
        <div className="review">
          <img src={AdityaImage} alt="Aditya Adhana" className="review-img" />
          <div>
            <p>"SoftSell provides tremendous value. The experience was smooth and efficient!"</p>
            <p>- <strong>Aditya Adhana</strong> <span className="pronoun">(He/Him · 3rd)</span>, Co-founder @Credex</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
