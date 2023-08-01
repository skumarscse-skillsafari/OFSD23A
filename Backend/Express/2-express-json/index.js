import express from "express";
import { products, users } from "./data.js";
const app = express();
const PORT = 5000;

// http://localhost:5000
app.get("/", (req, res) => {
  res.status(200).send(`
  <a href="/api/products-details">Go to Products Page</a>
  <br />
  <a href="/api/users">Go to Users Page</a>
  `);
});

// products
// http://localhost:5000/api/products
app.get("/api/products", (req, res) => {
  // id, title, price, category, image
  let newProducts = products.map(({ id, title, price, category, image }) => {
    return {
      id,
      title,
      price,
      category,
      image,
    };
  });
  //   console.log(newProducts);
  res.status(200).json(newProducts);
});

// productsDetails
// http://localhost:5000/api/products-details
app.get("/api/products", (req, res) => {
  res.status(200).json({ message: "success", data: products });
});

// Displaying single products using "params"
// http://localhost:5000/api/products/:id
// http://localhost:5000/api/products/:id/reviews/:rid
app.get("/api/products/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  let singleProduct = products.find((product) => product.id === Number(id));
  // console.log(singleProduct);
  if (!singleProduct) {
    return res.status(400).json({ message: `No product with the id: ${id}` });
  }
  res.status(200).json(singleProduct);
});

// users
// http://localhost:5000/api/users
app.get("/api/users", (req, res) => {
  res.status(200).json({ message: "success", data: users });
});

app.listen(PORT, () => {
  console.log(`Server is running in: http://localhost:${PORT}`);
});
