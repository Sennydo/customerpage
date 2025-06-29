import Navbar from "@/(components)/navbar/navbar"
import '../globals.css'
import MasterForm from "@/(components)/masterform/masterform"
import pool from "@/lib/db"




const Master = async () => {
    const [data] = await pool.execute('SELECT * FROM customersPage');
    return (
        <div>
            <Navbar></Navbar>
            <MasterForm customers={data}/>
        </div>
    )
}

export default Master