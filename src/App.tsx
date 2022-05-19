import { FilmDetails } from "./components/FilmDetails";
import { FilmList } from "./components/FilmList";
import { Footer } from "./components/Footer";
import { HeaderContent } from "./components/HeaderContent";
import { HeaderLogo } from "./components/HeaderLogo";
import { GlobalStyle } from "./styles/Global";

export function App() {

  return (
    <>
      <HeaderLogo />
      {/* <FilmDetails /> */}

      <HeaderContent />
      <FilmList />
      <Footer />

      <GlobalStyle />
    </>  
  )
}
