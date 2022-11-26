import React, { Component } from "react";
import axios from 'axios';
import "./ChatStyle.css";

import ChatWindow from "./ChatWindow";
import ChatComposer from "./ChatComposer";

let datos = ['Tengo un problema', 'No funciona mi producto', 'clave 9898', 'ok ya le mandare info mas adelante'];

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { text: "Disculpa me puedes ayudar" },
      ]
    };
  }

  // if new message was submitted from child component // process
  submitted = getNewMessage => {
    if (getNewMessage !== "") {
      // match the state format
      const newMessage = { text: getNewMessage };
      // merge new message in copy of state stored messages
      let updatedMessages = [...this.state.messages, newMessage];
      // update state
      this.setState({
        messages: updatedMessages
      });

      setTimeout(async() => {
        try {
            const message = await axios.get(`https://web-backend-tec.herokuapp.com/whatsapp`);
            console.log(message.data)
            let updatedMessages = [...this.state.messages, {text: message.data}];
            this.setState({
                messages: updatedMessages
            });

        } catch (e) {
            console.log(e)
        }
        let updatedMessages2 = [...this.state.messages, {text: datos[0]}];
        datos.shift();    
        // update state
        this.setState({
            messages: updatedMessages2
        });
      }, 2000)
    }
  };


  render() {
    return (
      <div className="Chat">
        <h1>Chat de ayuda</h1>
        {/* send stored messages as props to chat window */}
        <ChatWindow messagesList={this.state.messages} />
        {/* send submitted props to chat composer */}
        <ChatComposer submitted={this.submitted} />
      </div>
    );
  }
}
