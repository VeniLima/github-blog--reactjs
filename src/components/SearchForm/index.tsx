import { useState } from "react";
import { SearchFormInput } from "./styles";

export function SearchForm(filteredPost: any) {
  /*  const [search, setSearch] = useState("");

  const filteredPosts = search.length > 0
  ? postData.filter(post => post.body.includes(search))
  : []; */
  return (
    <>
      <form>
        <SearchFormInput
          value=""
          type="text"
          placeholder="Buscar conteúdo"
          /* onChange={(e) => setSearch(e.target.value)} */
        />
      </form>
    </>
  );
}
