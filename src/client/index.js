import App from './components/app'
import rootReducer from './reducers'
import {createStore} from './store'
import ReactDOM from 'react-dom'

const store = createStore(rootReducer)

store.subscribe(renderUI)

renderUI()

function renderUI() {
  const vDOM = App(store.getState(), store)
  ReactDOM.render(vDOM, document.getElementById('root'))
}
