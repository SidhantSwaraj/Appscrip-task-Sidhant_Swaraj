import React from "react";
import "./styles.css";
import Navbar from "./Components/Navbar/Navbar.js";
import Body from "./Components/Body/Body.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <h1
          style={{
            fontFamily: "Simplon Norm",
            fontSize: "50px",
            fontWeight: 400,
            lineHeight: "42px",
            letterSpacing: "1px",
            textAlign: "center",
          }}
        >
          DISCOVER OUR PRODUCTS
        </h1>

        <p style={{ lineHeight: 1.5, margin: 0, padding: 0 }}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          <br />
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
