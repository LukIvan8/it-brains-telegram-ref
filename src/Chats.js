import React from "react";
import Layout from "./component/Layout";
import ChatList from "./component/ChatList";
import cat from "./assets/image/cat.jpg";
import pc from "./assets/image/pc.jpg";

const CHAT_LIST = [
  {
    key: 1,
    image: cat,
    name: "Cat Catov",
    lastMessage: "meow meow meow",
    time: "10:00",
    description: "kotik",
    hashtag:"#catforeva",
    newMessages: "23",
    isMuted:true
  },
  {
    key: 2,
    image: pc,
    name: "Your PC",
    lastMessage: "beeb beeb boop beep",
    time: "19:12",
    newMessages: "",
    isSent: true,
  }
];

const Chats = () => {
  return (
    <Layout page="chats">
      <ChatList list={CHAT_LIST} />
    </Layout>
  );
};

export default Chats;
