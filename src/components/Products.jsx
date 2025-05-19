import Heading from "./shared/Heading";

import Image1 from "../assets/product/p-1.jpg";
import Image2 from "../assets/product/p-2.jpg";
import Image3 from "../assets/product/p-3.jpg";
import Image4 from "../assets/product/p-4.jpg";
import Image5 from "../assets/product/p-5.jpg";
import Image6 from "../assets/product/p-6.jpg";
import Image7 from "../assets/product/p-7.jpg";
import Image8 from "../assets/product/p-4.jpg";

import Button from "./shared/Button";

const ProductData = [
  {
    id: 1,
    img: Image1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Image2,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Image3,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Image4,
    title: "Printed",
    price: "220",
    aosDelay: "400",
  },
  {
    id: 5,
    img: Image5,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "400",
  },
  {
    id: 6,
    img: Image6,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "400",
  },
  {
    id: 7,
    img: Image7,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 8,
    img: Image8,
    title: "Printed",
    price: "220",
    aosDelay: "400",
  },
];

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* header section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/* body section */}
        <ProductCard ProductData={ProductData} />
      </div>
    </div>
  );
};

export default Products;
// eslint-disable-next-line react/prop-types
const ProductCard = ({ ProductData }) => {
  return (
    <div className="mb-10">
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 place-items-center">
        {/* card section */}
        {ProductData.map((product) => (
          <div data-aos="fade-up" data-aos-delay={product.aosDelay} className="group" key={product.id}>
            <div className="relative">
              <img src={product.img} alt="" className="h-[180px] w-[260px] object-cover rounded-md" />
              {/* hover button */}
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 h-full ">
                <Button text={"Add to card"} bgColor={"bg-primary"} tetxt={"text-white"} />
              </div>
            </div>
            <div className="leading-7">
              <h3 className="font-semibold">{product.title}</h3>
              <span className="font-bold">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
