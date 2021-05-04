import React,{useRef} from 'react'
import { Container ,Form, Button} from 'react-bootstrap';

import {v4 as uuidv4} from 'uuid'

function Login({onIdSubmit}) {


    const idRef=useRef();

    function handelSubmit(e){
        e.preventDefault();
        onIdSubmit(idRef.current.value);

    }

    function createNewId(){
        onIdSubmit(uuidv4())
    }


    return (
        <Container className="align-items-center d-flex" style={{height:'100vh'}}>
            <Form onSubmit={handelSubmit} className='w-100'>
                <Form.Group>
                    <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control type="text" ref={idRef} required></Form.Control>

                </Form.Group>
                <Button type="submit" className="mr-2"> Login</Button>
                <Button variant="secondary" onClick={createNewId} > Create New Id</Button>
            </Form>
        </Container>
    )
}

export default Login
