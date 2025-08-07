import ProductCard from "./ProductCard";

const Pagination = ({
  goToPreviousPage,
  goToNextPage,
  getPageNum,
  allProducts,
  start,
  end,
  currentPage,
  totalPages,
}) => {
  return (
    <div className="pagination">
      <h1>Pagination</h1>
      <div className="page-num">
        <button disabled={currentPage === 0} onClick={() => goToPreviousPage()}>
          ⬅️
        </button>
        {[...Array(totalPages).keys()].map((pages) => {
          return (
            <button
              className={`current-page ${
                currentPage === pages ? "active" : ""
              }`}
              key={pages}
              onClick={() => getPageNum(pages)}
            >
              {pages + 1}
            </button>
          );
        })}
        <button
          disabled={currentPage === totalPages - 1}
          onClick={() => goToNextPage()}
        >
          ➡️
        </button>
      </div>

      <div className="main-products">
        {allProducts.slice(start, end).map((items) => {
          return (
            <ProductCard
              key={items.id}
              title={items.title}
              image={items.images[0]}
              price={items.price}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Pagination;
