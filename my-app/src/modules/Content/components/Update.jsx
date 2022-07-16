import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductService from "../Service/service";

export default function Update(){
    let navigate = useNavigate();
    const  id = useParams();

    const[data, setData] = useState([])

    const getValue =  async () =>{
        console.log(id)
       await axios.get(`http://localhost:3000/products/${id}`)
    // await ProductService.getOneProduct(1)
       .then((res)=>{
           console.log(res.data)
           setData(res.data)
       })
       .catch((err)=>{
           console.log(err)
       })
    }

    useEffect(()=>{
     getValue();
    },[])

    const handleChange = (event)=>{
    }

    const handleUpdateItem = ()=>{
    }

    return(
        <>
        <button type="button" class="btn btn-primary btn-lg" onClick={() =>{ navigate(-1) }}>Go Back</button>
        <form onSubmit={handleUpdateItem}>
        <h3>Update Form</h3>
            <div className="form-group">
                <label for="exampleInputEmail1">ID</label>
                <input type="text" className="form-control" id="id" name="id" onChange={handleChange} value={data.id}/>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input type="text" className="form-control" id="title" name="title" onChange={handleChange}  value={data.title}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Desciption</label>
                <input type="text" className="form-control" id="desciption" name="desciption" onChange={handleChange}  value={data.desciption}/>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Price</label>
                <input type="text" className="form-control" id="price" name="price" onChange={handleChange}  value={data.price}/>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Category</label>
                <input type="text" className="form-control" id="category" name="category" onChange={handleChange}  value={data.category}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        </>
    )
}