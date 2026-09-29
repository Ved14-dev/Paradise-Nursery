import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  // Indoor Plants
  {
    id: 1,
    category: "Indoor Plants",
    name: "Snake Plant",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
    description: "An easy-care plant that helps purify indoor air.",
  },
  {
    id: 2,
    category: "Indoor Plants",
    name: "Monstera",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
    description: "A tropical plant with beautiful split leaves.",
  },
  {
    id: 3,
    category: "Indoor Plants",
    name: "Peace Lily",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
    description: "A beautiful flowering indoor plant.",
  },
  {
    id: 4,
    category: "Indoor Plants",
    name: "ZZ Plant",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1632207691143-643e2f4c5f8d",
    description: "A hardy plant that requires little maintenance.",
  },
  {
    id: 5,
    category: "Indoor Plants",
    name: "Spider Plant",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
    description: "A popular plant with long green and white leaves.",
  },
  {
    id: 6,
    category: "Indoor Plants",
    name: "Rubber Plant",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
    description: "A stylish plant with large glossy leaves.",
  },

  // Succulents
  {
    id: 7,
    category: "Succulents",
    name: "Aloe Vera",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
    description: "A useful succulent known for its soothing gel.",
  },
  {
    id: 8,
    category: "Succulents",
    name: "Echeveria",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
    description: "A colorful rosette-shaped succulent.",
  },
  {
    id: 9,
    category: "Succulents",
    name: "Jade Plant",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
    description: "A popular succulent with thick rounded leaves.",
  },
  {
    id: 10,
    category: "Succulents",
    name: "Haworthia",
    price: 19,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
    description: "A compact succulent perfect for desks.",
  },
  {
    id: 11,
    category: "Succulents",
    name: "String of Pearls",
    price: 27,
    image:
      "https://images.unsplash.com/photo-1600411833116-25b5c9e8c8c1",
    description: "A trailing succulent with pearl-shaped leaves.",
  },
  {
    id: 12,
    category: "Succulents",
    name: "Zebra Haworthia",
    price: 21,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    description: "A small succulent with attractive striped leaves.",
  },

  // Flowering Plants
  {
    id: 13,
    category: "Flowering Plants",
    name: "Orchid",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1567922045116-2a00fae2ed03",
    description: "An elegant flowering plant with delicate blooms.",
  },
  {
    id: 14,
    category: "Flowering Plants",
    name: "Anthurium",
    price: 36,
    image:
      "https://images.unsplash.com/photo-1604762512526-3c2b7f5b7b5b",
    description: "A tropical plant with bright heart-shaped flowers.",
  },
  {
    id: 15,
    category: "Flowering Plants",
    name: "African Violet",
    price: 26,
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85",
    description: "A compact plant with beautiful colorful flowers.",
  },
  {
    id: 16,
    category: "Flowering Plants",
    name: "Begonia",
    price: 29,
    image:
      "https://images.unsplash.com/photo-1597848212624-a19eb35e2651",
    description: "A decorative flowering houseplant.",
  },
  {
    id: 17,
    category: "Flowering Plants",
    name: "Kalanchoe",
    price: 23,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
    description: "A cheerful flowering succulent.",
  },
  {
    id: 18,
    category: "Flowering Plants",
    name: "Geranium",
    price: 31,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
    description: "A colorful plant that produces vibrant flowers.",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div className="products-container">
      <h1>Our Plants</h1>

      {categories.map((category) => (
        <section key={category}>
          <h2 className="category-title">{category}</h2>

          <div className="products-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="product-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                  />

                  <h3>{plant.name}</h3>

                  <p>{plant.description}</p>

                  <p className="price">
                    ${plant.price}
                  </p>

                  <button
                    className="add-btn"
                    disabled={isInCart(plant.id)}
                    onClick={() => dispatch(addToCart(plant))}
                  >
                    {isInCart(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
