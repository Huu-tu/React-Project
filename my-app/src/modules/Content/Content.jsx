import React, { useEffect, useState } from "react";
import ProductService from "./Service/service";
import { useNavigate } from "react-router-dom";

export default function Content(){
    const[products, setProduct]= useState([])
    let navigate = useNavigate();

    const getValue = async () =>{
        await ProductService.getProduct()
        .then((res)=>{
            // console.log(res.data);
            setProduct(res.data)
        })
    }

    useEffect(()=>{
        getValue()
    },[products])

    const handleCreate = () =>{
        navigate('/create')
    }

    const handleUpdate = (id) =>{
        navigate(`/update/${id}`)
    }

    const hanldeDelete = (id) =>{
        // console.log(id)
        ProductService.deleteProduct(id)
    }
    return(
        <>
        <button type="button" className="btn btn-primary btn-lg" onClick={() =>{ handleCreate() }}>Add Product</button>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Desciption</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                products.map((item) =>(
                    <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.title}</td>
                        <td>{item.desciption}</td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                        <td>
                            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() =>{
                                handleUpdate(item.id)
                            }}>Update</button>
                            <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={() =>{
                                hanldeDelete(item.id)
                            }}>Delete</button>
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
        </>
    )
}