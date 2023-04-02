//Импорт библиотек
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
//Импорт компонентов
import Chats from "./page/Chats";
import Settings from "./page/Settings";
import Dialog from "./page/Dialog";

export default function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/chats" element={<Chats />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dialog" element={<Dialog />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  max-width: 375px;
  margin: 0 auto;
`;