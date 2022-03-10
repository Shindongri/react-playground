import React from "react";
import { useRecoilValue } from "recoil";

import { todoSelector } from "./selector";

const Todos = () => {
  const todo = useRecoilValue(todoSelector(1));

  return <div>{todo.data.title}</div>;
};

export default Todos;
