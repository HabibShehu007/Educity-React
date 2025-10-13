import React, { useRef, useEffect } from "react";
import "./Testimonials.css";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      tx -= 25;
      if (tx < -75) tx = 0;
      slider.current.style.transform = `translateX(${tx}%)`;
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="testimonials">
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson 1</h3>
                  <span>Edusity, Canada</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I’ve ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson 2</h3>
                  <span>Edusity, Italy</span>
                </div>
              </div>
              <p>
                Studying at Edusity has transformed not just my academic journey, but my confidence and outlook on life. The mentorship and hands-on learning experiences helped me discover strengths I never knew I had.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>William Jackson 3</h3>
                  <span>Edusity, Manchester</span>
                </div>
              </div>
              <p>
                Edusity prepared me for the real world in ways I didn’t expect. From practical workshops to career guidance, every step was designed to help me succeed beyond the classroom.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>William Jackson 4</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                What makes Edusity special is the sense of belonging. I found lifelong friends, supportive faculty, and a campus culture that truly celebrates diversity and ambition.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
