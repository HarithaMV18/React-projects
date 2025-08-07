import { useEffect, useState } from "react";
import "./productList.css";
import { PAGE_SIZE } from "../constants/constants";
import Pagination from "./Pagination";

const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchProducts = async () => {
    const products = await fetch("https://dummyjson.com/products?limit=200");
    const data = await products.json();
    setAllProducts(data.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const totalProducts = allProducts.length;
  const totalPages = Math.ceil(totalProducts / PAGE_SIZE);
  const getPageNum = (currentPage) => {
    setCurrentPage(currentPage);
  };
  const goToPreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  return !allProducts.length ? (
    "No products found"
  ) : (
    <Pagination
      goToPreviousPage={goToPreviousPage}
      goToNextPage={goToNextPage}
      getPageNum={getPageNum}
      start={start}
      end={end}
      currentPage={currentPage}
      totalPages={totalPages}
      allProducts={allProducts}
    />
  );
};
export default ProductList;
