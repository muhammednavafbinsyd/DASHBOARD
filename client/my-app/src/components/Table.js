import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';


const TableComponent = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    apiService.getTableData().then((data) => {
      console.log(data)
      setTableData(data);
    });
  }, []);

  return (
    <div className="col-lg-8 col-md-12">
    <div className="card" style={{ minHeight: 400 }}>
      
      <div className="card-content table-responsive">
        <table className="table table-hover">
          <thead className="text-primary">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
              {tableData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
    </div>
  </div>


  );
};

export default TableComponent;
