import 'antd/lib/button/style'
import React from 'react'
import { render } from 'react-dom'
import DevTools from 'mobx-react-devtools'
import Nav from './modules/Nav'

render(
  <div>
    <h2>Hello World</h2>
    <Nav />
    <DevTools />
  </div>,
  document.getElementById('root')
)
