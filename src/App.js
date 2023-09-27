import PersonalDetails from "./sections/pesonalDetails"
import Technologies from "./sections/technologies";
import Projects from "./sections/projects";
import Footer from "./sections/footer";
import { LanguageProvider } from "./global/LanguageContext";
import Header from "./sections/header";

function App() {
  return (
    <LanguageProvider>
      <main className="flex min-h-screen flex-col w-full bg-white text-white relative">
        <Header/>
        <PersonalDetails />
        <Technologies />
        <Projects />
        <Footer />
      </main>
    </LanguageProvider>
  );
}

export default App;
