import React, { useState } from "react";
import facebookIcon from "../assets/icons/facebook-box-line.svg";
import instagramIcon from "../assets/icons/instagram-line.svg";
import youtubeIcon from "../assets/icons/youtube-line.svg";
import tiktokIcon from "../assets/icons/tiktok-fill.svg";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Basic email validation
    if (email && email.includes("@")) {
      setMessage(`Thank you for subscribing, ${email}!`);
      setEmail(""); // Clear input after submission
    } else {
      setMessage("Please enter a valid email address.");
    }
    // Hide message after 3 seconds
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <footer
      id="contact-section"
      className="text-gray-300 py-12 px-4 sm:px-6 lg:px-8 font-sans"
      style={{ backgroundColor: "#1F2125" }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-10">
          {/* Map Section */}
          <div className="w-full md:col-span-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.6565!2d80.6248!3d7.2553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e2c3f8!2sCloud%20Hanthana!5e0!3m2!1sen!2slk!4v1635000000000!5m2!1sen!2slk"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
              title="Cloud Hanthana Location"
            ></iframe>
          </div>

          {/* Explore Section */}
          <div className="flex flex-col items-center">
            <div className="text-left">
              <h3
                className="text-xl font-semibold text-white mb-4"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 700,
                  fontSize: "28px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                }}
              >
                Explore
              </h3>
              <ul
                className="space-y-2"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "250%",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                }}
              >
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Accommodations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Dining
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Experiences
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Nearby Attractions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us & Newsletter Section */}
          <div>
            <h3
              className="text-xl font-semibold text-white mb-4"
              style={{
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "150%",
                letterSpacing: "0%",
                verticalAlign: "middle",
              }}
            >
              Contact Us
            </h3>
            <div
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "150%",
                letterSpacing: "0%",
                verticalAlign: "middle",
              }}
            >
              <p className="mb-2">55A, Hanthana, Kandy, Sri Lanka.</p>
              <p className="mb-2">
                Email:{" "}
                <a
                  href="mailto:info@thecloudhanthana.com"
                  className="hover:text-white transition-colors"
                >
                  info@thecloudhanthana.com
                </a>
              </p>
              <p className="mb-6">
                Phone:{" "}
                <a
                  href="tel:+94811234567"
                  className="hover:text-white transition-colors"
                >
                  +94 81 123 4567
                </a>
              </p>
            </div>

            <h3
              className="text-xl font-semibold text-white mb-4"
              style={{
                fontFamily: "Inter",
                fontWeight: 800,
                fontSize: "28px",
                lineHeight: "150%",
                letterSpacing: "0%",
                verticalAlign: "middle",
              }}
            >
              Subscribe for newsletter
            </h3>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow p-3 rounded-md text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style={{
                  background: "#FFFFFF1A",
                  border: "2px solid #FFFFFF",
                  backdropFilter: "blur(10px)",
                }}
                required
              />
              <button
                type="submit"
                className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-md hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                  textTransform: "capitalize",
                  color: "#1E1E1E",
                }}
              >
                Submit
              </button>
            </form>
            {message && (
              <div className="mt-3 p-3 rounded-md bg-blue-500 text-white text-sm">
                {message}
              </div>
            )}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61556902597928"
                aria-label="Facebook"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="h-6 w-6 filter brightness-0 invert hover:opacity-75 transition-opacity"
                />
              </a>
              <a
                href="https://www.instagram.com/thecloudhanthana/"
                aria-label="Instagram"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="h-6 w-6 filter brightness-0 invert hover:opacity-75 transition-opacity"
                />
              </a>
              <a href="#" aria-label="YouTube">
                <img
                  src={youtubeIcon}
                  alt="YouTube"
                  className="h-6 w-6 filter brightness-0 invert hover:opacity-75 transition-opacity"
                />
              </a>
              <a href="#" aria-label="TikTok">
                <img
                  src={tiktokIcon}
                  alt="TikTok"
                  className="h-6 w-6 filter brightness-0 invert hover:opacity-75 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 text-center">
          <p
            className="text-sm"
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "150%",
              letterSpacing: "0%",
              verticalAlign: "middle",
            }}
          >
            &copy; 2025 The Cloud Hanthana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
