import React, { useRef, useEffect } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      tx -= 25;
      if (tx < -75) tx = 0;
      slider.current.style.transform = `translateX(${tx}%)`;
    }, 2000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const users = [
    {
      img: "/assets/user-1.png",
      name: "William Jackson 1",
      location: "Edusity, Canada",
      quote:
        "Choosing to pursue my degree at Edusity was one of the best decisions I’ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      img: "/assets/user-2.png",
      name: "William Jackson 2",
      location: "Edusity, Italy",
      quote:
        "Studying at Edusity has transformed not just my academic journey, but my confidence and outlook on life. The mentorship and hands-on learning experiences helped me discover strengths I never knew I had.",
    },
    {
      img: "/assets/user-3.png",
      name: "William Jackson 3",
      location: "Edusity, Manchester",
      quote:
        "Edusity prepared me for the real world in ways I didn’t expect. From practical workshops to career guidance, every step was designed to help me succeed beyond the classroom.",
    },
    {
      img: "/assets/user-4.png",
      name: "William Jackson 4",
      location: "Edusity, USA",
      quote:
        "What makes Edusity special is the sense of belonging. I found lifelong friends, supportive faculty, and a campus culture that truly celebrates diversity and ambition.",
    },
  ];

  return (
    <div className="testimonials">
      <div className="slider">
        <ul ref={slider}>
          {users.map((user, index) => (
            <li key={index}>
              <div className="slide">
                <div className="user-info">
                  <img src={user.img} alt={user.name} />
                  <div>
                    <h3>{user.name}</h3>
                    <span>{user.location}</span>
                  </div>
                </div>
                <p>{user.quote}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
