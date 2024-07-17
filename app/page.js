"use client"
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { StickyNavbar } from "./components/StickyNavbar";
import Footer from "./components/Footer";
import About from "./components/About";
import AuthOptions from "./components/AuthOptions";
import UserInfo from "./components/UserInfo";
import FAQ from "./components/Faqs";
import Profit from "./components/Profit";
import SecurityInfo from "./components/SecurityInfo";
export default function Home() {
 
  return (
    <main className="">
    <StickyNavbar />
     <HeroSection />
     <About />
     <SecurityInfo />
     <Profit />
      <AuthOptions />
      <UserInfo />
      <FAQ />
      <hr className="text-[1rem]" />
      <Footer />
    </main>
  );
}
