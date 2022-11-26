import React, { Component } from "react";
import axios from 'axios';
import "./ChatStyle.css";

import ChatWindow from "./ChatWindow";
import ChatComposer from "./ChatComposer";

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
            const message = await axios.get(`https://web-backend-tec.herokuapp.com/checklogin?email=bob2@mail.com&password=bob`,[]);
            const message2 = await axios.get(`https://web-backend-tec.herokuapp.com/whatsapp`,[]);
            console.log(message2);
            let updatedMessages = [...this.state.messages, {text:"HIHIHA SOY FALSO"}];
            this.setState({
                messages: updatedMessages
            });
            console.log(message)

        } catch (e) {
            console.log(e)
        }
        let updatedMessage2 = [...this.state.messages, {text:"HIHIHA SOY FALSO"}];
        // update state
        this.setState({
            messages: updatedMessage2
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
