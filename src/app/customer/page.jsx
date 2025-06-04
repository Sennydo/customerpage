import Form from "@/(components)/form/form";
import Navbar from "@/(components)/navbar/navbar";


const Customer = () => {
    return(
        <div className="flex flex-col">
            <Navbar />
            <Form className="items-center justify-items-center"/>
        </div>
    );
}

export default Customer;