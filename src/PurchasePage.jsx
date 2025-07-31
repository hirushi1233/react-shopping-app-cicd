import React from "react";
import product1 from "./assets/product1.jpg";
import product2 from "./assets/product2.jpg";
import product3 from "./assets/product3.jpg";
import product4 from "./assets/product4.jpg";
import product5 from "./assets/product5.jpg";
import product6 from "./assets/product6.jpg";
import product7 from "./assets/product7.jpg";
import product8 from "./assets/product8.jpg";
import product9 from "./assets/product9.jpg";
import product10 from "./assets/product10.jpg";
import product11 from "./assets/product11.jpg";
import product12 from "./assets/product12.jpg";

const categorizedProducts = {
  "Oval Tray": [
    { name: "Oval Ceramic Tray", price: "$150", img: product1 },
    { name: "Oval Handmade Bowl", price: "$120", img: product2 },
    { name: "Oval Art Plate", price: "$90", img: product3 },
  ],
  "Bubble Tray": [
    { name: "Bubble Tea Set", price: "$200", img: product4 },
    { name: "Bubble Sculpture Pot", price: "$300", img: product5 },
  ],
  "Blessing Kit": [
    { name: "Blessing Mini Tray", price: "$85", img: product6 },
    { name: "Blessing Tall Vase", price: "$130", img: product7 },
  ],
  "Customise Kit": [
    { name: "Customise Decor Bowl", price: "$100", img: product8 },
    { name: "Customise Clay Mug", price: "$70", img: product9 },
  ],
  "Vase": [
    { name: "Elegant Pitcher", price: "$180", img: product10 },
    { name: "Serving Plate", price: "$95", img: product11 },
    { name: "Porcelain Tray", price: "$110", img: product12 },
  ],
};

export default function PurchasePage() {
  return (
    <>
      <style>{`
        body, html {
          margin: 0; 
          padding: 0; 
          height: 100%;
          background-color: #6ea9a9ff;
          font-family: sans-serif;
        }
        .purchase-page-wrapper {
          height: 100vh;               /* full viewport height */
          display: flex;
          justify-content: center;     /* center horizontally */
          align-items: center;         /* center vertically */
          padding: 2rem;
          box-sizing: border-box;
        }
        .purchase-page {
          background: white;
          width: 100%;
          max-width: 1000px;           /* limit max width */
          height: 90vh;                /* fixed height to enable vertical scroll */
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          padding: 2rem;
          overflow-y: auto;            /* vertical scroll when needed */
          box-sizing: border-box;
        }
        .purchase-title {
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 2rem;
          color: #111827;
        }
        .category-section {
          margin-bottom: 3rem;
        }
        .category-title {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #374151;
          border-bottom: 2px solid #10b981;
          padding-bottom: 0.25rem;
          max-width: fit-content;
          margin-left: auto;
          margin-right: auto;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .product-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          padding: 1rem;
          text-align: center;
          transition: transform 0.2s ease;
          cursor: pointer;
        }
        .product-card:hover {
          transform: translateY(-5px);
        }
        .product-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 1rem;
        }
        .product-name {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #111827;
        }
        .product-price {
          color: #10b981;
          font-size: 1rem;
          font-weight: 500;
        }
      `}</style>

      <div className="purchase-page-wrapper">
        <div className="purchase-page">
          <h1 className="purchase-title">Available Products</h1>

          {Object.entries(categorizedProducts).map(([category, products]) => (
            <section key={category} className="category-section">
              <h2 className="category-title">{category}</h2>
              <div className="product-grid">
                {products.map((item, index) => (
                  <div key={index} className="product-card">
                    <img src={item.img} alt={item.name} />
                    <div className="product-name">{item.name}</div>
                    <div className="product-price">{item.price}</div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
