import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { useConversations } from '../../Context/ConversationsProvider';


function Conversation() {

    const {conversations,selectConversationIndex}=useConversations();
    return (
        <ListGroup variant="flush">
          {conversations.map((conversation, index) => (
            <ListGroup.Item
              key={index}
              action
              onClick={()=>selectConversationIndex(index)}
              active={conversation.selected}
            >
              {conversation.recipients.map(r => r.name).join(', ')}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )
}
export default Conversation
