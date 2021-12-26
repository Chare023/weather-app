import React from "react";
import'./form.style.css';

const Form = props => {
  return(
    <div className="container">
      <div>{props.error ? error(props.error_msg) : null}</div>

      <form onSubmit={props.loadweather}>
        <div className="row">
          
          <div className="col-md-3 offset-3">
            <input 
            type="text" 
            className="form-control" 
            name="city" 
            autoComplete="off" 
            placeholder="City"
            />
          </div>

          <div className="col-md-6 mt-md-0 py-2 text-md-left">
            <button className="btn btn-info">Get Weather</button>
          </div>

        </div>
      </form>
    </div>
  );
};

function error(msg){
  return(
    <div className="alert alert-danger mx-5" role="alert">
      {msg}
    </div>
  )
};

export default Form;