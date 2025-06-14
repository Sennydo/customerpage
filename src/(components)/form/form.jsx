'use client'
import { useState } from "react"

const Form = () => {

    const [formDetails, setFormDetails] = useState({name: "", email: "", message:""});

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
            setFormDetails({name: "", email: "", message:""});
        }
    }

    return(
        <div className="w-[50rem] h-[45rem] flex-col text-center rounded-2xl mr-[5rem] p-8 shadow-2xl bg-white">
            <div className=" flex flex-row mb-[2rem]">
                <h1 className="m-2 w-[20%]"> Name: </h1>
                <input className="border-gray-400 border-1 p-1 w-[60%]"
                 name="name"
                 value={formDetails.name}
                 onChange={handleForm}></input>
            </div>

            <div className=" flex flex-row mb-[2rem]">
                <h1 className="m-2 w-[20%]">Email: </h1>
                <input className="border-gray-400 border-1 p-1 w-[60%]"
                    name="email"
                    value={formDetails.email}
                    onChange={handleForm}
                    ></input>
            </div>

            <div className=" flex flex-row mb-[2rem]">
                <h1 className="m-2 w-[20%]">Message: </h1>
                <textarea type="text" className="border-gray-400 border-1 p-1 w-[60%] h-[20rem]"
                    name="message"
                    value={formDetails.message}
                    onChange={handleForm}
                    ></textarea>
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

export default Form