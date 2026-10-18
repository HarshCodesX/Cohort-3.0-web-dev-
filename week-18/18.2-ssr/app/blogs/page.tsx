import axios from "axios";

async function getBlogs(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
}

export default async function Blogs(){
    const blogs = await getBlogs();
    return <div>
        {blogs.map((blog: ITodo) => {
            return <Todo title={blog.title} completed={blog.completed} key={blog.title} />
        })}
    </div>
}

interface ITodo{
    title: string;
    completed: boolean;
}

function Todo({title, completed}: ITodo){
    return <div>
        {title} - {completed ? "Completed" : "Not Completed"}
    </div>
}