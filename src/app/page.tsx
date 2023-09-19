"use client";

import PersonalDetails from "@/sections/pesonalDetails";
import Technologies from "@/sections/technologies";


export default function Home() {
 
  return (
    <main className="flex min-h-screen flex-col w-screen bg-white text-white">
      <PersonalDetails/>
      <Technologies/>
    </main>
  );
}
