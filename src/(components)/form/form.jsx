
const Form = () => {
    return(
        <div className="w-[50rem] h-[45rem] flex-col text-center rounded-2xl mr-[5rem] p-8 shadow-2xl bg-white">
            <div className=" flex flex-row mb-[2rem]">
                <h1 className="m-2 w-[20%]">First Name: </h1>
                <input className="border-1 w-[60%]"></input>
            </div>

            <div className=" flex flex-row mb-[2rem]">
                <h1 className="m-2 w-[20%]">Email: </h1>
                <input className="border-gray-400 border-1 p-1 w-[60%]"></input>
            </div>

            <div className=" flex flex-row mb-[2rem]">
                <h1 className="m-2 w-[20%]">Message: </h1>
                <textarea type="text" className="border-1 p-1 w-[60%] h-[20rem]"></textarea>
            </div>

            <div className=" flex flex-row mb-[2rem]">
                <h1 className="m-2 w-[20%]"></h1>
                <div className="w-[60%] flex">
                    <button className="border-2 pt-1 pb-1 px-4"><h2>Submit</h2></button>
                </div>
            </div>

            
        </div>
    )
}

export default Form