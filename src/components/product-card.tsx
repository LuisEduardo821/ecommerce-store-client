"use client";

import Image from "next/image";
import { Product } from "../../types";
import { IconButton } from "./ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import { Currency } from "./ui/currency";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: Product;
}
export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Images and Actions */}
      <div className="aspect-square bg-gray-100 rounded-lg relative">
        <Image
          alt="image"
          src={data?.images?.[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 absolute transition px-6 bottom-6 w-full">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={<Expand size={20} />}
              onClick={() => {}}
              className="text-gray-500"
            />
            <IconButton
              icon={<ShoppingCart size={20} />}
              onClick={() => {}}
              className="text-gray-500"
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};
