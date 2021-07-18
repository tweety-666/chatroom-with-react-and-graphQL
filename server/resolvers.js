const { PubSub } = require('graphql-subscriptions');
const db = require('./db');
const pubSub = new PubSub();
// 判斷有無權限 假判斷
function isAuthorized(userId) {
  if (!userId) {
    throw new Error('Unauthorized');
  }
}

// query
const Query = {
  messages: (_root, _args, { userId }) => {
    isAuthorized(userId);
    return db.messages.list();
  }
};

// mutation
const Mutation = {
  addMessage: (_root, { input }, { userId }) => {
    isAuthorized(userId);
    const messageId = db.messages.create({ from: userId, text: input.text });
    const message = db.messages.get(messageId);
    pubSub.publish("MESSAGE_ADDED", { messageAdded: message });
    return message;
  }
};

// subscription
const Subscription = {
  messageAdded: {
    subscribe: (_root, _args, { userId }) => {
      isAuthorized(userId);
      return pubSub.asyncIterator("MESSAGE_ADDED");
    }
  }
};

module.exports = { Query, Mutation, Subscription };
