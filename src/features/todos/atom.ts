import {atom, selectorFamily} from 'recoil';
import {fetchTodo} from "../../apis/todo";

const todoIDState = atom<number | null>({
    key: 'todoIDState',
    default: null,
});

const todoSelector = selectorFamily({
    key: 'todoSelector',
    get: (id: number) => async () => {
        return fetchTodo(id);
    }
})
