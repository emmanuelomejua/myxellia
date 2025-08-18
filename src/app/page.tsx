import TextField from "@/components/primitives/TextField";
import Listing from "@/sections/Listing";
import Metrics from "@/sections/Metrics";
import SaleOverview from "@/sections/SaleOverview";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex bg-[#F5F5F5] h-full">
      <main className="flex flex-col max-w-[1284px] w-full mx-auto py-4 gap-4 h-full">
        <TextField text="Welcome, Ahmed" className="textColor" />

        <div className="flex gap-[20px] h-[324px]">
          <SaleOverview/>
          <Listing/>
        </div>
        <Metrics/>
      </main>
    </div>
  );
}
