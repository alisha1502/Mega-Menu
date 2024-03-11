import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="text-color">
      <h1>Products</h1>
      <Outlet />
    </div>
  );
};

export default Products;
