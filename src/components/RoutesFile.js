import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Resources from "./Resources";
import Blog from "./Blog";
import Contact from "./Contact";
import Layout from "./Layout";

const RoutesFile = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/products/*" element={<Products />}>
          <Route path="shirts" element={<ProductDetails category="shirts" />} />
          <Route path="pants" element={<ProductDetails category="pants" />} />
          <Route path="coats" element={<ProductDetails category="coats" />} />
          <Route path="shoes" element={<ProductDetails category="shoes" />} />
          <Route path="belts" element={<ProductDetails category="belts" />} />
          <Route path="laptop" element={<ProductDetails category="laptop" />} />
          <Route path="tablet" element={<ProductDetails category="tablet" />} />
          <Route path="mobile" element={<ProductDetails category="mobile" />} />
          <Route path="hindi" element={<ProductDetails category="hindi" />} />
          <Route
            path="punjabi"
            element={<ProductDetails category="punjabi" />}
          />
          <Route
            path="english"
            element={<ProductDetails category="english" />}
          />
          <Route path="french" element={<ProductDetails category="french" />} />
        </Route>

        <Route path="/resources/*" element={<Resources />}>
          <Route
            path="training"
            element={<ProductDetails category="Training Hub" />}
          />
          <Route
            path="notes"
            element={<ProductDetails category="Release Notes" />}
          />
          <Route
            path="help"
            element={<ProductDetails category="Help Center" />}
          />
          <Route
            path="about"
            element={<ProductDetails category="About Us" />}
          />
          <Route
            path="community"
            element={<ProductDetails category="Community & Events" />}
          />
          <Route
            path="security"
            element={<ProductDetails category="Security" />}
          />
          <Route
            path="blog"
            element={<ProductDetails category="Shortcut Blog" />}
          />
          <Route
            path="customer"
            element={<ProductDetails category="Customer" />}
          />
          <Route
            path="productOwner"
            element={<ProductDetails category="Produt Owner" />}
          />
          <Route
            path="engineer"
            element={<ProductDetails category="Product Engineer" />}
          />
        </Route>

        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default RoutesFile;
