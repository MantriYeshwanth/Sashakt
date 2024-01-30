// MessageParser.js
import './Chatbot.css';

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowercaseMessage = message.toLowerCase();

    if (lowercaseMessage.includes("hello")) {
      // If the user says "hello," trigger a greeting action.
      this.actionProvider.greet();
    } else if (lowercaseMessage.includes("goodbye")) {
      // If the user says "goodbye," trigger a farewell action.
      this.actionProvider.farewell();
    } else if (lowercaseMessage.includes("question")) {
      // If the user asks a question, trigger a question-answering action.
      this.actionProvider.answerQuestion();
    } else if (lowercaseMessage.includes("Sudhamsh")) {
      this.actionProvider.lalith();
    } else {
      // Handle unrecognized input.
      this.actionProvider.handleUnrecognizedInput();
    }
  }
}

export default MessageParser;
