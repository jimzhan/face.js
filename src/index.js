import 'antd/lib/button/style'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import DevTools from 'mobx-react-devtools'
import Nav from './modules/Nav'

const historyEnabled = 'pushState' in window.history

ReactDOM.render(
  <HashRouter forceRefresh={!historyEnabled} keyLength={12}>
    <div>
      <Nav />
      <DevTools />
    </div>
  </HashRouter>,
  document.getElementById('root')
)
