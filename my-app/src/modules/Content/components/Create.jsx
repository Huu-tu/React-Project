import React, { useState } from "react";
import ProductService from "../Service/service";
import { useNavigate } from "react-router-dom";

export default function Create(){
    let navigate = useNavigate();

    const[input, setInput] = useState({
        id: "",
        title: "",
        description: "",
        price: "",
        category: "",
    })

    const handleChange = (event)=>{
        setInput({...input, [event.target.name]: event.target.value});
        // console.log(input)
    }

    const handleAddItem = (event)=>{
        event.preventDefault();

        const data = {
            id: input.id,
            title: input.title,
            description: input.description,
            price: input.price,
            category: input.category,

        }

        console.log(data)

        ProductService.createProduct(data)
    }

    return(
        <>
        <button type="button" class="btn btn-primary btn-lg" onClick={() =>{ navigate(-1) }}>Go Back</button>
        <form onSubmit={handleAddItem}>
        <h3>Create Form</h3>
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
                <input type="text" className="form-control" id="description" name="description" onChange={handleChange}  value={input.description}/>
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