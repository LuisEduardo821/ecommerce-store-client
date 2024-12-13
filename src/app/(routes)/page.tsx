import { getBillboard } from "@/actions/get-billboard";

import { Billboard } from "@/components/billboard";
import { Container } from "@/components/ui/container";

export const revalidate = 0;
const HomePage = async () => {
  const data = await getBillboard("392623b0-d946-4f5e-8eec-7450f8e1b6c7");
  return (
    <Container>
      <div className="space-y-10 mb-10">
        <Billboard data={data} />
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
      </div>
    </Container>
  );
};

export default HomePage;
