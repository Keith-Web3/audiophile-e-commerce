import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import HomeLayout from './components/Layouts/HomeLayout'
import Homepage from './components/pages/Homepage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Homepage />} />
    </Route>
  )
)
function App() {
  return <RouterProvider router={router} />
}

export default App
