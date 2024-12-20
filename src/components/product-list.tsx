import { Product } from "../../types";
import { ProductCard } from "./product-card";
import { NoResults } from "./ui/no-results";

interface ProductListProps {
  title: string;
  items: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
