import { selectorFamily, selector } from "recoil";
import { fetchTodo, fetchTodos } from "../../apis/todo";

export const todosSelector = selector({
    key: "todos/fetchTodos",
    get: async () => {
        return fetchTodos();
    },
});

export const todoSelector = selectorFamily({
    key: "todos/fetchTodo",
    get: (id: number) => async () => {
        return fetchTodo(id);
    },
});
