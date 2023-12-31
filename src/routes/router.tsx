import { createBrowserRouter } from 'react-router-dom'

import { ErrorPage, LoginPage, MainPage, NewPostPage, RegisterPage, SinglePostPage } from '@pages'

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
            path: '/tag/:tag',
            element: <MainPage />
          },
          {
            path: '/post/:id',
            element: <SinglePostPage />
          },
          {
            path: '/post/:id/edit',
            element: <NewPostPage />
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
            path: '/post/new',
            element: <NewPostPage />
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
