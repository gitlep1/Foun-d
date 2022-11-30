import { useState } from "react";
import { Button, Card, Dropdown } from "react-bootstrap";
import './Conversations.scss'

const Conversation = ({allMessages, handleMessage, openConvo, setOpenConvo, conversation, index, currentRight}) => {
	const [message, setMessage] = useState({id: conversation.id, text: ''})
	// const [receivedMessage, setReceivedMessages] = useState([...allMessages])

	// console.log(receivedMessage)
	const handleTextChange = (event) => {
		setMessage({id: conversation.id, text: event.target.value})
	}
	
	const handleDelete = (conversation) => {
		let findConversation = openConvo.filter((convo) => conversation.id !== convo.id)
		setOpenConvo([...findConversation])
	}

  return (
		<Dropdown drop="up" id='user2-conversation' style={{right: `${currentRight * (index + 1)}em`}}align='end'>
		<Dropdown.Toggle variant="light">
			<img
					className="cardProfileImg"
					height={'50px'}
					width={'50px'}
					src={conversation.profileimg}
				/>
			<span id="user2-name-chat">{conversation.username}</span>
		</Dropdown.Toggle>
		<Dropdown.Menu>
		<section>
			<div id='delete-chat'>
				<div onClick={() => {handleDelete(conversation)}}>X</div>
			</div>
			<div id="chat-box-area">
				{allMessages.map((newMessage) => {
					if(newMessage.id === conversation.id){
						return <p id='message-received'><strong>{conversation.username}</strong>: {newMessage.message}</p>
					} else if (newMessage.id === 'self' && newMessage.to === conversation.username){
						return <div id='message-sent-container'><p id='message-sent'><strong>Self</strong>:{newMessage.message}</p></div>
					}
				})}
			</div>
			<div id="chat-input-area">
				<textarea  wrap='hard' cols='20' minlength='1' placeholder='Type message here...' value={message.text} onChange={handleTextChange}/>
				<a id='text-reset' href="#" onClick={() => setMessage({id: conversation.id, text: ''})}><Button variant='dark' onClick={() => handleMessage(conversation.username, message.text)}>Send</Button></a>
				{/* <img id='send-icon' height='100px' width='100px' src="https://thenounproject.com/api/private/icons/1323013/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjhV8gs4boIO3rbrCzp96FcVyKCgv4OvgrWlM63MGpu63Ke6eMrGfvWPsPpV03lkE3tMQDh0lxTMOFiLgOjHnQ7nFxlzAYrMqq9CaPl499HVWNbZ8%3D"/> */}
			</div>
		</section>
		</Dropdown.Menu>
	</Dropdown>
  );
};

export default Conversation;