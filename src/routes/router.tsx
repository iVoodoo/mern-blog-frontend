import { createBrowserRouter } from 'react-router-dom'

import { ErrorPage, LoginPage, MainPage, RegisterPage, SinglePostPage } from '@pages'

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
            element: <MainPage />
          },
          {
            path: '/post/:id',
            element: <SinglePostPage />
          },
          {
            path: '/login',
            element: <LoginPage />
          },
          {
            path: '/register',
            element: <RegisterPage />
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
