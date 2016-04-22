import App from './components/app'
import state from './initial-state'
import ReactDOM from 'react-dom'

const vDOM = App(state)

ReactDOM.render(vDOM, document.getElementById('root'))
