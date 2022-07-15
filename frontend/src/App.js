import React from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Chat from './Components/chat/Chat';
import Join from './Components/join/Join';

const App = () => {
  return (
<>
<Router>
  <Routes>
    <Route path="/"  exact element={<Join/>}></Route>
    <Route path="/chat"  element={<Chat/>}></Route>

  </Routes>

</Router>

</>
  )
}

export default App