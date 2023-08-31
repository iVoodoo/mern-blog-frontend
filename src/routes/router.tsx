import { createBrowserRouter } from 'react-router-dom'

import { AllPostsPage, ErrorPage, SinglePostPage } from '@pages'

import { Root } from './Root'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <AllPostsPage />
          },
          {
            path: '/post/:id',
            element: <SinglePostPage />
          },
          {
            path: '*',
            element: <ErrorPage />
          }
        ]
      }
    ]
  }
])
