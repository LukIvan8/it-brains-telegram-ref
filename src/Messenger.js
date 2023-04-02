import React from "react";
import Layout from "./component/Layout";
import MessageList from "./component/MessageList";

const MESSAGE_LIST = [
  { text: "Hello!", time: "10:00", isYou: false },
  {
    text: "You can write here and message will appear! Right now only from one side(",
    time: "10:00",
    isYou: false,
  },
];

export default function Messenger() {
  return (
    <Layout page="messenger">
      <MessageList list={MESSAGE_LIST}/>
    </Layout>
  );
};



