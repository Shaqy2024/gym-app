import React from "react";

const Hero = () => {
  return (
    <>
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>LET'S</h1>
          <h1>GET</h1>
          <h1>MOVING</h1>
        </div>
        <div className="sub-title">
          <p>Your Journey to Fitness Starts Here</p>
          <p>Unleash Your Potential</p>
        </div>
        <div className="buttons">
          <button>Start Your Journey</button>
          <button>Discover Your Plan</button>
        </div>
      </div>
    </section>

<div class="fixes-bottom right-100 p-3" style={{ xIndex:'6',left:'initial', position:'fixed', bottom:'15px', right:'15px'}}>  
<a href = "https://wa.me/917303909682?text=hello how can help you ?" target="_blank">
<img src="https://static.cdnlogo.com/logos/w/29/whatsapp-icon.svg" width={60}/>
</a>
</div>
    
</>
  );
};

export default Hero;
