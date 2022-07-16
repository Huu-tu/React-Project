import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductService from "../Service/service";

export default function Update(){
    const location = useLocation();
    let navigate = useNavigate();

    const[input, setInput] = useState({
        id: location.state.id,
        title: location.state.title,
        desciption: location.state.desciption,
        price: location.state.price,
        category: location.state.category,
    })

    const handleChange = (event) =>{
        setInput({...input, [event.target.name]: event.target.value});
    }

    const handleUpdateItem = (event)=>{
        event.preventDefault();

        const data = {
            id: input.id,
            title: input.title,
            description: input.description,
            price: input.price,
            category: input.category,
        }

        console.log(data)

        ProductService.updateProduct(location.state.id, data)
        .then(()=>{
            navigate(-1)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <>
        <button type="button" class="btn btn-primary btn-lg" onClick={() =>{ navigate(-1) }}>Go Back</button>
        <form onSubmit={handleUpdateItem}>
        <h3>Update Form</h3>
            <div className="form-group">
                <label for="exampleInputEmail1">ID</label>
                <input type="text" className="form-control" id="id" name="id" onChange={handleChange} value={input.id}/>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input type="text" className="form-control" id="title" name="title" onChange={handleChange}  value={input.title}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Desciption</label>
                <input type="text" className="form-control" id="description" name="description" onChange={handleChange}  value={input.desciption}/>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Price</label>
                <input type="text" className="form-control" id="price" name="price" onChange={handleChange}  value={input.price}/>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Category</label>
                <input type="text" className="form-control" id="category" name="category" onChange={handleChange}  value={input.category}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        </>
    )
}