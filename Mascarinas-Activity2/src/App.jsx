import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Alert from './components/Alert';
import Rating from './components/Rating';

function App() {
  const [alert, setAlert] = useState({ type: '', title: '', message: '' });
  const [cartCount, setCartCount] = useState(0);

  const pokemonData = [
    {
      name: 'Charizard',
      price: 48.00,
      image: 'https://m.media-amazon.com/images/I/71Mj4krlenL._AC_SL1500_.jpg',
      rating: 4.5,
    },
    {
      name: 'Greninja',
      price: 35.00,
      image: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XYP/XYP_EN_XY20.png',
      rating: 3.8,
    },
    {
      name: 'Pikachu',
      price: 89.00,
      image: 'https://i.ebayimg.com/images/g/YP0AAOSw7rZhxPFX/s-l1600.webp',
      rating: 5.0,
    },
    {
      name: 'Gengar',
      price: 35.00,
      image: 'https://images.pokemoncard.io/images/sv5/sv5-193_hiresopt.jpg',
      rating: 4.2,
    },
    {
      name: 'Dragonite',
      price: 64.00,
      image: 'https://i.ebayimg.com/images/g/issAAOSw-JRixxk8/s-l1600.webp',
      rating: 4.8,
    },
    {
      name: 'Mewtwo',
      price: 32.00,
      image: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SMP/SMP_EN_SM191.png',
      rating: 4.4,
    },
  ];

  const handleAddToCart = () => {
    setCartCount(prevCount => {
      const newCount = prevCount + 1;

      if (newCount === 1) {
        setAlert({
          type: 'success',
          title: 'Item Added to Cart',
          message: 'The item was successfully added to your cart.',
        });
      } else {
        setAlert({
          type: 'warning',
          title: 'Warning',
          message: 'You have clicked Add to Cart multiple times!',
        });
      }

      return newCount;
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const firstName = e.target['first-name'].value.trim();
    const lastName = e.target['last-name'].value.trim();
    const email = e.target['email'].value.trim();
    const password = e.target['password'].value.trim();

    if (!firstName || !lastName || !email || !password) {
      setAlert({
        type: 'error',
        title: 'Sign Up Failed',
        message: 'Please fill out all fields before submitting.',
      });
    } else {
      setAlert({
        type: 'success',
        title: 'Sign Up Successful',
        message: 'Welcome to the platform!',
      });
    }
  };

  const closeAlert = () => {
    setAlert({ type: '', title: '', message: '' });
  };

  return (
    <div className="app-container">
      {alert.type && <Alert title={alert.title} type={alert.type} message={alert.message} onClose={closeAlert} />}
      <div className="left-column">
        <h1 className="form-title">Pokemon</h1>
        <form className="signup-form" onSubmit={handleSignUp}>
          <div className="input-group">
            <label htmlFor="first-name">First Name</label>
            <input
              id="first-name"
              type="text"
              placeholder="Enter your first name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="last-name">Last Name</label>
            <input
              id="last-name"
              type="text"
              placeholder="Enter your last name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your secure password"
            />
          </div>
          <button className="submit-btn" type="submit">Sign Up</button>
        </form>
      </div>
      <div className="right-column">
        {pokemonData.map((pokemon, index) => (
          <Card
            key={index}
            title={pokemon.name}
            price={pokemon.price}
            imageUrl={pokemon.image}
            ratingValue={pokemon.rating}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
