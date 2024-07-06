import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const username=" Saumya"

const reactElement = React.createElement(
  'a',
  {href:'https://example.com', target:'_blank'},
  'click me',
    username
  
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement
     
 
)
