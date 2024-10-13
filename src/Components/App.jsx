
import './App.css'
import Store from './Store'
import { products } from '../products'
import IconSwitch from './IconSwitch'
import { useState } from 'react'



function App() {
  const [icon, setIcon] = useState('view_module')

  function switchIcon() {
    setIcon(icon === 'view_list' ? 'view_module' : 'view_list')
  }

  return <div>
    <header>
      <IconSwitch icon={icon} onSwitch={switchIcon} />
    </header>
    <Store products={products} icon={icon} />
  </div>
}

export default App
