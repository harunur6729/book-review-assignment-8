import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import ErorrPage from './ErorrPage/ErorrPage.jsx';
import Home from './Home/Home.jsx';
import BookDetails from './BookDetails/BookDetails.jsx';
import ListedBooks from './ListedBooks/ListedBooks.jsx';
import WishlistBook from './WishlistBook/WishlistBook.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErorrPage></ErorrPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/book/:bookId',
        element:<BookDetails></BookDetails>,
        loader:() =>fetch('book.json')
      },
      {
        path:'/listedBooks',
        element:<ListedBooks></ListedBooks>,
        loader: () =>fetch('book.json'),
        children:[
          {
            path:'../wishlist',
            element:<WishlistBook></WishlistBook>

          }
        ]
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
