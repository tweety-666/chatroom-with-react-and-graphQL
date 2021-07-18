import { ApolloProvider } from '@apollo/client';
import React, { Component } from 'react';
import { getLoggedInUser, logout } from './auth';
import client from './api/client';
import Chat from './components/Chat';
import Login from './components/Login';
import NavBar from './components/NavBar';

class App extends Component {
  state = { user: getLoggedInUser() };

  handleLogin(user) {
    this.setState({ user });
  }

  handleLogout() {
    logout();
    this.setState({ user: null });
  }

  render() {
    const { user } = this.state;
    if (!user) {
      return <Login onLogin={this.handleLogin.bind(this)} />;
    }
    return (
      <ApolloProvider client={client}>
        <NavBar onLogout={this.handleLogout.bind(this)} />
        <Chat user={user} />
      </ApolloProvider>
    );
  }
}

export default App;
