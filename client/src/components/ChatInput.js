import React, { Component } from 'react';

class ChatInput extends Component {
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.onSend(event.target.value);
      event.target.value = '';
    }
  }
  render() {
    const boxStyle = {
      boxShadow: '3px rgba(0, 0, 0, 0.3)'
    }
    return (
      <div className="box" style={boxStyle}>
        <p className="control">
          <input className="input" type="text" placeholder="Say something..."
            onKeyPress={this.handleKeyPress.bind(this)} />
        </p>
      </div>
    );
  }
}

export default ChatInput;
