"use client";
import { ShoppingCart } from "lucide-react";
import { Product } from "../../types";
import Button from "./ui/button";
import { Currency } from "./ui/currency";

interface InfoProps {
  data: Product;
}

export const Info = ({ data }: InfoProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">talla:</h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="w-6 h-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2 bg-black">
          Agregar al carrito
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};
