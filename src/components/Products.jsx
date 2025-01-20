import Searchbar from "./Searchbar";
import styles from "../styles/sections.module.css";
import { useEffect, useState } from "react";
import Product from "./Product";
import { parseFromLocalStorage } from "../utils/parseFromLocalStorage";

export default function Products(props) {
  const [cart, setCart] = useState(parseFromLocalStorage("cart"));
  const [wishlist, setWishlist] = useState(parseFromLocalStorage("wishlist"));
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem("searchQuery") || "");
  const [products, setProducts] = useState(props.data);

  const handleItemInWishlist = (name) => {
    const newValue = [...wishlist];
    if (newValue.includes(name)) {
      newValue.splice(newValue.indexOf(name), 1);
    } else {
      newValue.push(name);
    }
    setWishlist(newValue);
    localStorage.setItem("wishlist", JSON.stringify(newValue));
    document.location.reload();
  };

  const handleItemInCart = (name) => {
    const newValue = [...cart];
    if (newValue.includes(name)) {
      newValue.splice(newValue.indexOf(name), 1);
    } else {
      newValue.push(name);
    }
    setCart(newValue);
    localStorage.setItem("cart", JSON.stringify(newValue));
  };

  const handleSearch = () => {
    const temp = props.data;
    setProducts(temp.filter(product => product.name.toLocaleLowerCase().includes(searchQuery.toLowerCase())));
  };

  useEffect(() => {
    localStorage.setItem("searchQuery", searchQuery);
    if(props.type !== "wishlist")
      handleSearch();
  }, [searchQuery]);
  
  return (
    <div className={styles.products_section}>
      <Searchbar search={(q) => setSearchQuery(q)} hidden={props.type === "wishlist"} searchQuery={searchQuery} />
      <div className={styles.products_container}>
        {products.map((product, index) => {
          if (index >= 8 && props.type !== "wishlist") return null;
          return (
            <Product
              key={product.name + index}
              name={product.name}
              type={props.type}
              price={product.price}
              imageUrl={product.imageUrl}
              inWishlist={wishlist.includes(product.name)}
              inCart={cart.includes(product.name)}
              handleWishlist={handleItemInWishlist}
              handleCart={handleItemInCart}
            />
          );
        })}
      </div>
      {products.length >= 8 && props.type !== "wishlist" ? (
        <button className={styles.view_products_button}>View All Products</button>
      ) : null}
    </div>
  );
}
