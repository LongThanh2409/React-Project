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
    <div>
      <h1>Search Results for "{searchResults.length}"</h1>
      {searchResults.map((item) => (
        <ShowResults key={item._id} data={item} />
      ))}
    </div>
  );
};

export default SearchResults;