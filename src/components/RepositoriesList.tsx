import React, { useEffect, useRef, useState } from "react";
import useActions from "../hooks/useActions";

const RepositoriesList = () => {
  const [term, setTerm] = useState("");
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
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input ref={inputRef} value={term} onChange={onChangeHandler} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
