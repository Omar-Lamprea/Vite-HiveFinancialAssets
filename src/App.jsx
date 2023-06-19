import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
// import { useContextGlobal } from './context/global.context'

function App() {
  // const {state} = useContextGlobal()
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )
  return (
      <RouterProvider router={router} />
  );
}

export default App
