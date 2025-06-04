import Form from "@/(components)/form/form";
import Navbar from "@/(components)/navbar/navbar";


const Customer = () => {
    return(
        <div>
            <Navbar />
            <div className="h-[25rem] bg-gray-200">
                <div>
                    <h1 className="text-4xl font-light pl-4">Talk to us</h1>
                </div>
                <div className="flex justify-end">
                    <Form />
                </div>
            </div>


        </div>
    );
}

export default Customer;