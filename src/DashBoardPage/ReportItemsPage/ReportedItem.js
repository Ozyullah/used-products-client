import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ReportedTable from './ReportedTable';

const ReportedItem = () => {

    const {data: items =[], refetch}=useQuery(
        {
            queryKey: ['reportedData'],
            queryFn: async()=>{
                const res =await fetch(`https://used-products-server-gold.vercel.app/reportedData?role=reported`);
                const data =await res.json();
                console.log(data)
                return data;
            }
        }
    )

    return (
        <div className="overflow-x-auto w-full">
  <table className="table w-full">

    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Seller information</th>
        <th></th>
      </tr>
    </thead>
    {
        items.map(item =><ReportedTable
        key={item._id}
        item={item}
        refetch={refetch}
        ></ReportedTable>)
    }
    
  </table>
</div>
    );
};

export default ReportedItem;