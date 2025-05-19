import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl text-primary md:text-5xl" />,
    title: "Free Shipping",
    description: "Free Shipping On All Order",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl text-primary md:text-5xl" />,
    title: "Safe Money",
    description: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl text-primary md:text-5xl" />,
    title: "Secure Payment",
    description: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl text-primary md:text-5xl" />,
    title: "Online Supoort 24/7",
    description: "Technical Support 24/7",
  },
];

const Services = () => {
  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 gap-4 gap-y-8 lg:grid-cols-4">
          {ServiceData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-start gap-2 sm:flex-row"
            >
              {data.icon}
              <div>
                <h3 className="font-bold xl:text-xl">{data.title}</h3>
                <h4 className="text-sm text-gray-400">{data.description}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
