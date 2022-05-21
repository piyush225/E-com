import React from 'react';
import"./Home.css";
import Product from "./Product";

function Home() {
    return (
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://s3images.coroflot.com/user_files/individual_files/large_601412_pefdzgritogapshe0a4l4n0tb.jpg"
          />
          <div className="home__row">
            <Product
              id="1234567"
              title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
              price={470}
              image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
              rating={3}
            />
  
            <Product
              id="12345678"
              title="boAt Airdopes 121v2 TWS Earbuds with Bluetooth V5.0, Immersive Audio, Up to 14H Total Playback, Instant Voice Assistant, Easy Access Controls with Mic and Dual Tone Ergonomic Design(Active Black)"
              price={999}
              image="https://images-na.ssl-images-amazon.com/images/I/71ByNT34bfL._SL1500_.jpg"
              rating={5}
            />
          </div>
  
          <div className="home__row">
            <Product
              id="12345679"
              title="Skechers Men Glide-Step Sport-Wave Heat Sneaker "
              price={3500}
              thousandSeparator={true}
              image="https://images-na.ssl-images-amazon.com/images/I/41towt0MCeL._SX395_SY395_.jpg"
              rating={4}
            />
  
            <Product
              id="12345671"
              title="Casio Analog Black Dial Men Watch-MTP-1374HD-2AVIF (A1646) "
              price={4300}
              image="https://images-na.ssl-images-amazon.com/images/I/71brLbCniXL._UL1500_.jpg"
              rating={4}
            />
  
            <Product
              id="123456798"
              title="Strava Nutrition Weight Gainer with Shaker - 1 kg (Vanilla Flavour) "
              price={571}
              image="https://images-na.ssl-images-amazon.com/images/I/81sbLTgvMYS._SL1500_.jpg"
              rating={4}
            />
          </div>
  
          <div className="home__row">
            <Product
              id="123456789"
              title="Redmi 126 cm (50 inches) 4K Ultra HD Android Smart LED TV X50|L50M6-RA (Black) (2021 Model)"
              price={36500}
              image="https://images-na.ssl-images-amazon.com/images/I/81sscKjSPiL._SL1500_.jpg"
              rating={4}
            />
          </div>
        </div>
      </div>
    );
  }

export default Home;