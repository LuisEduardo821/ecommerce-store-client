import { Billboard as BillboardType } from "../../types";

interface BillboardProps {
  data: BillboardType;
}

export const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden border">
      <div style={{ backgroundImage: `url(${data?.imageUrl})` }}>Billboard</div>
    </div>
  );
};
