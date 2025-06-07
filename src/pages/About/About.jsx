import React, { useState, useRef, useEffect } from "react"; // Added useRef, useEffect
import NearByAttractions from "./components/nearByAttractions";
import aboutImg from "../../assets/about.png";
import { gsap } from "gsap"; // Import gsap

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const overlayRef = useRef(null); // Create a ref for the overlay

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMouseEnter = () => {
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 0,
        ease: "power2.inOut",
        onComplete: () => {
          // Optionally hide it completely after fade out to prevent mouse event issues
          if (overlayRef.current) {
            overlayRef.current.style.visibility = "hidden";
          }
        },
      });
    }
  };

  return (
    <div
      className="min-h-screen text-white p-8 relative" // Added 'relative'
      style={{ backgroundColor: "#1F2125" }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16">
          About The Cloud Hanthana
        </h1>

        <div
          className={`${
            !isExpanded
              ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              : "relative"
          }`}
        >
          {/* Google Maps Section */}
          <div
            className={`${
              !isExpanded
                ? "order-2 lg:order-1"
                : "float-left mr-8 mb-8 w-full lg:w-1/2"
            }`}
          >
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.6!2d80.6445!3d7.2906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e2039e!2sThe%20Cloud%20Hanthana!5e0!3m2!1sen!2slk!4v1638360000000!5m2!1sen!2slk"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              ></iframe>
              <div className="p-4 bg-gray-700">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="bg-white text-gray-900 px-2 py-1 rounded mr-2">
                    10 min
                  </span>
                  <span>from Kandy • The Cloud Hanthana</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`${!isExpanded ? "order-1 lg:order-2" : ""}`}>
            <div className="text-lg leading-relaxed">
              <p
                className="mb-6"
                style={{
                  fontFamily: "Lora",
                  fontWeight: 400,
                  fontSize: "28px",
                  lineHeight: "50px",
                  letterSpacing: "0%",
                  textAlign: "justify",
                  verticalAlign: "middle",
                }}
              >
                <span
                  style={{
                    fontFamily: "Lora",
                    fontSize: "80px",
                    fontWeight: 400,
                    float: "left",
                    marginRight: "8px",
                    lineHeight: "50px",
                  }}
                >
                  W
                </span>
                elcome to The Cloud Hanthana, where simplicity meets soul.
                Nestled just 10 minutes from Kandy, our boutique retreat offers
                a serene escape that feels worlds apart. We embrace a minimalist
                philosophy, using locally sourced materials and sustainable
                practices to create a space that's as eco-conscious as it is
                elegant. Here, you're not just a guest—you're family. Experience
                the warmth of home combined with the charm of a thoughtfully
                designed getaway. Discover a place to breathe, a place to
                belong.
              </p>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="animate-fadeIn">
                  <p
                    className="mb-6"
                    style={{
                      fontFamily: "Lora",
                      fontWeight: 400,
                      fontSize: "28px",
                      lineHeight: "50px",
                      letterSpacing: "0%",
                      textAlign: "justify",
                      verticalAlign: "middle",
                    }}
                  >
                    Nestled just 10 minutes from Kandy, our boutique retreat
                    offers a serene escape that feels worlds apart. We embrace a
                    minimalist philosophy, using locally sourced materials and
                    sustainable practices to create a space that's as
                    eco-conscious as it is elegant. Here, you're not just a
                    guest—you're family. Experience the warmth of home combined
                    with the charm of a thoughtfully designed getaway. Discover
                    a place to breathe, a place to belong.
                  </p>

                  <p
                    className="mb-6"
                    style={{
                      fontFamily: "Lora",
                      fontWeight: 400,
                      fontSize: "28px",
                      lineHeight: "50px",
                      letterSpacing: "0%",
                      textAlign: "justify",
                      verticalAlign: "middle",
                    }}
                  >
                    Welcome to The Cloud Hanthana, where simplicity meets soul.
                    Nestled just 10 minutes from Kandy, our boutique retreat
                    offers a serene escape that feels worlds apart. We embrace a
                    minimalist philosophy, using locally sourced materials and
                    sustainable practices to create a space that's as
                    eco-conscious as it is elegant. Here, you're not just a
                    guest—you're family. Experience the warmth of home combined
                    with the charm of a thoughtfully designed getaway. Discover
                    a place to breathe, a place to belong.
                  </p>

                  <p
                    className="mb-6"
                    style={{
                      fontFamily: "Lora",
                      fontWeight: 400,
                      fontSize: "28px",
                      lineHeight: "50px",
                      letterSpacing: "0%",
                      textAlign: "justify",
                      verticalAlign: "middle",
                    }}
                  >
                    Welcome to The Cloud Hanthana, where simplicity meets soul.
                    Nestled just 10 minutes from Kandy, our boutique retreat
                    offers a serene escape that feels worlds apart. We embrace a
                    minimalist philosophy, using locally sourced materials and
                    sustainable practices to create a space that's as
                    eco-conscious as it is elegant. Here, you're not just a
                    guest—you're family. Experience the warmth of home combined
                    with the charm of a thoughtfully designed getaway. Discover
                    a place to breathe, a place to belong.
                  </p>
                </div>
              )}

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="px-8 py-3 bg-transparent border border-gray-500 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300">
                  View Map
                </button>

                <button
                  onClick={toggleExpanded}
                  className="px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium"
                >
                  {isExpanded ? "Show Less" : "Learn More About"}
                </button>
              </div>
            </div>
          </div>

          {/* Clear floats when expanded */}
          {isExpanded && <div className="clear-both"></div>}
        </div>
      </div>

      {/* Image Overlay */}
      <div
        ref={overlayRef} // Assign the ref
        className="absolute inset-0 z-30 cursor-pointer" // Changed back to absolute to only cover About section
        style={{ backgroundColor: "#1F2125" }} // Matches page background, image will cover this
        onMouseEnter={handleMouseEnter} // Add mouse enter event
      >
        <img
          src={aboutImg}
          alt="About The Cloud Hanthana"
          className="object-cover" // Using object-cover for full coverage
        />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
      <NearByAttractions />
    </div>
  );
};

export default About;
