'use client'
import { useState } from "react"

const EditForm = ({rowValData, closeState, closeFunc}) => {

    const [currCloseState, setCurrCloseState] = useState(closeState)
    const [rowVal, setRowVal] = useState(rowValData)
    console.log(rowVal)

    const handleChange = (e) => {
        setRowVal(data => ({...data, [e.target.name]: e.target.value})) 
    }


    const patchData = async(e) => {
        e.preventDefault()

        const response = await fetch('/api', {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(rowVal)
        }
        )

        const {message} = await response.json()
        console.log(message)

        window.location.reload()
        
    }
    console.log(closeState)

    return (
        <div className= "fixed inset-0 bg-gray-500 bg-opacity-65 flex justify-center flex-col items-center">
            <div className="bg-amber-50 p-[3rem] flex flex-col gap-4">

                <div>
                    <h1>SI_No</h1>
                    <input className="border-1" name="SI_no" onChange={handleChange} value={rowVal.SI_no}></input>
                </div>

                <div>
                    <h1>Customer Name</h1>
                    <input className="border-1" name="cust_name" onChange={handleChange} value={rowVal.cust_name}></input>
                </div>

                <div>
                    <h1>Short Name</h1>
                    <input className="border-1" name="short_name" onChange={handleChange} value={rowVal.short_name}></input>
                </div>

                <div>
                    <h1>Contact Person</h1>
                    <input className="border-1" name="contact_person" onChange={handleChange} value={rowVal.contact_person}></input>
                </div>

                <div>
                    <h1>City</h1>
                    <input className="border-1" name="city" onChange={handleChange} value={rowVal.city}></input>
                </div>

                <div className="flex gap-2 items-center p-5">
                    <button className="border-1 px-2" onClick={closeFunc}>Close</button>
                    <button className="border-1 px-2" onClick={patchData}>Submit</button>
                </div>
            </div>


        </div>
    )
}

export default EditForm