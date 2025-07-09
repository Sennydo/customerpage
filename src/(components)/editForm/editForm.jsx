'use client'
import { useState } from "react"

const EditForm = ({rowValData, closeState, closeFunc}) => {

    const [currCloseState, setCurrCloseState] = useState(closeState)
    const [rowVal, setRowVal] = useState(rowValData)
    console.log(rowVal)

    const handleChange = (e) => {
        setRowVal(data => ({...data, [e.target.name]: e.target.value})) 
    }


    console.log(closeState)

    return (
        <div className= "fixed inset-0 bg-gray-500 bg-opacity-65 flex justify-center flex-col items-center">
            <div className="bg-amber-50 p-[3rem]">

                <h1>SI_No</h1>
                <input className="border-1" name="SI_no" onChange={handleChange} value={rowVal.SI_no}></input>

                <h1>Customer Name</h1>
                <input className="border-1" name="cust_name" onChange={handleChange} value={rowVal.cust_name}></input>

                <h1>Short Name</h1>
                <input className="border-1" name="short_name" onChange={handleChange} value={rowVal.short_name}></input>

                <h1>Contact Person</h1>
                <input className="border-1" name="contact_person" onChange={handleChange} value={rowVal.contact_person}></input>

                <h1>City</h1>
                <input className="border-1" name="city" onChange={handleChange} value={rowVal.city}></input>

                <div>
                    <button className="border-1" onClick={closeFunc}>Close</button>
                    <button className="border-1" onClick={closeFunc}>Submit</button>
                </div>
            </div>


        </div>
    )
}

export default EditForm