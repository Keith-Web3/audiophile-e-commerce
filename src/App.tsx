import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import HomeLayout from './components/Layouts/HomeLayout'
import ProductDetailsLayout from './components/Layouts/ProductDetailsLayout'
import CategoryLayout from './components/Layouts/CategoryLayout'
import EarPhones from './components/pages/EarPhones'
import HeadPhones from './components/pages/HeadPhones'
import Homepage from './components/pages/Homepage'
import ProductDetailH1 from './components/pages/ProductDetailH1'
import Speakers from './components/pages/Speakers'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Homepage />} />
      <Route element={<CategoryLayout />}>
        <Route path="speakers" element={<Speakers />} />
        <Route path="headphones" element={<HeadPhones />} />
        <Route path="earphones" element={<EarPhones />} />
      </Route>
      <Route element={<ProductDetailsLayout />}>
        <Route path="xx99" element={<ProductDetailH1 />} />
      </Route>
    </Route>
  )
)
function App() {
  return <RouterProvider router={router} />
}

export default App
