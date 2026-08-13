import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Movies from './pages/Movies'
import TVSeries from './pages/TVSeries'
import Bookmarked from './pages/Bookmarked'
import { BookmarksProvider } from './context/BookmarksContext'

export default function App() {
  return (
    <BookmarksProvider>
      <BrowserRouter>
        <div className="flex flex-col lg:flex-row min-h-screen bg-darkBlue">
          <Sidebar />
          <main className="flex-1 px-5 py-6 lg:px-12 lg:py-10 max-w-[1400px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tv-series" element={<TVSeries />} />
              <Route path="/bookmarked" element={<Bookmarked />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </BookmarksProvider>
  )
}
