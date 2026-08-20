import Link from "next/link";

const products = [
  { id: 1, name: "iPhone" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "MacBook" },
];

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
