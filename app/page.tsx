import Navbar from "@/components/navbar/navbar";
import Forum from "@/components/sections/forum"
import Stories from "@/components/sections/stories";

export default function Home() {
  return (
    <>
      <div className="lg:hidden h-[60px] lg:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="p-3 grid grid-cols-1 lg:grid-cols-3 gap-x-6">
        <Forum />
        <Stories />
      </div>
    </>
  );
}
