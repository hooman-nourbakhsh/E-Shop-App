import Image1 from "../assets/category/earphone.png";
import Image2 from "../assets/category/watch.png";
import Image3 from "../assets/category/macbook.png";
import Image4 from "../assets/category/gaming.png";
import Image5 from "../assets/category/vr.png";
import Image6 from "../assets/category/speaker.png";

import Button from "./shared/Button";

const Category = () => {
  return (
    <>
      {/* row 1 */}
      <div className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-2 xl:gap-4">
            {/* first col */}
            <div className="relative flex h-80 items-end rounded-3xl bg-gradient-to-br from-black/90 to-black/70 py-0 pl-5 text-white">
              <div>
                <div className="mb-4">
                  <p className="mb-[2px] text-gray-400">Enjoy</p>
                  <p className="mb-[2px] text-2xl font-semibold">With</p>
                  <p className="mb-4 text-4xl font-bold opacity-20 xl:text-5xl">
                    Earphone
                  </p>
                  <Button
                    text="Browse"
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </div>
              </div>
              <img
                src={Image1}
                alt=""
                className="absolute bottom-0 right-0 w-80"
              />
            </div>
            {/* second col */}
            <div className="relative flex h-80 items-end rounded-3xl bg-gradient-to-br from-brandYellow to-brandYellow/90 py-0 pl-5 text-white">
              <div>
                <div className="mb-4">
                  <p className="mb-[2px] text-white">Enjoy</p>
                  <p className="mb-[2px] text-2xl font-semibold">With</p>
                  <p className="mb-4 text-4xl font-bold opacity-40 xl:text-5xl">
                    Gadget
                  </p>
                  <Button
                    text="Browse"
                    bgColor={"bg-white"}
                    textColor={"text-brandYellow"}
                  />
                </div>
              </div>
              <img
                src={Image2}
                alt=""
                className="absolute -right-20 top-4 w-80 lg:-right-10"
              />
            </div>
            {/* third col */}
            <div className="relative flex h-80 items-end rounded-3xl bg-gradient-to-br from-primary to-primary/90 py-0 pl-5 text-white sm:col-span-2">
              <div>
                <div className="mb-4">
                  <p className="mb-[2px] text-white">Enjoy</p>
                  <p className="mb-[2px] text-2xl font-semibold">With</p>
                  <p className="mb-4 text-4xl font-bold opacity-40 xl:text-5xl">
                    Laptop
                  </p>
                  <Button
                    text="Browse"
                    bgColor={"bg-white"}
                    textColor={"text-primary"}
                  />
                </div>
              </div>
              <img
                src={Image3}
                alt=""
                className="absolute right-0 top-1/2 w-64 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </div>
      {/* row 2 */}
      <div className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-2 xl:gap-4">
            {/* first col */}
            <div className="relative flex h-80 items-end rounded-3xl bg-gradient-to-br from-gray-400/90 to-gray-100 py-0 pl-5 text-white sm:col-span-2">
              <div>
                <div className="mb-4">
                  <p className="mb-[2px] text-white">Enjoy</p>
                  <p className="mb-[2px] text-2xl font-semibold">With</p>
                  <p className="mb-4 text-4xl font-bold opacity-40 xl:text-5xl">
                    Laptop
                  </p>
                  <Button
                    text="Browse"
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </div>
              </div>
              <img
                src={Image4}
                alt=""
                className="absolute right-0 top-1/2 w-64 -translate-y-1/2"
              />
            </div>{" "}
            {/* second col */}
            <div className="relative flex h-80 items-start rounded-3xl bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 py-4 pl-5 text-white">
              <div>
                <div className="mb-4">
                  <p className="mb-[2px] text-white">Enjoy</p>
                  <p className="mb-[2px] text-2xl font-semibold">With</p>
                  <p className="mb-4 text-4xl font-bold opacity-20 xl:text-5xl">
                    Earphone
                  </p>
                  <Button
                    text="Browse"
                    bgColor={"bg-white"}
                    textColor={"text-brandGreen"}
                  />
                </div>
              </div>
              <img
                src={Image5}
                alt=""
                className="absolute bottom-0 right-0 w-64"
              />
            </div>
            {/* third col */}
            <div className="relative flex h-80 items-start rounded-3xl bg-gradient-to-br from-brandBlue to-brandBlue/90 py-4 pl-5 text-white">
              <div>
                <div className="mb-4">
                  <p className="mb-[2px] text-white">Enjoy</p>
                  <p className="mb-[2px] text-2xl font-semibold">With</p>
                  <p className="mb-4 text-4xl font-bold opacity-40 xl:text-5xl">
                    Gadget
                  </p>
                  <Button
                    text="Browse"
                    bgColor={"bg-white"}
                    textColor={"text-brandBlue"}
                  />
                </div>
              </div>
              <img
                src={Image6}
                alt=""
                className="absolute bottom-0 right-0 w-52"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
