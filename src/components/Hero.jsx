export default function Hero() {
  return (
    <div className="w-full h-auto relative">
      <div className="w-full h-[400px] overflow-hidden px-12">
        <img
          src="/Samurai.jpg"
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute z-99 top-20 left-[5%]">
        <h1 className="text-5xl font-bold text-green-900 leading-snug">
          Grab Up to 50% Off On <br /> Selected Headphone
        </h1>

        <button className="bg-green-900 px-4 py-2 rounded-[40px] text-white font-medium text-3xl mt-6">
          Buy Now
        </button>
      </div>
    </div>
  );
}
