import React from 'react'
import { render } from 'react-dom'
import DevTools from 'mobx-react-devtools'

render(
  <div>
    <h2>Hello World</h2>
    <DevTools />
  </div>,
  document.getElementById('root')
)
