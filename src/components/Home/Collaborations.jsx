"use client"
import React from "react";
import "./Collaborations.css";
import Button from "../Buttons/Button";
import { useRouter } from "next/navigation";

const Collaborations = () => {
  const router = useRouter();
  return (
    <div className="collaborations">
      <h2>COLLABORATIONS</h2>
      <p className="desc">
        From Our Origins In 1893 To Today’s Global Presence, These Images
        Showcase The Innovation, Expertise, And Partnerships That Define Carter
        Oil.
      </p>

      <div className="gallery-container">
        {/* Left grid */}
        <div className="left">
          <div className="top">
            <img src="/collaboration1.jpg" alt="Collaboration" />
            <img src="/collaboration2.png" alt="Collaboration" />
          </div>
          <div className="bottom">
            <img src="/collaboration3.jpg" alt="Collaboration" />
          </div>
        </div>

        {/* Right big image */}
        <div
          className="right"
          style={{
            backgroundImage: "url(/collaboration4.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overlay">
            <h3>OUR WORK IN ACTION</h3>
            <p>
              Explore Highlights From Carter Oil’s Journey — From Historic
              Milestones To Modern Operations. See How Our Products And Services
              Power Industries Worldwide.
            </p>
            <div className="buttons-container">
              <Button
                variant="filled"
                color="white"
                onClick={() => {
                  router.push("/products");
                }}
              >
                Explore Lubricants
              </Button>
              <Button variant="outline" color="white"   onClick={() => {
              router.push("/contact-us");
            }}>
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborations;
