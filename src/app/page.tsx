import AnnouncementBar from "@/components/AnnouncementBar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import EnjoyPartnership from "@/components/EnjoyPartnership";
import Mentors from "@/components/Mentors";
import Modules from "@/components/Modules";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-primary min-h-screen overflow-x-hidden">
      <AnnouncementBar />
      <Hero />
      <ProblemSolution />
      <EnjoyPartnership />
      <Mentors />
      <Modules />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
