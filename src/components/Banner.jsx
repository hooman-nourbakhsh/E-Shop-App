// eslint-disable-next-line react/prop-types
const Banner = ({ data: { bgColor, discount, title, date, image, title2, title3, title4 } }) => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
      <div className="container">
        <div style={{ backgroundColor: bgColor }} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">
          {/* first col */}
          <div className="p-6 sm:p-8">
            <p className="text-sm">{discount}</p>
            <h3 className="uppercase text-4xl lg:text-7xl font-bold">{title}</h3>
            <p className="text-sm">{date}</p>
          </div>
          {/* second col */}
          <div className="h-full flex items-center">
            <img src={image} alt="" className="scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover" />
          </div>
          {/* third col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p className="font-bold text-xl">{title2}</p>
            <p className="text-3xl sm:text-5xl font-bold">{title3}</p>
            <p className="text-sm tracking-wide leading-5">{title4}</p>
            <div>
              <button style={{ color: bgColor }} className="bg-white py-2 px-4 rounded-full">
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
