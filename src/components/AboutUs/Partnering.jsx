"use client"
import React from "react";
import "./Partnering.css";
import { useRouter } from "next/navigation";
const Partnering = () => {
  const router = useRouter();
  return (
    <div className="partnering">
      <div className="left">
        <h2>Partnering for Your Success</h2>
        <p>
          We believe in partnerships that last. At Carteroil, your success
          defines ours. We stand beside you to make sure our lubricants <a href="https://carteroilusa.com/products/equipment">improve
            your operations and cut downtime</a>. You get solutions that <a href="https://carteroilusa.com/pipes-and-tubing">keep your
              equipment reliable and efficient</a>. You may need stronger machinery,
          longer product life, or a supplier you can always trust. Our
          lubricants keep your machines running at their best. You can focus on
          progress, knowing Carteroil delivers the quality that drives success.
        </p>
        <button
          onClick={() => {
            router.push("/contact-us");
          }}
        >
          Contact Us
        </button>
      </div>
      <div className="right">
        <img src="/partnering.webp" alt="Success" />
      </div>
    </div>
  );
};

export default Partnering;
