import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-image">

        <img
          src="https://i.pinimg.com/736x/9c/ff/8f/9cff8fb62c04b0491daa2c1ab6eae4b6.jpg"
          alt="Phim4people team"
        />
      </div>
      <div className="about-content">
        <h4>About Us</h4>
        <h2>Welcome to Phim4people </h2>
        <p>
          " Phim4people" là nhóm phát triển web xem phim với 4 thành viên tận tâm,  
          mong muốn mang đến trải nghiệm xem phim tuyệt vời cho mọi người.
        </p>
        <ul>
          <li>✔️ Đa dạng thể loại phim chất lượng cao</li>
          <li>✔️ Giao diện thân thiện, dễ sử dụng</li>
          <li>✔️ Liên hệ: dangthiphonglan6@gmail.com</li>
          <li>✔️ Các thành viên : Phong Lan, Tuấn, Duy, Ngân</li>
        </ul>
        <button>Meet Our Team</button>
      </div>
    </section>
  );
};

export default About;
