import { useState } from 'react';

const Products = () => {
  const products = [
    {
      name: 'Charizard',
      price: 48.00,
      image: 'https://m.media-amazon.com/images/I/71Mj4krlenL._AC_SL1500_.jpg',
    },
    {
      name: 'Greninja',
      price: 35.00,
      image: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XYP/XYP_EN_XY20.png',
    },
    {
      name: 'Pikachu',
      price: 89.00,
      image: 'https://i.ebayimg.com/images/g/YP0AAOSw7rZhxPFX/s-l1600.webp',
    },
    {
      name: 'Gengar',
      price: 35.00,
      image: 'https://images.pokemoncard.io/images/sv5/sv5-193_hiresopt.jpg',
    },
    {
      name: 'Dragonite',
      price: 64.00,
      image: 'https://i.ebayimg.com/images/g/issAAOSw-JRixxk8/s-l1600.webp',
    },
    {
      name: 'Zapdos',
      price: 39.00,
      image: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SV3PT5/SV3PT5_EN_145.png',
    },
    {
      name: 'Mew',
      price: 50.00,
      image: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH8/SWSH8_EN_114.png',
    },
    {
      name: 'Mewtwo',
      price: 32.00,
      image: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SMP/SMP_EN_SM191.png',
    },
  ];

  const [sortedProducts, setSortedProducts] = useState(products);
  const [isAscending, setIsAscending] = useState(true);

  const handleSort = () => {
    const sorted = [...sortedProducts].sort((a, b) => {
      return isAscending ? a.price - b.price : b.price - a.price;
    });
    setSortedProducts(sorted);
    setIsAscending(!isAscending);
  };

  const handleButtonClick = (productName) => {
    alert(`You clicked on ${productName}`);
  };

  return (
    <div>
      <div className="product-grid-container">
        <h2>Product List</h2>
        <button
          onClick={handleSort}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '20px',
          }}
        >
          Sort by Price ({isAscending ? 'Low to High' : 'High to Low'})
        </button>
        <div className="product-list">
          {sortedProducts.map((product, index) => (
            <div key={index} className="product-card">
              <button
                className="product-button"
                onClick={() => handleButtonClick(product.name)}
                style={{
                  border: '2px solid #000',
                  borderRadius: '8px',
                  padding: '10px',
                  background: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '250px',
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  width="200"
                  height="200"
                  style={{
                    borderRadius: '8px',
                    objectFit: 'cover',
                    marginBottom: '10px',
                  }}
                />
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
