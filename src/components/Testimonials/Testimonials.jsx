"use client";
import { useEffect, useState } from "react";
import "./Testimonials.css";
import { IoIosStar } from "react-icons/io";
import { FaArrowLeft, FaArrowRight, FaThumbsUp } from "react-icons/fa6";

// Testimonials data
const testimonialsData = [
  {
    id: 1,
    name: "Kyle Roberts",
    designation: "DVM, Customer",
    image: "/placeholder.png",
    rating: 5,
    text: "I run equipment every day, and reliability is everything. Carteroil lubricants keep my machines running smoothly without sudden breakdowns. The difference in performance was clear from the start. I feel confident knowing my operations are protected by a brand with such a long history.",
  },
  {
    id: 2,
    name: "Stephen Brekke",
    designation: "Legacy Integration Producer",
    image: "/placeholder.png",
    rating: 4,
    text: "We had constant issues with downtime before switching to Carteroil. Their team recommended the right industrial lubricants, and the results were immediate. Our machines now run longer, and maintenance costs are lower. I trust Carteroil because they deliver on every promise.",
  },
  {
    id: 3,
    name: "Daniel Foster",
    designation: "Operations Manager",
    image: "/placeholder.png",
    rating: 5,
    text: "Our plant needed a solution to extend equipment life and cut downtime. Carteroil provided oils that performed far better than what we used before. We noticed longer drain intervals and smoother operations across the board. I would recommend them to any industrial facility.",
  },
  {
    id: 4,
    name: "Maria Lopez",
    designation: "Fleet Supervisor",
    image: "/placeholder.png",
    rating: 4,
    text: "I manage a fleet of trucks, and engine performance is critical. Carteroil automotive lubricants gave us cleaner engines and fewer breakdowns on the road. Fuel efficiency also improved, which helped reduce costs. Carteroil made a real difference in the way we operate.",
  },
  {
    id: 5,
    name: "James Carter",
    designation: "Plant Engineer",
    image: "/placeholder.png",
    rating: 5,
    text: "Our production lines demand heavy use day after day. Carteroil's industrial oils stood up to the challenge and improved machine reliability. The support team also made sure we had the right product for each system. Working with them gave us peace of mind and better results.",
  },
  {
    id: 6,
    name: "Sophia Anderson",
    designation: "Internal Officer",
    image: "/placeholder.png",
    rating: 5,
    text: "Finding the right supplier was a challenge until we worked with Carteroil. Their specialists listened to our needs and guided us to the right products. The oils have improved efficiency and reduced wear on our equipment. Carteroil has become a reliable partner for our business.",
  },
  {
    id: 7,
    name: "Elena Rodriguez",
    designation: "Marine Operations Director",
    image: "/placeholder.png",
    rating: 5,
    text: "Marine conditions are tough, and equipment failure can cause major delays. Carteroil marine lubricants gave us the protection we needed against corrosion and deposits. Engines now run longer between service intervals, and our crews trust the quality. Carteroil proved their products are built for demanding environments.",
  },
  {
    id: 8,
    name: "Ahmed Khan",
    designation: "Oilfield Project Lead",
    image: "/placeholder.png",
    rating: 5,
    text: "Oilfield operations move fast, and delays cost money. Carteroil's oilfield services gave us reliable equipment rentals and expert inspection teams. Their staff was skilled and worked safely, which kept our project on schedule. I know I can count on them when it matters most.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll for desktop
  useEffect(() => {
    if (window.innerWidth > 768 && !isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  // Get visible cards based on screen size
  const getVisibleCards = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    const cardsToShow = isMobile ? 1 : 3;
    
    const cards = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % testimonialsData.length;
      cards.push(testimonialsData[index]);
    }
    return cards;
  };

  return (
    <div className="testimonials">
      <h2>
        Our Customers, Our <span>Priority</span>
      </h2>
      <p className="description">
        For more than a century, Carteroil has supported businesses across
        industries. Our customers share how trusted lubricants and services
        helped them achieve lasting results.
      </p>

      <div className="testimonial-carousel-container">
        <div 
          className="testimonial-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {getVisibleCards().map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="top">
                <img
                  className="profile-img"
                  src={item.image}
                  alt={item.name}
                />
                <div className="stars">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <IoIosStar key={i} />
                  ))}
                </div>
              </div>
              <div className="mid">
                <p>{item.text}</p>
              </div>
              <div className="bottom">
                <div className="left">
                  <strong className="name">{item.name}</strong>
                  <span className="designation">{item.designation}</span>
                </div>
                <div className="right">
                  <div className="thumb">
                    <FaThumbsUp />
                  </div>
                  <span>Testimonial</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows - visible on mobile */}
        <div className="carousel-controls">
          <button onClick={prevSlide} className="carosel-btn">
            <FaArrowLeft />
          </button>
          <button onClick={nextSlide} className="carosel-btn">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;