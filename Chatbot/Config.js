// config.js
import { createChatBotMessage } from "react-chatbot-kit";
import './Chatbot.css';

const config = {
  initialMessages: [createChatBotMessage(`Hello Ma'am`, { classes: 'BotMessage' })],
}

export default config;
