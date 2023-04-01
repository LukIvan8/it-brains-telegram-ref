import {BrowserRouter, Route, Routes} from 'react-router-dom';

import styled from 'styled-components';
import Chats from './Chats';
import Settings from './Settings';
import Messenger from './Messenger';
import "./styles.css"

export default function App() {
    return (
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route path="/chats" element={<Chats/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/messenger" element={<Messenger/>}/>
                </Routes>
            </BrowserRouter>
        </Container>

    );
}

const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;
`;