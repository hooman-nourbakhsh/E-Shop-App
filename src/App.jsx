import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Services />
    </div>
  );
};

export default App;
