import { FilmDetails } from "./components/FilmDetails";
import { FilmList } from "./components/FilmList";
import { FilmsContext, FilmsProvider } from "./FilmsContext";
import { Footer } from "./components/Footer";
import { HeaderContent } from "./components/HeaderContent";
import { HeaderLogo } from "./components/HeaderLogo";
import { GlobalStyle } from "./styles/Global";
import { useState } from "react";

export function App() {

  const [isOpenDetails, setIsOpenDetails] = useState(false);

  function handleOpenFilmDetail(){
    setIsOpenDetails(true)
  }

  function handleCloseFilmDetail(){
    setIsOpenDetails(false)
  }

  return (
    <FilmsProvider>
      <HeaderLogo onCloseFilmDetail={handleCloseFilmDetail}/>
        
      <HeaderContent />
      <FilmList 
        onOpenFilmDetail={handleOpenFilmDetail}
        isOpenDetail={isOpenDetails}
      />
      <Footer />
        

      <GlobalStyle />
    </FilmsProvider>  
  )
}
