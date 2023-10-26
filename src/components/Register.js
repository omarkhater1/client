import React, { Fragment, useState } from "react";

const Register = ({register}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
          const body = {
            username,
            password
          };
          const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(body)
          });
      
          window.location = "/customer";
        } catch (err) {
          console.error(err.message);   
        }
      }

    return(
        <Fragment>
          <div className="text-center">
                <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#newRegistration"
        >
          Sign Up
        </button>
            </div>
            

        <div className="modal" id="newRegistration">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="text-center modal-title">Register</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setUsername(username);
                    setPassword(password)
                  }}
                ></button>
              </div>

              <div className="modal-body">

                <small className="text-muted h6">Username</small>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <small className="text-muted h6">Password</small>
                <input
                  type="text"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <small className="text-muted h6">Confirm password</small>
                <input
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={e => onSubmitForm(e)}>
                    Add
                </button>
                <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close</button>
               </div>

              </div>
          </div>
        </div>
            
        </Fragment>
    );
};

export default Register;