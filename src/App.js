import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ContextProvider } from './redux/context';
import Home from './pages/Home'
import Posts from './pages/Posts'
import Albums from './pages/Albums'
import Photos from './pages/Photos'
import PageNotFound from './pages/PageNotFound'
import Header from "./components/Header";
import './App.css'

function App() {

  return (
    <ContextProvider>
      <div className="appWrapper">
        <BrowserRouter >
          <main className="appContainer">
            <Header />
            <div className="appContent">
              <Routes>
                <Route path='/users' element={<Home />} />
                <Route path='/users/:userIdPath/posts' element={<Posts />} />
                <Route path='/users/:userIdPath/albums' element={<Albums />} />
                <Route path='/users/:userIdPath/albums/:albumId/photos' element={<Photos />} />
                <Route path="/" element={<Navigate to="/users" />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
          </main>
        </BrowserRouter>
      </div>
    </ContextProvider>
  );
}

export default App;