const socket=io();

const ClientsTotal=document.getElementById('client-total');

const messageContainer=document.getElementById('message-container');
const nameInput=document.getElementById('name-input');
const messageForm=document.getElementById('message-form');
const messageInput=document.getElementById('message-input');
const messageTone=new Audio('iphone_text_message.mp3');
// const messageSendTone=new Audio('iphone_send_sms.mp3');
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMessage()
})
socket.on('clients-total', (data) => {
    ClientsTotal.innerText=`Total clients ${data}`;
})

function sendMessage(){
    if(messageInput.value==='')return 
    // console.log(messageInput.value);
    console.log("send message playing....");
    // messageSendTone.play();
    const data={
        name:nameInput.value,
        message:messageInput.value,
        dateTime:new Date()
    }
    socket.emit('message', data);
    addMessage(true,data);
    messageInput.value="";
}


socket.on('chat-message', (data) => {
    messageTone.play();
    // console.log(data);
    addMessage(false,data);
    // appendMessage(`${data.name}: ${data.message}`);
})

function addMessage(isOwnmsg,data){
    clearFeedbackmsg();
        const element=`<li class="${isOwnmsg ? "message-right" : "message-left"}">
        <p class="message">${data.message}
            <span>${data.name}⚫️ ${moment(data.dateTime).fromNow()} </span>
            </span>
        </p>
    </li>`
    messageContainer.innerHTML+=element;
    scrolltoBottom();
}


function scrolltoBottom(){
    messageContainer.scrollTo(0, messageContainer.scrollHeight);
}

messageInput.addEventListener('focus', (e) => {
    socket.emit('feedback', {
        feedback: `✍🏻${nameInput.value} is typing a message`
    })
})
messageInput.addEventListener('keypress', (e) => {
    socket.emit('feedback', {
        feedback: `✍🏻${nameInput.value} is typing a message`
    })
})
messageInput.addEventListener('blur', (e) => {
    socket.emit('feedback', {
        feedback: ''
    })
})

socket.on('feedback', (data) => {
    clearFeedbackmsg();
    const element=`<li class="message-feedback">
                <p class="feedback" id="feedback">${data.feedback}
                 </p>   
                </li>`
messageContainer.innerHTML+=element;
    
})

function clearFeedbackmsg(){
    document.querySelectorAll('li.message-feedback').forEach(element => {
        element.parentNode.removeChild(element);
    });
}