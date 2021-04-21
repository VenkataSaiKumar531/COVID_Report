import React,{useState,useEffect} from 'react';
import {Card,Form,Table} from 'react-bootstrap';
import {getAllcountries,getData} from '../Data/APIData';
import {ScaleLoader} from 'react-spinners';
import ReactExport  from 'react-data-export'


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const HomeScreen=()=>{
    const[ countries,setCountries]=useState([]);
    const [data,setData]=useState([]);
    const[mydefaultvalue,setmyDefaultValue]=useState('Select your country');
   // const [ScaleLoader,setScaleLoader]=useState(false)


    const getCountries=async()=>{
        const data= await getAllcountries();
        setCountries(data);
    }

    useEffect(()=>{
        getCountries(); // for ""Select Option"""..... 
    },[]);

    const handleChange =async (e)=>{
        console.log("Selected country is ",e.target.value);
        const data= await getData(e.target.value);
        // setScaleLoader(true)
        setData(data); // for Table
        // setScaleLoader(false)

    }

    const DataSet = [
        {
            columns: [
                {title: "Country Region", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
                {title: "Confirmed", style: {font: {sz: "18", bold: true}}, width: {wch: 30}}, // width in characters
                {title: "Recovered", style: {font: {sz: "18", bold: true}}, width: {wpx: 100}}, // width in pixels
                {title: "Deaths", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
  
                
            ],
            data: data.map((data) => [
                
                {value: data.countryRegion, style: {font: {sz: "14"}}},
                {value: data.confirmed, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "3461eb"}}}},
                {value: data.recovered, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "4bd909"}}}},
                {value: data.deaths, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "eb1207"}}}}
                
               
            ])
        }
    ]

   
    return(
        
        <div class="container">

                <Card style={{ width: '50rem' }}>
                            
                            <Card.Body>
                                        <Card.Title>Excel Export</Card.Title>
                                        {data.length !== 0 ? (
                         <ExcelFile 
                         filename="Covid-19 Data"
                         element={<button type="button" className="btn btn-success float-right m-3">Export Data</button>}>
                             <ExcelSheet dataSet={DataSet} name="Covid-19 Country Report"/>
                         </ExcelFile>
                    ): null} 

                                                <Form>
                                    
                                                                <Form.Label>Please select your countrie</Form.Label>
                                                                <Form.Control as="select" defaultValue = "test" onChange={handleChange}>
                                                                    {
                                                                        countries.map((country,i)=>{
                                                                            
                                                                            return(
                                                                                <option key={i}>{country.name}</option>
            
                                                                            )
                                                                        })
                                                                    }

                                                                </Form.Control>

                                                                 <Table responsive>
                                                                        <thead>
                                                                                <tr>                                                                            
                                                                                        <th>Country Region</th>
                                                                                        <th>Confirmed</th>
                                                                                    
                                                                                        <th>Recovered</th>
                                                                                        <th>Deaths</th>                                                                            
                                                                                </tr>
                                                                        </thead>

                                                                        <tbody>
                                                                            {

                                                                                data.length===0?(null
                                                                                ):(
                                                                                     data.map((info)=>{
                                                                                        return(
                                                                                        <tr>
                                                                                            <td>{info.countryRegion}</td>
                                                                                            <td>{info.confirmed}</td>
                                                                                            <td>{info.recovered}</td>
                                                                                            <td>{info.deaths}</td>
     
                                                                                        </tr>
                                                                                        )
                                                                                       
                                                                                    })
                                                                                )
                                                                               
                                                                              
                                                                            }


                                                                       
                                                                        </tbody>

                                                                        

                                                                    </Table>    
                                                               
                               
                                                </Form>

                       
                                        
                            </Card.Body>
                </Card>
        </div>
        
    )
}

export default HomeScreen;





