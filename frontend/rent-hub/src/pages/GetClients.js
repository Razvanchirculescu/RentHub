//src/components/GetClients.js

import React, { useEffect, useState } from 'react';
// import { useHistory } from "use-history";

import logo_main from '../images/logo_main.png';
import './GetClients.css';

function GetClients() {

    const [clientsData, setClientsData] = useState([]);
    const [clientId, setClientId] = useState('');


    const handleButtonClick = async () => {
        const response = await fetch(
            `http://localhost:8080/api/clients/id`
        );
        const data = await response.json();
        setClientId(data);
    };

    async function handleButtonClick2(id) {
        console.log(`Client ID: ${id}`);
        // history.push(`/api/clients/${id}`);
        window.location.href = `/api/clients/${id}`;
    }



    useEffect(() => {
        const fetchClientsData = async () => {
            const response = await fetch(
                'http://localhost:8080/api/clients');
            const data = await response.json();
            setClientsData(data);
        };
        fetchClientsData().then(r => console.log(clientsData.toString()));
    }, []);


    return (
        <div>
            <div className={logo_main}>
                <img src={logo_main} alt="Main Logo"/>
            </div>
            <table className="center">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {clientsData.map(client => (
                    <tr key={client.id}>
                        <td ><button className="button_client_id"
                             onClick={() => handleButtonClick2(client.id)}>{client.id}</button></td>
                        {/*<td>{client.id}</td>*/}
                        <td>{client.name}</td>
                        <td>{client.surname}</td>
                        <td>{client.emailAddress}</td>
                        <td>{client.phoneNumber}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
    export default GetClients;



    //
    // return (
    //     // <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
    //
    // <div className="container">
    //     <div className="row">
    //         <div className="col-md-12">
    //             <div className="card">
    //                 <div className="card-body">
    //                     <h5 className="card-title text-uppercase mb-0">Manage Users</h5>
    //                 </div>
    //                 <div className="table-responsive">
    //                     <table className="table no-wrap user-table mb-0">
    //                         <thead>
    //                         <tr>
    //                             <th scope="col" className="border-0 text-uppercase font-medium pl-4">#</th>
    //                             <th scope="col" className="border-0 text-uppercase font-medium">Name</th>
    //                             <th scope="col" className="border-0 text-uppercase font-medium">Occupation</th>
    //                             <th scope="col" className="border-0 text-uppercase font-medium">Email</th>
    //                             <th scope="col" className="border-0 text-uppercase font-medium">Added</th>
    //                             <th scope="col" className="border-0 text-uppercase font-medium">Category</th>
    //                             <th scope="col" className="border-0 text-uppercase font-medium">Manage</th>
    //                         </tr>
    //                         </thead>
    //                         <tbody>
    //                         <tr>
    //                             <td className="pl-4">1</td>
    //                             <td>
    //                                 <h5 className="font-medium mb-0">Daniel Kristeen</h5>
    //                                 <span className="text-muted">Texas, Unitedd states</span>
    //                             </td>
    //                             <td>
    //                                 <span className="text-muted">Visual Designer</span><br/>
    //                                 <span className="text-muted">Past : teacher</span>
    //                             </td>
    //                             <td>
    //                                 <span className="text-muted">daniel@website.com</span><br/>
    //                                 <span className="text-muted">999 - 444 - 555</span>
    //                             </td>
    //                             <td>
    //                                 <span className="text-muted">15 Mar 1988</span><br/>
    //                                 <span className="text-muted">10: 55 AM</span>
    //                             </td>
    //                             <td>
    //                                 <select className="form-control category-select" id="exampleFormControlSelect1">
    //                                     <option>Modulator</option>
    //                                     <option>Admin</option>
    //                                     <option>User</option>
    //                                     <option>Subscriber</option>
    //                                 </select>
    //                             </td>
    //                             <td>
    //                                 <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle">
    //                                     <i className="fa fa-key"></i></button>
    //                                 <button type="button"
    //                                         className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i
    //                                     className="fa fa-trash"></i></button>
    //                                 <button type="button"
    //                                         className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i
    //                                     className="fa fa-edit"></i></button>
    //                                 <button type="button"
    //                                         className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i
    //                                     className="fa fa-upload"></i></button>
    //                             </td>
    //                         </tr>
    //                         <tr>
    //                             <td className="pl-4">2</td>
    //                             <td>
    //                                 <h5 className="font-medium mb-0">Emma Smith</h5>
    //                                 <span className="text-muted">Texas, Unitedd states</span>
    //                             </td>
    //                             <td>
    //                                 <span className="text-muted">Visual Designer</span><br/>
    //                                 <span className="text-muted">Past : teacher</span>
    //                             </td>
    //                             <td>
    //                                 <span className="text-muted">daniel@website.com</span><br/>
    //                                 <span className="text-muted">999 - 444 - 555</span>
    //                             </td>
    //                             <td>
    //                                 <span className="text-muted">15 Mar 1855</span><br/>
    //                                 <span className="text-muted">10: 00 AM</span>
    //                             </td>
    //                             <td>
    //                                 <select className="form-control category-select" id="exampleFormControlSelect1">
    //                                     <option>Modulator</option>
    //                                     <option>Admin</option>
    //                                     <option>User</option>
    //                                     <option>Subscriber</option>
    //                                 </select>
    //                             </td>
    //                             <td>
    //                                 <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle">
    //                                     <i className="fa fa-key"></i></button>
    //                                 <button type="button"
    //                                         className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i
    //                                     className="fa fa-trash"></i></button>
    //                                 <button type="button"
    //                                         className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i
    //                                     className="fa fa-edit"></i></button>
    //                                 <button type="button"
    //                                         className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i
    //                                     className="fa fa-upload"></i></button>
    //                             </td>
    //                         </tr>
    //                         <tr>
    //                             <td className="pl-4">3</td>
    //                             <td>
    //                                 <h5 className="font-medium mb-0">Olivia Johnson</h5>
    //                                 <span className="text-muted">Texas, Unitedd states</span>
    //                             </td>
    //                             <td>
    //                                 <span className="text-muted">Visual Designer</span><br/>
    //                                 <span className="text-muted">Past : teacher</span>
    //                             </td>
    //                             <td>
    //                                 <span className="text-muted">daniel@website.com</span><br/>
    //                                 <span className="text-muted">999 - 444 - 555</span>
    //                             </td>
    //                             <td>
    //                                 <span className="text-muted">17 Aug 1988</span><br/>
    //                                 <span className="text-muted">12: 55 AM</span>
    //                             </td>
    //                             <td>
    //                                 <select className="form-control category-select" id="exampleFormControlSelect1">
    //                                     <option>Modulator</option>
    //                                     <option>Admin</option>
    //                                     <option>User</option>
    //                                     <option>Subscriber</option>
    //                                 </select>
    //                             </td>
    //                             <td>
    //                                 <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle">
    //                                     <i className="fa fa-key"></i></button>
    //                                 <button type="button"
    //                                         className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i
    //                                     className="fa fa-trash"></i></button>
    //                                 <button type="button"
    //                                         className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i
    //                                     className="fa fa-edit"></i></button>
    //                                 <button type="button"
    //                                         className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i
    //                                     className="fa fa-upload"></i></button>
    //                             </td>
    //                         </tr>
    //                         <tr>
    //                             <td className="pl-4">4</td>
    //                             <td>
    //                                 <h5 className="font-medium mb-0">Isabella Williams</h5>
    //                                 <span className="text-muted">Texas, Unitedd states</span>
    //                             </td>
    //                             <td>
    //                                 <span className="text-muted">Visual Designer</span><br/>
    //                                 <span className="text-muted">Past : teacher</span>
    //                             </td>/
    //                             <td>
    //                                 <span className="text-muted">daniel@website.com</span><br/>
    //                                 <span className="text-muted">999 - 444 - 555</span>
    //                             </td>
    //                             <td>
    //                                 <span className="text-muted">26 Mar 1999</span><br/>
    //                                 <span className="text-muted">10: 55 AM</span>
    //                             </td>
    //                             <td>
    //                                 <select className="form-control category-select" id="exampleFormControlSelect1">
    //                                     <option>Modulator</option>
    //                                     <option>Admin</option>
    //                                     <option>User</option>
    //                                     <option>Subscriber</option>
    //                                 </select>
    //                             </td>
    //                             <td>
    //                                 <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle">
    //                                     <i className="fa fa-key"></i></button>
    //                                 <button type="button"
    //                                         className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i
    //                                     className="fa fa-trash"></i></button>
    //                                 <button type="button"
    //                                         className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i
    //                                     className="fa fa-edit"></i></button>
    //                                 <button type="button"
    //                                         className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i
    //                                     className="fa fa-upload"></i></button>
    //                             </td>
    //                         </tr>
    //                         <tr>
    //                             <td className="pl-4">5</td>
    //                             <td>
    //                                 <h5 className="font-medium mb-0">Sophia Jones</h5>
    //                                 <span className="text-muted">Texas, Unitedd states</span>
    //                             </td>
    //                             <td>
    //                                 <span className="text-muted">Visual Designer</span><br/>
    //                                 <span className="text-muted">Past : teacher</span>
    //                             </td>
    //                             <td>
    //                                 <span className="text-muted">daniel@website.com</span><br/>
    //                                 <span className="text-muted">999 - 444 - 555</span>
    //                             </td>
    //                             <td>
    //                                 <span className="text-muted">16 Aug 2001</span><br/>
    //                                 <span className="text-muted">10: 55 AM</span>
    //                             </td>
    //                             <td>
    //                                 <select className="form-control category-select" id="exampleFormControlSelect1">
    //                                     <option>Modulator</option>
    //                                     <option>Admin</option>
    //                                     <option>User</option>
    //                                     <option>Subscriber</option>
    //                                 </select>
    //                             </td>
    //                             <td>
    //                                 <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle">
    //                                     <i className="fa fa-key"></i></button>
    //                                 <button type="button"
    //                                         className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i
    //                                     className="fa fa-trash"></i></button>
    //                                 <button type="button"
    //                                         className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i
    //                                     className="fa fa-edit"></i></button>
    //                                 <button type="button"
    //                                         className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i
    //                                     className="fa fa-upload"></i></button>
    //                             </td>
    //                         </tr>
    //                         <tr>
    //                             <td className="pl-4">6</td>
    //                             <td>
    //                                 <h5 className="font-medium mb-0">Charlotte Brown</h5>
    //                                 <span className="text-muted">Texas, Unitedd states</span>
    //                             </td>
    //                             <td>
    //                                 <span className="text-muted">Visual Designer</span><br/>
    //                                 <span className="text-muted">Past : teacher</span>
    //                             </td>
    //                             <td>
    //                                 <span className="text-muted">daniel@website.com</span><br/>
    //                                 <span className="text-muted">999 - 444 - 555</span>
    //                             </td>
    //                             <td>
    //                                 <span className="text-muted">15 Mar 1988</span><br/>
    //                                 <span className="text-muted">10: 55 AM</span>
    //                             </td>
    //                             <td>
    //                                 <select className="form-control category-select" id="exampleFormControlSelect1">
    //                                     <option>Modulator</option>
    //                                     <option>Admin</option>
    //                                     <option>User</option>
    //                                     <option>Subscriber</option>
    //                                 </select>
    //                             </td>
    //                             <td>
    //                                 <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle">
    //                                     <i className="fa fa-key"></i></button>
    //                                 <button type="button"
    //                                         className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i
    //                                     className="fa fa-trash"></i></button>
    //                                 <button type="button"
    //                                         className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i
    //                                     className="fa fa-edit"></i></button>
    //                                 <button type="button"
    //                                         className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i
    //                                     className="fa fa-upload"></i></button>
    //                             </td>
    //                         </tr>
    //                         </tbody>
    //                     </table>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //
    //     <div>
    //         <div className={logo_main}>
    //             <img src={logo_main} alt="Main Logo"/>
    //         </div>
    //     <table className="center">
    //         <thead>
    //         <tr>
    //             <th>ID</th>
    //             <th>Name</th>
    //             <th>Surname</th>
    //             <th>Email</th>
    //             <th>Phone</th>
    //         </tr>
    //         </thead>
    //         <tbody>
    //         {clients.map(client => (
    //             <tr key={client.id}>
    //                 <td>{client.id}</td>
    //                 <td>{client.name}</td>
    //                 <td>{client.surname}</td>
    //                 <td>{client.emailAddress}</td>
    //                 <td>{client.phoneNumber}</td>
    //             </tr>
    //         ))}
    //         </tbody>
    //     </table>
    //     </div>
    // </div>
    // );
