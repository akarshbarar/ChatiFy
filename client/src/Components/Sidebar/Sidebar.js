import React, { useState } from 'react'
import {Tab,Nav,Button,Modal} from 'react-bootstrap'
import Contacts from '../Contacts/Contacts';
import Conversation from '../Conversation/Conversation';
import NewConversationModal from '../NewConversationModal/NewConversationModal.js';
import NewContactModal from '../NewContactsModal/NewContactModal.js';

const CONVERSATION='conversatio';
const CONTACTS='contacts';

function Sidebar({id}) {

    const [activeKey, setactiveKey] = useState(CONVERSATION);
    const [modalOpen, setModalOpen]= useState(false);

    const conversationOpen =activeKey === CONVERSATION

    function closeModal(){
        setModalOpen(false);
    }

    return (
        <div style={{width:'250px'}} className="d-flex flex-column">
            <Tab.Container activeKey={activeKey} onSelect={setactiveKey}>
                <Nav variant='tabs' className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATION}>
                            Converstation
                         </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS}>
                            Contacts
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

            <Tab.Content className="border-right overflow-auto flex-grow-1">
                <Tab.Pane eventKey={CONVERSATION}>
                    <Conversation/>
                </Tab.Pane>

                <Tab.Pane eventKey={CONTACTS}>
                    <Contacts/>
                </Tab.Pane>
            </Tab.Content>
            <div className="p-2 border-top border-right small">
                Your Id : <span className="text-muted">{id}</span>
            </div>
            <Button onClick={()=>setModalOpen(true)} className="rounded=0">
                New {conversationOpen ? 'Conversation' : 'Contact'}
            </Button>
            </Tab.Container>

            <Modal show={modalOpen} onHide={closeModal}>
                {
                    conversationOpen
                    ? <NewConversationModal closeModal={closeModal}/>
                    : <NewContactModal closeModal={closeModal}/>
                }
            </Modal>
        </div>
    )
}

export default Sidebar
