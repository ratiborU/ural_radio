import { useState} from 'react'
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
import Issuepage from './pages/Issuepage';
import Articlepage from './pages/Articlepage';

import Adminpahe from './pages/Adminpahe';

import { IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/locales'
import { messages } from './i18n/messages'


function App() {
  const locale = LOCALES.ENGLISH;
  const [currentLocale, setCurrentLocale] = useState(locale);
  const handleChange = (language) => {
    setCurrentLocale(language);
  };

  return (
    <>
      <IntlProvider messages={messages[currentLocale]} locale={currentLocale} defaultLocale={LOCALES.ENGLISH}>
        <Routes>
          <Route path="/" element={<Layout currentLocale={currentLocale} handleChange={handleChange}/>}>
            <Route index element={<Mainpage/>} />
            <Route path="catalog" element={<Catalogpage currentLocale={currentLocale}/>} />
            <Route path="catalog/:id" element={<Issuepage currentLocale={currentLocale}/>} />
            <Route path="catalog/article/:id" element={<Articlepage currentLocale={currentLocale}/>} />
            <Route path="editors" element={<Editorspage currentLocale={currentLocale}/>} />
            <Route path="editors/:id" element={<Editorpage currentLocale={currentLocale}/>} />
            <Route path="contacts" element={<Contactspage/>} />
            <Route path="authors" element={<ForAuthorspage/>} />
            <Route path="*" element={<Notfoundpage/>} />
          </Route>
        </Routes>
      </IntlProvider>
    </>
  )
}

export default App
