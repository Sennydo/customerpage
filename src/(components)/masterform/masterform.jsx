'use client'
import { useState } from "react"
import EditForm from "../editForm/editForm"
import Link from "next/link"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const MasterForm = ({customers}) => {

    const [showTab, setShowTab] = useState(true)
    const [editingMode, setEditingMode] = useState(false)
    const [editData, setEditData] = useState(null)

    const showTableToggle = () => {
        setShowTab(!showTab);
    }

    const globalCloseEdit = (closeEdit) => {
        setEditingMode(false)
    }

    const handleEdit = (cust) => {
        setEditingMode(!editingMode)
        setEditData(cust)
    }

    const deleteData = async(e, id) => {
        e.preventDefault()

        const response = await fetch('/api', {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(id)
        })

        const message = await response.json()
        console.log(message)

        window.location.reload()
    }

    return (
        <div>
            <h1 className="text-center text-4xl m-2 mb-[2rem]">Database</h1>

            <div className="flex justify-center gap-[2rem] mb-[2rem]">
                <button className="border-1 py-1 px-2" onClick={showTableToggle}>View Table</button>
                <Link href='/customer'>
                    <button className="border-1 py-1 px-2">Add New</button>
                </Link>
            </div>

            {showTab && (
                <div className="flex justify-center table-class">
                    <table className="border-1">
                        <thead>
                            <tr className="bg-gray-400">
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
                                    <td><button className="p-1 m-1 cursor-pointer" onClick={() => {
                                        handleEdit(cust)
                                    }}><FaEdit /></button>
                                        <button className="p-1 m-1 cursor-pointer" onClick={(e) => {
                                            deleteData(e, cust.id)
                                        }}><MdDelete /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
            )}

            {editingMode &&
               <EditForm closeState={editingMode} closeFunc={globalCloseEdit} rowValData={editData}/>
            }

        </div>
    )
}

export default MasterForm