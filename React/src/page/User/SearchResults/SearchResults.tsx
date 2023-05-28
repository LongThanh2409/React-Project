import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSearch } from "../../../api/Search/Search";
import ShowResults from "../../../layouts/User/Header/Search/ShowResults/ShowResults";

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get("keyword");

  const [searchResults, setSearchResults] = useState<Iproducts[]>([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (keyword) {
          const { data } = await getSearch(keyword);
          setSearchResults(data.product);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSearchResults();
  }, [keyword]);

  return (
    <div className="pt-5 h-full bg-slate-50">
      <h1 className="text-center my-5">Total <strong>{searchResults.length}</strong > Search results for <strong className="italic text-teal-600">"{keyword}"</strong></h1>
      <section className=" py-10">
  <div className="grid max-w-full grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {searchResults.map((item, index) => (
      <article key={index} className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 border-[#cce7d0]">
        <a className="relative mx-3 mt-3 md:h-60 flex justify-center overflow-hidden rounded-xl">
          <img src={item.image[0]} className="w-full object-contain cursor-pointer" alt="product image" />
          <span className="absolute top-0 left-6 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">% OFF</span>
          <span
            title="Add to Favorites"
            className="text-4xl text-gray-300 hover:text-red-600 duration-200 absolute right-10 top-0 cursor-pointer"
          >
            &hearts;
          </span>
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl tracking-tight text-slate-900">{item.name}</h5>
          </a>
          <div className="mt-2 mb-5 flex flex-col justify-start">
            <p>
              <span className="text-2xl font-bold text-slate-900 mx-1">{item.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}</span>
              <span className="text-sm text-slate-900 line-through mx-1">
              {item.priceSale.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}
              </span>
            </p>
            <div className="flex items-center"></div>
          </div>
          <a
            href="#"
            className="flex items-center justify-center rounded-md dark:bg-slate-900 bg-teal-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </a>
        </div>
      </article>
    ))}
  </div>
</section>
    </div>
  );
};

export default SearchResults;