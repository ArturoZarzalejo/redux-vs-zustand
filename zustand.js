import { createStore } from 'zustand/vanilla'

const store = createStore(() => ({
    count: 0,
    increment: () => setState((state) => ({ count: state.count + 1 })),
    decrement: () => setState((state) => ({ count: state.count - 1 })),
}))
const { getState, setState, subscribe } = store


export default store