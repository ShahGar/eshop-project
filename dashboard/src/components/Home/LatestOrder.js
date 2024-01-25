
import React from "react";
import { Link } from "react-router-dom";


const LatestOrder = (props) => {
  const { loading, error, orders } = props;
  return (
    <div className="card-body">
      <h4 className="card-title">New orders</h4>
        <div className="table-responsive">
          <table className="table">
            <tbody>
              {orders.slice(0, 5).map((order) => (
                <tr >
                  <td>
                    <b>User</b>
                  </td>
                  <td>user@gmail.com</td>
                  <td>$45</td>
                  <td>
                    
                      <span className="badge rounded-pill alert-success">
                        Paid At 10:12pm
                      </span>
                  
                      <span className="badge rounded-pill alert-danger">
                        Not Paid
                      </span>
                    
                  </td>
                  <td>today at 3:23</td>
                  <td className="d-flex justify-content-end align-item-center">
                    <Link to={`/order/`} className="text-success">
                      <i className="fas fa-eye"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
    </div>
  );
};

export default LatestOrder;
