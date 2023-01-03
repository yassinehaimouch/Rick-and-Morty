import { useEffect, useState } from "react";
import PaginationSection from "../pagination/Pagination";
import Search from "../search/Search";
import Character from "./Character";
import classes from "./characters.module.css";

const Characters = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, setFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <section>
      <Search setSearch={setSearch} setPageNumber={setPageNumber}/>
      <div className={classes["characters-container"]}>
        {results &&
          results.map((item) => (
            <Character
              key={item.id}
              name={item.name}
              image={item.image}
              status={item.status}
              species={item.species}
              locationName={item.location.name}
            />
          ))}
      </div>
      <div>
        <PaginationSection setPageNumber={setPageNumber} info={info}/>
      </div>
    </section>
  );
};

export default Characters;
