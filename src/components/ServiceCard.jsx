const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <>
      <div className="flex-1 2xl:w-[720px] xl:w-[600px] lg:w-[450px] md:w-[650px] sm:w-[580px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-5 py-9">
        <div className="w-11 h-11 flex justify-center items-center ml-5 bg-pink-ish rounded-full">
          <img src={imgURL} alt={label} width={24} height={24} />
        </div>

        <h3 className="mt-2 font-palanquin text-3xl leading-normal font-bold text-center">
          {label}
        </h3>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
          {subtext}
        </p>
      </div>
    </>
  );
};

export default ServiceCard;
