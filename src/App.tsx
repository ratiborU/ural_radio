// import { useState} from 'react'
import { Routes, Route } from 'react-router-dom';

// import Homepage from './pages/Homepage';
// import Aboutpage from './pages/Aboutpage';
// import Blogpage from './pages/Blogpage';
import Notfoundpage from './pages/Notfoundpage';
import Layout from './conponents/Layout';

import Mainpage from './pages/Mainpage';
import Catalogpage from './pages/Catalogpage';
import Editorspage from './pages/Editorspage';
import Contactspage from './pages/Contactspage';
import ForAuthorspage from './pages/ForAuthorspage';
import Editorpage from './pages/Editorpage';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Mainpage/>} />
          <Route path="catalog" element={<Catalogpage/>} />
          <Route path="editors" element={<Editorspage/>} />
          <Route path="editors/:id" element={<Editorpage/>} />
          <Route path="contacts" element={<Contactspage/>} />
          <Route path="authors" element={<ForAuthorspage/>} />
          <Route path="*" element={<Notfoundpage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
