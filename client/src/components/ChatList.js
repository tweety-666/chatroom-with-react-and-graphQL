import React, { Component } from 'react';

class ChatList extends Component {
  boxRef = React.createRef();

  componentDidUpdate() {
    const box = this.boxRef.current;
    box.scrollTo(0, box.scrollHeight);
  }

  render() {
    const boxStyle = {
      boxShadow: '3px rgba(0, 0, 0, 0.5)'
    }
    const { messages } = this.props;
    return (
      <div ref={this.boxRef} className="box" style={{ height: '50vh', overflowY: 'scroll' }, boxStyle}>
        <table>
          <tbody>
            {messages.map(this.renderMessage.bind(this))}
          </tbody>
        </table>
      </div>
    );
  }

  renderMessage(message) {
    const { user } = this.props;
    let tag = 'tag';
    if (message.from === user) {
      tag += ' is-primary';
    }
    const chatListStyle = {
      margin: "5px 0px",
      display: "flex"
    };
    return (
      <div key={message.id} style={chatListStyle}>
        <div><span className={tag}>{message.from}</span></div>
        <div style={{ paddingLeft: '0.75em' }}>{message.text}</div>
      </div>
    )
  }
}

export default ChatList;
