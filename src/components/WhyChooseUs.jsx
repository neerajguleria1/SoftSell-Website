import './WhyChooseUs.css';
import ShieldIcon from "./images/Shield-Icon.png";
import ThumbsUpIcon from "./images/ThumbsUp-Icon.png";
import UserIcon from "./images/User-Icon.png";
const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="reasons">
        <div className="reason">
          <img src={ShieldIcon} alt="Reason 1" />
          <p>Fast Processing</p>
        </div>
        <div className="reason">
          <img src={ThumbsUpIcon} alt="Reason 2" />
          <p>Secure Transactions</p>
        </div>
        <div className="reason">
          <img src={UserIcon} alt="Reason 3" />
          <p>Top Valuation</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
