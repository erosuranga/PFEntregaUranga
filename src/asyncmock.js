/* const products = [
  {
    id: "1",
    name: "Producto 1",
    category: "electrónicos",
    stock: 10,
    price: 29.99,
  },
  {
    id: "2",
    name: "Producto 2",
    category: "ropa",
    stock: 5,
    price: 19.99,
  },
  {
    id: "3",
    name: "Producto 3",
    category: "libros",
    stock: 15,
    price: 12.5,
  },
  {
    id: "4",
    name: "Producto 4",
    category: "electronicos",
    stock: 8,
    price: 49.99,
  },
  {
    id: "5",
    name: "Producto 5",
    category: "ropa",
    stock: 12,
    price: 9.99,
  },
  {
    id: "6",
    name: "Producto 6",
    category: "libros",
    stock: 7,
    price: 34.99,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    });
  });
};
export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === productCategory));
    });
  });
};
 */
