import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';


const AllUsers = () => {

  const {data: infoes = [], refetch}= useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res =await fetch('http://localhost:4000/users');
            const data =await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id =>{
        fetch(`http://localhost:4000/users/admin/${id}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(datae =>{
            console.log(datae)
            if(datae.modifiedCount > 0){
                toast.success("Admin Create Successfully");
                refetch()
            }
        })
    }

    const handleRemoveUser =id =>{
        fetch(`http://localhost:4000/users/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
                toast.success("User Successfully Remove");
                refetch()
            }
        })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Create Admin</th>
                        <th>Remove User</th>
                    </tr>
                </thead>
                <tbody>
                {
                    infoes?.map((infoe, i) =><tr key={infoe._id}>
                        <th>{i+1}</th>
                        <td>{infoe.name}</td>
                        <td>{infoe.email}</td>
                        <td>{ infoe?.role !== 'admin' && 
                            <button onClick={()=>handleMakeAdmin(infoe._id)} className='btn btn-xs btn-secondary'>Make Admin</button>
                            }</td>
                        <td><button onClick={()=>handleRemoveUser(infoe._id)} className='btn btn-xs btn-warning'>Delete</button></td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;