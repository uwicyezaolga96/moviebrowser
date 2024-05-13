import Hero from "./Hero";

// TMDB API KEY = 6bca131e9fc66da5f92cd7b1080c873c

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`  
  return (
    <>
      < Hero text={title} />
    </>
  );
};

export default SearchView;
