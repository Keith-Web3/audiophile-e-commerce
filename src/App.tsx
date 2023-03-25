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
import Speakers from './components/pages/Speakers'
import ProductDetail from './components/shared/ProductDetail'
import data from './components/Data/data'
import PageNotFound from './components/pages/PageNotFound'

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
        <Route
          path="headphones/x992-mark-two"
          element={<ProductDetail {...data[0]} />}
        />
        <Route
          path="headphones/x992-mark-one"
          element={<ProductDetail {...data[1]} />}
        />
        <Route
          path="headphones/x59-headphone"
          element={<ProductDetail {...data[2]} />}
        />
        <Route
          path="speakers/zx9-speaker"
          element={<ProductDetail {...data[3]} />}
        />
        <Route
          path="speakers/zx7-speaker"
          element={<ProductDetail {...data[4]} />}
        />
        <Route
          path="earphones/yx1-earphone"
          element={<ProductDetail {...data[5]} />}
        />
      </Route>
    </Route>
  )
)
function App() {
  return <RouterProvider router={router} />
}

export default App
