//shared component for rendering/redirecting resources and products submenu items
import { useLocation } from "react-router-dom";

const ProductDetails = ({ category }) => {
  const location = useLocation();

  return (
    <div>
      {location.pathname.startsWith("/products") && (
        <>
          <h3>Product Details: {category}</h3>
          <p>Product details for {category}</p>
        </>
      )}
      {location.pathname.startsWith("/resources") && (
        <>
          <h3>Resource Details: {category}</h3>
          <p>Resource details for {category}</p>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
