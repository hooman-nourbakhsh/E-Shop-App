const Heading = ({ title, subtitle }) => {
  return (
    <div className="mx-auto mb-10 max-w-[600px] space-y-2 text-center">
      <h2 className="text-3xl font-bold lg:text-4xl">{title}</h2>
      <p className="text-xs text-gray-400">{subtitle}</p>
    </div>
  );
};

export default Heading;
