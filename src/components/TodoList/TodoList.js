/* eslint-disable no-unused-vars */
import {
    useGetTodoListQuery, 
    getTodoList,
    // todoListApi
} from "../services/todoListApi";
import { useState } from "react";

export const TodoList = () => { 
    
    const { data, isLoading, error } = useGetTodoListQuery();
    console.log('data', data)
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    // const [todoList, setTodoList] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    // const [inProgress, setInProgress] = useState(false);
    // eslint-disable-next-line no-undef
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             setLoading(true);
    //             const todoList = await getTodoList();
                
    //             setTodoList(todoList);
    //             setLoading(false);
    //         } catch (error) {
    //             setError(true)
    //             setLoading(false);
    //             console.log(error)
    //         }
    //     }
    //     fetchData();
    // }, []);

    const onClick = (e) => {
        // if (!item.completed) {
        //     console.log('item before', item.completed)
        //     setInProgress(true);
        //     console.log('item after', item.completed)
        // }
        console.log('item', e)
    }

    return (
        <div>
        <ul>
            {data.map((item) => (                      
                <li key={item.id} onClick={ onClick(item) }>
                    <span>
                        {item.title}
                    </span>
                    <span>
                        {/* {inProgress ? 'in progress' : null} */}
                        {item.completed ? 'Done' : 'To do'}
                    </span>                    
                </li>
                ))}
                {/* {todoList.map((item) => (
                    <li key={item.id}>
                        {item.title}                       
                    </li>
                ))} */}
                {/* <li>Todo 1</li> */}
        </ul>
        </div>
    );
}