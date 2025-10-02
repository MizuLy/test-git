export default function Card({ mode }) {
  const product = [
    {
      name: "Headphone",
      prePrice: "34.99",
      postPrice: "20.00",
      discount: "69",
      review: "10k",
    },
    {
      name: "Headphone",
      prePrice: "34.99",
      postPrice: "20.00",
      discount: "69",
      review: "10k",
    },
    {
      name: "Headphone",
      prePrice: "34.99",
      postPrice: "20.00",
      discount: "69",
      review: "10k",
    },
    {
      name: "Headphone",
      prePrice: "34.99",
      postPrice: "20.00",
      discount: "69",
      review: "10k",
    },
  ];
  return (
    <div className="flex items-center justify-center gap-10">
      {product.map((item, index) => (
        <div
          key={index}
          className={` w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden duration-150 ${
            mode ? "bg-white text-gray-700" : "bg-slate-800 text-white"
          }`}
        >
          <img
            src="/Samurai.jpg"
            alt="samurai"
            className="w-full h-full object-cover"
          />
          <div className="p-5 flex flex-col gap-3">
            {/* Badge */}
            <div className="flex gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs duration-150 ${
                  mode ? "bg-gray-100 text-gray-700" : "bg-slate-600 text-white"
                }`}
              >
                Stock Ready
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs duration-150 ${
                  mode ? "bg-gray-100 text-gray-700" : "bg-slate-600 text-white"
                }`}
              >
                Official Store
              </span>
            </div>

            {/* Porduct title */}
            <h2 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap">
              {item.name}
            </h2>

            {/* Product price */}
            <div>
              <span className="text-xl font-bold">${item.postPrice}</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm line-through opacity-50">
                  ${item.prePrice}
                </span>
                <span className="bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
                  save {item.discount}%
                </span>
              </div>
            </div>

            {/* Product rating */}
            <span className="flex items-center mt-1">
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star-half-fill.svg" alt="" />
              <img src="/star-no-fill.svg" alt="" />
              <span className="text-xs ml-2 text-gray-500">
                {item.review} reviews
              </span>
            </span>

            {/* Product action button */}
            <div className="mt-5 flex gap-2">
              <button className="bg-blue-500/80 hover:bg-blue-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
                Add to cart
              </button>
              <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
                <img src="/love.svg" alt="" className="opacity-50" />
              </button>
              <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
                <img src="/eye.svg" alt="" className="opacity-50" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
