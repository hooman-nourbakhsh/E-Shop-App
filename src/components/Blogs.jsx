import Heading from "./shared/Heading";
import Image1 from "../assets/blogs/blog-1.jpg";
import Image2 from "../assets/blogs/blog-2.jpg";
import Image3 from "../assets/blogs/blog-3.jpg";

const BlogsData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Dilshad",
    image: Image1,
    aosDelay: "0",
  },
  {
    title: "How to choose perfect gadget",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Satya",
    image: Image2,
    aosDelay: "200",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Sabir",
    image: Image3,
    aosDelay: "400",
  },
];

const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* header section */}
        <Heading title="Recent News" subtitle="Explore Our Blogs" />
        {/* blog section */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:gap-7">
          {/* blog card */}
          {BlogsData.map((blog, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={blog.aosDelay}
              key={index}
              className="bg-white dark:bg-gray-900"
            >
              {/* image section */}
              <div className="mb-2 overflow-hidden rounded-2xl">
                <img
                  src={blog.image}
                  alt=""
                  className="h-[220px] w-full rounded-2xl object-cover duration-500 hover:scale-105"
                />
              </div>
              {/* content section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {blog.published}
                </p>
                <p className="line-clamp-1 font-bold">{blog.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {blog.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
