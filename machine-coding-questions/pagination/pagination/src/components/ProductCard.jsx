const ProductCard=({title,image,price})=>{
    return(
        <div  className="specific-products">
        <h3>{title}</h3>
        <img src={image} alt={title}/>
        <p>{price}</p>
    </div>
    )
}
export default ProductCard;