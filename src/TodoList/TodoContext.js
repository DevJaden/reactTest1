import React,{createContext, useContext, useReducer, useRef} from 'react';

const reducer = (state,action) => {
    switch(action.type){
        case 'CREATE':
            return state.concat(action.item);
        case 'REMOVE':
            return state.filter((item) =>{
                return item.id !== action.id
            });
        case 'TOGGLE':
            return state.map((item) => {
                return item.id === action.id ? {...item, clear: !item.clear} : item;
            });
        default:
            throw new Error(`action type Error : ${action.type}`)
    };
};

const todoItems = [
    {
        id: 1,
        text: 'TodoList1',
        clear: true
    },
    {
        id: 2,
        text: 'TodoList2',
        clear: false
    },
    {
        id: 3,
        text: 'TodoList3',
        clear: false
    },
]

const TodoContextState = createContext();
const TodoContextDispatch = createContext();
const TodoNextId = createContext();

export function TodoContext({children}){
    const [state, dispatch] = useReducer(reducer, todoItems);
    const nextId = useRef(4);

    return(
        <TodoContextState.Provider value={state}>
            <TodoContextDispatch.Provider value={dispatch}>
                <TodoNextId.Provider value={nextId} >
                    {children}
                </TodoNextId.Provider>
            </TodoContextDispatch.Provider>
        </TodoContextState.Provider>
    );
};

export const useTodoState = () =>{
    return useContext(TodoContextState);
}

export const useTodoDispatch = () =>{
    return useContext(TodoContextDispatch);
}

export const useTodoNextId = () =>{
    return useContext(TodoNextId);
}