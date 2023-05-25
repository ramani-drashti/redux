import React from 'react'
import { Card, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react'
// import Field from 'react-redux'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userData from '../user.json'
import { log_in } from '../Redux/Alert_Action/user_action'
// import Swal from 'sweetalert2';

function Login() {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  let data1 = useSelector((state) => state)
  const [Email, setEmail] = useState('');

  const [password, setpassword] = useState('');
  const [error, seterror] = useState('');
  
  const initialvalues = {
      email:"",
      password:""
  
}
const handelsubmitting = (e) => {
  e.preventDefault();
  let login = userData.user.find((data => data.email === Email && data.password === password));
  // console.warn('Email:', Email);
  let data="data check"
  // console.warn("data check",data);
    if (login) {
      alert('Login successfully', '', 'success')
            // { () => dispatch(log_in(userData))}
      dispatch(log_in(login));
      navigate('/home')
    } else {
      setEmail('');
      setpassword('');
      alert('Invalid Input', '', 'error')
    }
  }



console.warn('Email', Email);
return (
  <>
    <Container style={{ margin: "5%", padding: "30px", justifyContent: 'center', display: 'flex', marginTop: '11%' }}>
      <Card style={{ width: '20%' }}>
        <Card.Header>log in </Card.Header>
        <Form style={{ margin: '20px' }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={e => {
                setEmail(e.target.value);
              }}
              value={Email}
              required
            //  className="form-control" 
            //  id="email" 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
              placeholder="Password"
              onChange={e => {
                setpassword(e.target.value);
              }}
              value={password}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handelsubmitting}>
            {/* () => dispatch(log_in(userData))}> */}                                        

            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  </>
)
}

export default Login