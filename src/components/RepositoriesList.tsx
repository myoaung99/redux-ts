import React, { useEffect, useRef, useState } from "react";
import useActions from "../hooks/useActions";
import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { data, loading, error } = useTypedSelector(
    (state) => state.repositories
  );

  const inputRef = useRef<null | HTMLInputElement>(null);
  const { searchRepositories } = useActions();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(term);

    setTerm("");
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input ref={inputRef} value={term} onChange={onChangeHandler} />
        <button>Search</button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}

      {!error && !loading && data}
    </div>
  );
};

export default RepositoriesList;
