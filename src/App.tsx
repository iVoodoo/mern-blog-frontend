import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { store } from '@reduxStore'
import { router } from '@routes'

const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)

export default App
