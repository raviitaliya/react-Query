import { useQuery } from "react-query";
import axios from "axios";

const App = () => {
  
  const { isLoading, data } = useQuery("getdata", () => {
    return axios.get("https://jsonplaceholder.typicode.com/todos/1");
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  type ravi={
    id: number;
    title: string;
    completed: boolean;
  }

  console.log(data.data);
  

  

  return (
    <div className="flex w-full h-screen justify-center items-center bg-">
      <h1>efwelkfweifh</h1>

      {
        data?.data.map((data :ravi) =>{
          return <h1 key={data.id}>{data.title}</h1>
        })
      }
    </div>
  );
};

export default App;
