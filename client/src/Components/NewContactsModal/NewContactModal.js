import React, {useRef} from 'react'
import  {Modal,Form,Button} from "react-bootstrap"
import { useContacts} from '../../Context/ContactsProvider'

function NewContactModal({closeModal}) {

const idRef=useRef();
const nameRef=useRef();
const { createContact } = useContacts();

function handelSubmit(e){
    e.preventDefault();

    createContact(idRef.current.value,nameRef.current.value);
    closeModal();

}

    return (
        <>
            <Modal.Header closeButton>
                Create Contact
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handelSubmit}>
                    <Form.Group>
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" ref={idRef} required />
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} required />

                    </Form.Group>
                    <Button type="submit">Create</Button>
                </Form>

            </Modal.Body>
        </>
    )
}

export default NewContactModal
