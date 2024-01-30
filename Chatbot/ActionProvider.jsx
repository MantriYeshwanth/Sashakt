// ActionProvider.js
import './Chatbot.css';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage, stateRef, createCustomMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  greet() {
    const message = this.createChatBotMessage("Hello! How can I assist you today?", { classes: 'BotMessage' });
    this.addMessageToState(message);
  }

  farewell() {
    const message = this.createChatBotMessage("Goodbye! If you have more questions, feel free to ask.", { classes: 'BotMessage' });
    this.addMessageToState(message);
  }

  answerQuestion() {
    const message = this.createChatBotMessage("I'm here to help with your questions. What would you like to know?", { classes: 'BotMessage' });
    this.addMessageToState(message);
  }

  ola() {
    const message = this.createChatBotMessage("ola", { classes: 'BotMessage' });
    this.addMessageToState(message);
  }

  lalith() {
    const message = this.createChatBotMessage("Sudhamsh is gay", { classes: 'BotMessage' });
    this.addMessageToState(message);
  }

  handleUnrecognizedInput() {
    const message = this.createChatBotMessage("I'm not sure how to respond to that. Can you please rephrase your question?", { classes: 'BotMessage' });
    this.addMessageToState(message);
  }

  // Helper function to add the chatbot's message to the state
  addMessageToState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
