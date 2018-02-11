import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class Register extends Component{
    onSave(){
        const { name, phone, shift } = this.props;
        shift : shift || 'Monday';
        console.log(shift);
        this.props.employeeCreate({ name, phone, shift});
      }
    render(){
        return (
            <div>
                <h2>Register Page</h2>
            </div>
        );
    }
}

/*
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
  };

export default connect(mapStateToProps, {
    employeeUpdate,
    employeeCreate })
    (EmployeeCreate);
*/

export default Register;