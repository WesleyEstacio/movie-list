import { HeaderContent } from "./components/HeaderContent";
import { HeaderLogo } from "./components/HeaderLogo";
import { GlobalStyle } from "./styles/Global";

export function App() {

  return (
    <>
      <HeaderLogo />
      <HeaderContent />

      <GlobalStyle />
    </>  
  )
}
