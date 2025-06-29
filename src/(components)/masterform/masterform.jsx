'use client'
import { useState } from "react"

const MasterForm = ({customers}) => {
    const [showTab, setShowTab] = useState(false)

    console.log(customers)

    const showTableToggle = () => {
        setShowTab(!showTab);
    }

    return (
        <div>
            <h1 className="text-center text-4xl m-2 mb-[2rem]">Database</h1>

            <div className="flex justify-center gap-[2rem] mb-[2rem]">
                <button className="border-1 py-1 px-5"><h1>Edit</h1></button>
                <button className="border-1 py-1 px-2" onClick={showTableToggle}>View Table</button>
            </div>

            {showTab && (
                <div className="flex justify-center table-class">
                    <table className="border-1">
                        <thead>
                            <tr>
                                <th>SI_No</th>
                                <th>Customer Name</th>
                                <th>Short Name</th>
                                <th>Contact Person</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((cust) => (
                                <tr key={cust.id}>
                                    <td>{cust.SI_no}</td>
                                    <td>{cust.cust_name}</td>
                                    <td>{cust.short_name}</td>
                                    <td>{cust.contact_person}</td>
                                    <td>{cust.city}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            )}

        </div>
    )
}

export default MasterForm