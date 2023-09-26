import PersonalDetails from "./sections/pesonalDetails"
import Technologies from "./sections/technologies";
import Projects from "./sections/projects";
import Footer from "./sections/footer";

function App() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white text-white">
    <PersonalDetails/>
    <Technologies/>
    <Projects/>
    <Footer/> 
  </main>
  );
}

export default App;
