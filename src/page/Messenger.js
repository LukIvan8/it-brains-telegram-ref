// Импорт компонентов
import Layout from "../component/Layout";
import MessageList from "../component/MessageList";

const MESSAGE_LIST = [
  { text: "Hello!", time: "10:00", isYou: false },
  {
    text: "You can write here and message will appear! Right now only from one side(",
    time: "10:00",
    isYou: false,
  },
  {
    text: "Hello!",
    time: "11:00",
    isYou: false,
    isUnderline: true,
    isCrossed: false,
    isBlue: false,
    hasBackground: false,
  },
  {
    text: "Hello!",
    time: "12:00",
    isYou: false,
    isUnderline: false,
    isCrossed: true,
    isBlue: false,
    hasBackground: false,
  },
  {
    text: "Hello!",
    time: "13:00",
    isYou: false,
    isUnderline: false,
    isCrossed: false,
    isBlue: true,
    hasBackground: false,
  },
  {
    text: "Hello!",
    time: "14:00",
    isYou: false,
    isUnderline: false,
    isCrossed: false,
    isBlue: false,
    hasBackground: true,
  },
];

export default function Messenger() {
  return (
    <Layout page="messenger">
      <MessageList list={MESSAGE_LIST}/>
    </Layout>
  );
};



