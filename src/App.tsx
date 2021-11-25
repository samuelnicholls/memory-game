import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import Game from './components/Game'

export default function App() {
  const GlobalStyles = createGlobalStyle
  `
    ${normalize}
    * {
      font-family: 'Poppins', sans-serif;
      box-sizing: border-box;
    }

    html, body {
      height: 100%;
      width: 100%;
    }
  `

  return (
    <>
      <GlobalStyles />
      <Game />
      <link
        href='https://fonts.googleapis.com/css?family=Poppins&display=swap'
        rel='stylesheet'
      />
    </>
  );
}
