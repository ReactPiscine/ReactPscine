import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle, Theme } from './styles'
import { ThemeProvider } from 'styled-components'
import Page from './pages'

const App:React.FC = () => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Page />
        </ThemeProvider>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
