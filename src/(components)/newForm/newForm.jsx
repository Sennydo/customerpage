'use client'
import { useState } from "react"

const NewForm = () => {

    const [formDetails, setFormDetails] = useState({SI_no: "", cust_name: "", short_name:"", contact_person: "", city: ""});

    function handleForm(e) {
        setFormDetails(data => ({...data, [e.target.name]: e.target.value})) // ...data is previous data plus new data
    }

    function checkValue(e) {
        console.log(formDetails);
    }

    async function submitForm(e) {
        e.preventDefault();

        const response = await fetch('/api', {
            method:'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formDetails)
        });

        const {working, err} = await response.json();

        console.log(working);
        console.log(err);

        if (working){
            setFormDetails({SI_no: "", cust_name: "", short_name:"", contact_person: "", city: ""});
        }
    }

    return(
        <div className="w-[50rem] h-[40rem] flex-col text-center rounded-2xl mr-[5rem] p-8 shadow-2xl bg-white">
            <div className=" flex flex-row mb-[2rem]">
                <h1 className="m-2 w-[20%]"> SI number: </h1>
                <input className="border-gray-400 border-1 p-1 w-[60%]"
                 name="SI_no"
                 value={formDetails.SI_no}
                 onChange={handleForm}></input>
            </div>

            <div className=" flex flex-row mb-[2rem]">
                <h1 className="m-2 w-[20%]">Customer Name: </h1>
                <input className="border-gray-400 border-1 p-1 w-[60%]"
                    name="cust_name"
                    value={formDetails.cust_name}
                    onChange={handleForm}
                    ></input>
            </div>

            <div className=" flex flex-row mb-[2rem]">
                <h1 className="m-2 w-[20%]">Short Name: </h1>
                <input className="border-gray-400 border-1 p-1 w-[60%]"
                    name="short_name"
                    value={formDetails.short_name}
                    onChange={handleForm}
                    ></input>
            </div>

            <div className=" flex flex-row mb-[2rem]">
                <h1 className="m-2 w-[20%]">Contact Person: </h1>
                <input className="border-gray-400 border-1 p-1 w-[60%]"
                    name="contact_person"
                    value={formDetails.contact_person}
                    onChange={handleForm}
                    ></input>
            </div>

            <div className=" flex flex-row mb-[2rem]">
                <h1 className="m-2 w-[20%]">City: </h1>
                <input className="border-gray-400 border-1 p-1 w-[60%]"
                    name="city"
                    value={formDetails.city}
                    onChange={handleForm}
                    ></input>
            </div>
            

            <div className=" flex flex-row mb-[2rem]">
                <h1 className="m-2 w-[20%]"></h1>
                <div className="w-[60%] flex">
                    <button className="border-2 pt-1 pb-1 px-4"
                        onClick={submitForm}
                        ><h2>Submit</h2></button>
                </div>
            </div>

            
        </div>
    )
}

export default NewForm