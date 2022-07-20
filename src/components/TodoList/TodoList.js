import { useGetTodoListQuery, getTodoList, todoListApi } from "../services/todoListApi";

export const TodoList = () => { 
    console.dir(todoListApi);
    // const { data } = useGetTodoListQuery();
    // console.log(data)
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error!</p>;
    return (
        <div>
        <ul>
            {/* {data.map((item) => (
            <li key={item.id}>{item.title}</li>
            ))} */}
                <li>Todo 1</li>
        </ul>
        </div>
    );
}