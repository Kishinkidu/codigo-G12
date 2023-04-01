import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import EditUser from "../../components/EditUser";
import { get } from "../../service";
import Table from "../../components/table"

export default function Home() {
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    const fetchUsers = async () => {
        const data = await get();

        if (!data) {
            Swal.fire({
                title: "Todo mal",
                text: "Hubo un erro al traer a los usuarios",
                icon: "error",
            });
            return;
        }
        setUsers(data);
    };

    const redirectToCreateUser = () => navigate("/signup");

    useEffect(() => {
        fetchUsers();
        // importante: Si no colocan este array vacio la funcion que
        // dentro de useEffect se ejecutura de forma infinita
    }, []);
    const columns = [
        {
            text: "Nombre",
            key: "name"
        },
        {
            text: "Email",
            key: "email"
        },
        {
            text: "Avatar",
            key: "avatar",
            render: (row) => {
                return (
                    <img className="rounded-circle" width={40} alt="" src={row.avatar} />
                )
            }
        },
        {
            text: "Password",
            key: "password"
        },
        {
            text: "Terminos y Condiciones",
            key: "terms",
            render: (row) => {
                return <span>{row.terms ? "✅" : "❌"}</span>
            }
        },
        {
            text: "Acciones",
            key: "id",
            render: (row) => {
                return (
                    <div className="d-flex justify-content-around">
                        <EditUser id={row.id} fetchUsers={fetchUsers}/>
                        <button className="btn btn-dark">❌</button>
                    </div>
                )
            }
        }
    ]
    return (
        <div className="container">
            <div className="mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Lista de usuarios</h1>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <button onClick={redirectToCreateUser} className="btn btn-warning">
                            Crear Usario
                        </button>
                    </div>
                </div>
                <Table columns={columns} rows={users} />
            </div>
        </div >

    );
}