import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Products from "./components/Products";

import headphone from "./assets/hero/headphone.png";
import smartwatch from "./assets/category/smartwatch2.png";
import Blogs from "./components/Blogs";

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

const BannerData2 = {
  discount: "30% off ",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
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
      <Banner data={BannerData2} />
      <Blogs />
    </div>
  );
};

export default App;
