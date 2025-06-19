import Navbar from "@/(components)/navbar/navbar"
import '../globals.css'


const Master = () => {

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center text-4xl m-2 mb-[2rem]">Database</h1>

            <div className="flex justify-center gap-[2rem] mb-[2rem]">
                <button className="border-1 py-1 px-5"><h1>Edit</h1></button>
                <button className="border-1 py-1 px-2">View Table</button>
            </div>

            <div className="flex justify-center table-class">
                <table className="border-1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Company Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Example Data 1</td>
                            <td>Example Data 2</td>
                            <td>Example Data 3</td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default Master