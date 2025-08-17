import TextField from "@/components/primitives/TextField";
import Listing from "@/modules/Listing";
import SaleOverview from "@/modules/SaleOverview";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex bg-[#F5F5F5]">
      <main className="flex flex-col max-w-[1284px] w-full mx-auto py-4 gap-4">
        <TextField text="Welcome, Ahmed" className="textColor" />

        <div className="flex gap-[20px]">
          <SaleOverview/>
          <Listing/>
        </div>
      </main>
    </div>
  );
}
