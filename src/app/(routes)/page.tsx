import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";

import { Billboard } from "@/components/billboard";
import { ProductList } from "@/components/product-list";
import { Container } from "@/components/ui/container";

export const revalidate = 0;
const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("392623b0-d946-4f5e-8eec-7450f8e1b6c7");

  return (
    <Container>
      <div className="space-y-10 mb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
        <ProductList title="Productos Destacados" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
