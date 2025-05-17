import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Products from "./components/Products";

import headphone from "./assets/hero/headphone.png";

const BannerData = {
  discount: "30% off ",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
};

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Services />
      <Banner data={BannerData} />
      <Products />
    </div>
  );
};

export default App;
