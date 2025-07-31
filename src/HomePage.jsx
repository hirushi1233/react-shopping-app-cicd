import React from "react";
import { useNavigate } from "react-router-dom";

// Local image imports
import hero1 from "./assets/hero1.jpg";
import hero2 from "./assets/hero2.jpg";
import hero3 from "./assets/hero3.jpg";

import nordic from "./assets/nordic.jpg";
import sand from "./assets/sand.jpg";
import pink from "./assets/pink.jpg";
import indigo from "./assets/indigo.jpg";

import conceptBg from "./assets/concept-bg.jpg";

const NewArrivals = [
  {
    name: "LOVE",
    price: "$190",
    tag: "NEW",
    img: nordic,
  },
  {
    name: "NECKLACE BUBBLE TRAY",
    price: "$250",
    tag: null,
    img: sand,
  },
  {
    name: "PINK TRAY",
    price: "$200",
    discount: "$170",
    tag: "SALE",
    img: pink,
  },
  {
    name: "ASTHETIC VASE",
    price: "$300",
    tag: null,
    img: indigo,
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .homepage {
          font-family: sans-serif;
        }
        .hero-section {
          background-color: #92b8c5ff;
          padding: 4rem 1rem;
          text-align: center;
        }
        .hero-section h1 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .hero-section p {
          color: #4b5563;
          max-width: 600px;
          margin: 0 auto 1.5rem;
        }
        .button-group {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .btn {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
        }
        .btn.default {
          background-color: #1f2937;
          color: white;
        }
        .btn.outline {
          background-color: transparent;
          color: #1f2937;
          border: 2px solid #1f2937;
        }
        .hero-images {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .hero-images img {
          width: 13rem;
          height: 13rem;
          object-fit: cover;
          border-radius: 9999px;
        }
        .new-arrivals {
          padding: 4rem 1rem;
          text-align: center;
        }
        .new-arrivals h2 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 2.5rem;
        }
        .arrivals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .arrival-item img {
          width: 8rem;
          height: 8rem;
          margin-bottom: 1rem;
        }
        .item-tag {
          display: block;
          font-size: 0.75rem;
          color: #ec4899;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        .arrival-item h3 {
          font-weight: 500;
          font-size: 0.9rem;
        }
        .arrival-item p {
          font-size: 0.875rem;
        }
        .price-old {
          text-decoration: line-through;
          color: #9ca3af;
          margin-right: 0.5rem;
        }
        .price-discount {
          color: #ec4899;
        }
        .concept-section {
          background-color: #e5e7eb;
          padding: 5rem 1rem;
          text-align: center;
          position: relative;
        }
        .concept-text {
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .concept-text h2 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #ffffff;
        }
        .concept-text p {
          color: #ffffff;
          margin-bottom: 1.5rem;
        }
        .concept-image {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
        }
        .concept-image img {
          width: 100%;
          height: 16rem;
          object-fit: cover;
          filter: blur(8px);
        }
      `}</style>

      <div className="homepage">
        {/* Hero Section */}
        <section className="hero-section">
          <h1>POTTERY MADE WITH LOVE</h1>
          <p>
            Every item created in our studio is carefully crafted with a focus
            on the smallest detail. The art of pottery is our inspiration and
            passion.
          </p>
          <div className="button-group">
            <button className="btn default" onClick={() => navigate("/purchase")}>
              PURCHASE
            </button>
            <button className="btn outline">LEARN MORE</button>
          </div>
          <div className="hero-images">
            <img src={hero1} alt="Hero" />
            <img src={hero2} alt="Hero" />
            <img src={hero3} alt="Hero" />
          </div>
        </section>

        {/* New Arrivals */}
        <section className="new-arrivals">
          <h2>NEW ARRIVALS</h2>
          <div className="arrivals-grid">
            {NewArrivals.map((item, index) => (
              <div key={index} className="arrival-item">
                <img src={item.img} alt={item.name} />
                {item.tag && <span className="item-tag">{item.tag}</span>}
                <h3>{item.name}</h3>
                <p>
                  {item.discount ? (
                    <>
                      <span className="price-old">{item.price}</span>
                      <span className="price-discount">{item.discount}</span>
                    </>
                  ) : (
                    item.price
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Concept Section */}
        <section className="concept-section">
          <div className="concept-text">
            <h2>MOST POWERFUL CONCEPT</h2>
            <p>
              “Pain itself is to be loved, the pain of the soul. It is the core
              of great effort.”
            </p>
            <button className="btn default">FEEDBACK</button>
          </div>
          <div className="concept-image">
            <img src={conceptBg} alt="Concept Background" />
          </div>
        </section>
      </div>
    </>
  );
} 