import Slider from "react-slick";
import Button from "./shared/Button";

import Image1 from "../assets/hero/headphone.png";
import Image2 from "../assets/category/vr.png";
import Image3 from "../assets/category/macbook.png";

const HeroSlider = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolor! Recusandae omnis similique distinctio asperiores autem voluptates aspernatur porro, dolorem in vero consectetur pariatur.",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolor! Recusandae omnis similique distinctio asperiores autem voluptates aspernatur porro, dolorem in vero consectetur pariatur.",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Beats Solo",
    title: "Branded",
    title2: "Laptops",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolor! Recusandae omnis similique distinctio asperiores autem voluptates aspernatur porro, dolorem in vero consectetur pariatur.",
  },
];

const Hero = ({ popupHandler }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    // autoplay: true,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div className="hero-bg-color flex min-h-[550px] items-center justify-center overflow-hidden rounded-3xl sm:min-h-[650px]">
        {/* Hero section */}
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroSlider.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content */}
                  <div className="relative z-10 order-2 flex flex-col justify-center gap-4 pt-12 text-center sm:order-1 sm:pl-3 sm:pt-0 sm:text-left md:gap-8">
                    <h1
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl font-bold md:text-4xl"
                    >
                      {data.subtitle}
                    </h1>
                    <h2
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl font-bold md:text-6xl xl:text-7xl"
                    >
                      {data.title}
                    </h2>
                    <h2
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl font-bold uppercase text-white dark:text-white/15 lg:text-6xl xl:text-8xl"
                    >
                      {data.title2}
                    </h2>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <Button
                        text="Shop By Category"
                        bgColor="bg-primary"
                        textColor="text-white"
                        handler={popupHandler}
                      />
                    </div>
                  </div>
                  {/* img section */}
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10 md:left-3 lg:left-0"
                    >
                      <img
                        src={data.img}
                        alt=""
                        className="lg:scale-120 relative z-40 mx-auto h-[300px] w-[300px] object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] sm:h-[450px] sm:w-[450px] sm:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
