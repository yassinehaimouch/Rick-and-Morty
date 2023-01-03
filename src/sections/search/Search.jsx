import classes from "./search.module.css";

const Search = ({setSearch , setPageNumber}) => {
  const handleChange = event => {
    setPageNumber(1);
    setSearch(event.target.value);
  };

  return (
    <div className={classes["input-container"]}>
      <input type="search" placeholder="Search for characters" onChange={handleChange}/>
    </div>
  );
};

export default Search;
