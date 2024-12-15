"use client";
import Image from "next/image";
import { Tab, TabGroup, TabList } from "@headlessui/react";
import { Image as ImageType } from "../../../types";
import { GalleryTab } from "./gallery-tab";

interface GalleryProps {
  images: ImageType[];
}
export const Gallery = ({ images }: GalleryProps) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-4">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
    </TabGroup>
  );
};
