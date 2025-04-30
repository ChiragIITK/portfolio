import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Travel1 from "@/components/Travel1";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Slideshow from "@/components/ui/SlideShow";
import ThreeColumnSlideshow from "@/components/ui/ThreeColumnSlideshow";
import { navItems } from "@/data";

import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center 
    flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Footer />
      </div>
    </main>
  );
}
