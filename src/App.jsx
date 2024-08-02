import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePae from './Pages/HomePae'

function App() {
 const route = createBrowserRouter (
  createRoutesFromElements (
    <Route>
      <Route path='/' element={<HomePae/>}/>
    </Route>
  )
 )

  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App
