import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];

    // step:1
    for (const id in storedCart) {
      // console.log(id);

      // step:2 get the product by using id
      const addedProduct = products.find((product) => product.id === id);
      // console.log(addedProduct);

      // step:3 grt quantity of the product
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        //step:4  add the added product to the save cart
        savedCart.push(addedProduct);
      }
      // console.log("addedProduct", addedProduct);
    }
    // step:5
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  // console.log(cart);
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Products
            key={product?.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Products>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};
export default Shop;
