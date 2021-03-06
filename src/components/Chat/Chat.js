import React, { Component } from 'react';
import { firebase } from '../../fire';

class Chat extends Component {
  state = {
    messages: [],
    message: ''
  };

  componentDidMount() {
    let messagesRef = firebase
      .database()
      .ref('messages')
      .orderByKey()
      .limitToLast(100);
    messagesRef.on('value', snapshot => {
      if (snapshot.val()) {
        this.setState({
          messages: [
            ...Object.keys(snapshot.val()).map(key => ({
              id: key,
              text: snapshot.val()[key]
            }))
          ]
        });
      } else {
        this.setState({ messages: [] });
      }
    });
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    if (this.state.message) {
      firebase
        .database()
        .ref('messages')
        .push(this.state.message);
      this.setState({ message: '' });
    }
  };

  onDeleteHandler = key => {
    firebase
      .database()
      .ref(`messages/${key}`)
      .remove();
  };

  render() {
    const { messages, message } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input
            autoFocus
            value={message}
            name="message"
            type="text"
            onChange={this.onChangeHandler}
          />
        </form>
        {messages[0] &&
          messages.map(message => {
            return (
              <div
                key={message.id}
                onClick={() => this.onDeleteHandler(message.id)}
              >
                <p>{message.text}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Chat;
