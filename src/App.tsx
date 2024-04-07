import { Routes, Route } from 'react-router-dom';

import Notfoundpage from './pages/Notfoundpage';
import Layout from './components/Layout';

import Mainpage from './pages/Mainpage';
import Catalogpage from './pages/Catalogpage';
import Editorspage from './pages/Editorspage';
import Contactspage from './pages/Contactspage';
import ForAuthorspage from './pages/ForAuthorspage';
import Editorpage from './pages/Editorpage';
import Issuepage from './pages/Issuepage';
import Articlepage from './pages/Articlepage';

import { QueryClient, QueryClientProvider } from 'react-query';
import LanguageContextProvider from './i18n/languageContext';


const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <LanguageContextProvider>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Mainpage/>} />
                <Route path="catalog" element={<Catalogpage/>} />
                <Route path="catalog/:id" element={<Issuepage/>} />
                <Route path="catalog/article/:id" element={<Articlepage/>} />
                <Route path="editors" element={<Editorspage/>} />
                <Route path="editors/:id" element={<Editorpage/>} />
                <Route path="contacts" element={<Contactspage/>} />
                <Route path="authors" element={<ForAuthorspage/>} />
                <Route path="*" element={<Notfoundpage/>} />
              </Route>
            </Routes>
        </LanguageContextProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
