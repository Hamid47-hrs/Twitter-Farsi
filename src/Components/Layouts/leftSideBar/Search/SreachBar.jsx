import { Input } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useEffect, useState } from "react";
import useStyle from "./SearchBarStyle";

const SearchBar = () => {
  const classes = useStyle();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) return;
    console.log("data has been fetched to API");
  }, [query]);
  return (
    <div className={classes.root}>
      <Search className={classes.searchIcon} />
      <Input
        className={classes.input}
        placeholder="جستوجو کنید ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
