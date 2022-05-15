import React from "react";
import Link from "next/link";

function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            alt={product.name}
            src={product.image}
            className="rounded shadow"
          />
        </a>
      </Link>

      <div className="flex flex-col justify-center p-5 items-center">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>UGX{product.price}</p>
        <button className="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
