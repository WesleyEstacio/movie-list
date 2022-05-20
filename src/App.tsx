import { FilmDetails } from "./components/FilmDetails";
import { FilmList } from "./components/FilmList";
import { FilmsContext, FilmsProvider } from "./FilmsContext";
import { Footer } from "./components/Footer";
import { HeaderContent } from "./components/HeaderContent";
import { HeaderLogo } from "./components/HeaderLogo";
import { GlobalStyle } from "./styles/Global";
import { useContext, useState } from "react";

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

      {!isOpenDetails 
      ? 
        <>
          <HeaderContent />
          <FilmList 
            onOpenFilmDetail={handleOpenFilmDetail}
          />
          <Footer />
        </>
      :
        <FilmDetails />
      }

      

      

      <GlobalStyle />
    </FilmsProvider>  
  )
}
