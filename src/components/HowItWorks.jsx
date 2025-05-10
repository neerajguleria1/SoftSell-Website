import './HowItWorks.css';

import UserIcon from './images/User-Icon.png'
import DollarIcon from "./images/Dollar-Sign.png"
import CardIcon from "./images/Card-Icon.png"
const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="section-title">How It Works</h2>
      <div className="steps">
        <div className="step">
          <img src={UserIcon} alt="Upload Icon" />
          <p>Upload License</p>
        </div>
        <div className="step">
          <img src={DollarIcon} alt="Valuation Icon" />
          <p>Get Valuation</p>
        </div>
        <div className="step">
          <img src={CardIcon} alt="Paid Icon" />
          <p>Get Paid</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
