"use client";

import Footer from "@/sections/footer";
import PersonalDetails from "@/sections/pesonalDetails";
import Projects from "@/sections/projects";
import Technologies from "@/sections/technologies";


export default function Home() {
 
  return (
    <main className="flex min-h-screen flex-col w-full bg-white text-white">
      <PersonalDetails/>
      <Technologies/>
      <Projects/>
      <Footer/> 
    </main>
  );
}
