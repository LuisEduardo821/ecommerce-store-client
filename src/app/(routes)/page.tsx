import { Billboard } from "@/components/billboard";
import { Container } from "@/components/ui/container";

const HomePage = () => {
  return (
    <Container>
      <div className="space-y-10 mb-10">
        <Billboard />
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
      </div>
    </Container>
  );
};

export default HomePage;
