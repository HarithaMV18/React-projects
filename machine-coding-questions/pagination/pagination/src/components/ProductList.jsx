import { useEffect, useState } from "react"
import './productList.css'
import ProductCard from "./ProductCard"

const ProductList=()=>{
    const [allProducts,setAllProducts]=useState([])
    const [currentPage,setCurrentPage]=useState(0)
    const [active,setActive]=useState(false)
    const PAGE_SIZE=10
    const fetchProducts=async()=>{
        const products=await fetch('https://dummyjson.com/products?limit=200')
        const data=await products.json()
        setAllProducts(data.products)
    }
  

    useEffect(()=>{
        fetchProducts()
    },[])
    const totalProducts=allProducts.length;
    const totalPages=Math.ceil(totalProducts/PAGE_SIZE)
    const getPageNum=(currentPage)=>{
        setCurrentPage(currentPage)
    }
    const start=currentPage*10
    const end=start+10
    return(!allProducts.length?"No products found":
    <div className="pagination">
        <h1>Pagination</h1>
        <div className="page-num">
            <span onClick={()=>getPageNum(pages)}>⬅️</span>
            {[...Array(totalPages).keys()].map((pages)=>{return(
                
                <span className="current-page" key={pages} onClick={()=>getPageNum(pages)}>{pages+1}</span>)})}
        <span>➡️</span>
        </div>

        <div className="main-products">
{allProducts.slice(start,end).map((items)=>{return(<ProductCard key={items.id} title={items.title} image={items.images[0]} price={items.price}/>)})}
    </div>
    </div>)
}
export default ProductList