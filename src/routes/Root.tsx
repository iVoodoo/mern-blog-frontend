import { Outlet } from 'react-router-dom'

import { Header } from '@components'

export const Root: React.FC = () => {
  return (
    <div className='container'>
      <Header />
      <div className='main-content'>
        <Outlet />
      </div>
    </div>
  )
}
