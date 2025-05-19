// eslint-disable-next-line react/prop-types
const Banner = ({
  data: { bgColor, discount, title, date, image, title2, title3, title4 },
}) => {
  return (
    <div className="flex min-h-[550px] items-center justify-center py-12">
      <div className="container">
        <div
          style={{ backgroundColor: bgColor }}
          className="grid grid-cols-1 items-center gap-6 rounded-3xl text-white md:grid-cols-3"
        >
          {/* first col */}
          <div className="p-6 sm:p-8">
            <p data-aos="slide-right" className="text-sm">
              {discount}
            </p>
            <h3
              data-aos="zoom-out"
              className="text-4xl font-bold uppercase lg:text-7xl"
            >
              {title}
            </h3>
            <p data-aos="fade-up" className="text-sm">
              {date}
            </p>
          </div>
          {/* second col */}
          <div className="flex h-full items-center" data-aos="zoom-in">
            <img
              src={image}
              alt=""
              className="mx-auto w-64 object-cover drop-shadow-2xl md:w-80 lg:scale-125"
            />
          </div>
          {/* third col */}
          <div className="flex flex-col justify-center gap-4 p-6 md:px-2">
            <p data-aos="zoom-out" className="text-xl font-bold">
              {title2}
            </p>
            <p data-aos="fade-up" className="text-3xl font-bold sm:text-5xl">
              {title3}
            </p>
            <p data-aos="fade-up" className="text-sm leading-5 tracking-wide">
              {title4}
            </p>
            <div data-aos="fade-up" data-aos-offset="0">
              <button
                style={{ color: bgColor }}
                className="rounded-full bg-white px-4 py-2"
              >
                Show Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
