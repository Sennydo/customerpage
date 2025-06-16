import Form from "@/(components)/form/form";
import Navbar from "@/(components)/navbar/navbar";


const Customer = () => {
    return(
        <div>
            <Navbar />
            <div className="h-[25rem] bg-[#edebea] ml-[2rem] mr-[2rem]">
                <div className="pl-[2rem] pt-3">
                    <h1 className="text-4xl font-light pl-4 pt-5">Talk with our Team</h1>
                    <h1 className="w-[20rem] pl-6 pt-3">Fill out your information and our representative will be in touch with you shortly. Please give us 2-3 business days</h1>
                </div>
                <div className="flex justify-end">
                    <Form />
                </div>
            </div>


        </div>
    );
}

export default Customer;