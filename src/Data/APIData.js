import axios from "axios";



const baseURL='https://covid19.mathdro.id/api/';  
export const getAllcountries=async()=>{
    try {
        const {data} = await axios.get(baseURL+'countries');
         return data.countries;
    }
    catch(error)
    {
        throw error;
    }

} 


export const getData=async (countrie)=>{

    try{

       const {data}= await axios.get(baseURL+"countries/"+countrie+"/confirmed");
       console.log(" individual country data is",data);
       return data;
     

    }
    catch(error){
   
        throw error;

    }

}


