import { useState } from "react";
import MyTable from "./component/MyTable";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <>
      <MyTable  searchQuery={searchQuery} handleSearch={handleSearch}/>
    </>
  );
}

export default App;
