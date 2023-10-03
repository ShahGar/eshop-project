import React from "react";

const Orders = () => {
  return (
    // <div className=" d-flex justify-content-center align-items-center flex-column">
    //   {loading ? (
    //     <Loading />
    //   ) : error ? (
    //     <Message variant="alert-danger">{error}</Message>
    //   ) : (
    //     <>
    //       {orders.length === 0 ? (
    //         <div className="col-12 alert alert-info text-center mt-3">
    //           No Orders
    //           <Link
    //             className="btn btn-success mx-2 px-3 py-2"
    //             to="/"
    //             style={{
    //               fontSize: "12px",
    //             }}
    //           >
    //             START SHOPPING
    //           </Link>
    //         </div>
    //       ) : (
      <div className=" d-flex justify-content-center align-items-center flex-column">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>STATUS</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                 
                    <tr classname={"alert-success"}>
                      <td>
                        <a href ={`/`} className="link">
                          1
                        </a>
                      </td>
                      <td>Paid</td>
                      <td>Dec 12 2021</td>
                      <td>$234</td>
                    </tr>
                    {/*cancelled*/}
                    <tr classname={"alert-danger"}>
                      <td>
                        <a href ={`/`} className="link">
                          2
                        </a>
                      </td>
                      <td>Not Paid</td>
                      <td>Dec 12 2021</td>
                      <td>$234</td>
                    </tr>
                </tbody>
              </table>
            </div>
    </div>
  );
};

export default Orders;
