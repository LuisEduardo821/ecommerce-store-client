"use client";

import Image from "next/image";
import { Product } from "../../types";

interface ProductCardProps {
  data: Product;
}
export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Images and Actions */}
      <div className="aspect-square bg-gray-100 rounded-lg relative">
        <Image alt="image" src={data?.images[0]?.url} fill />
        {data.name}
      </div>
    </div>
  );
};
