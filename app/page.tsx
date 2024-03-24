import { Tabs, TabsContent } from "@/components/ui/tabs";

import Navbar from "@/components/navbar/navbar";
import Forum from "@/components/sections/forum"
import Stories from "@/components/sections/stories";

export default function Home() {
  return (
    <>

      <Tabs defaultValue="forum" className="w-full lg:hidden">
        <div className="lg:hidden h-[60px] lg:pl-56 fixed inset-y-0 w-full z-50">
          <Navbar />
        </div>
        <TabsContent value="forum" className="md:hidden">
          <Forum />
        </TabsContent>
        <TabsContent value="stories" className="md:hidden">
          <Stories />
        </TabsContent>
      </Tabs>
      <div className="hidden container p-3 md:grid grid-cols-1 md:grid-cols-3 gap-x-6">
        <Forum />
        <Stories />
      </div>
    </>
  );
}
