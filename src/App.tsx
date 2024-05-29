import { useQuery } from "react-query";
import axios from "axios";

const App = () => {
  
  const { isLoading, data,isError , Error } = useQuery("getdata", () => {
    return axios.get("https://cat-fact.herokuapp.com/facts1");
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  

  if(isError){
    return <h1 className="text-3xl">{Error}</h1>
  }


  console.log(data);

  type fetchData ={
    _id:string,
    title:string,
    type:string,
    user:string,
    text:string,
    __v:number,
  }
  
  // console.log(data);
  

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-">
      {
       data?.data.map((data:fetchData) =>{
          return <h1 key={data._id}>{data.text}</h1>
        })
      }
    </div>
  );
};

export default App;
