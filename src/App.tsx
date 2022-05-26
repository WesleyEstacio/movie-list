import { useState } from "react";
import { Footer } from "./components/Footer";
import { HeaderContent } from "./components/HeaderContent";
import { HeaderLogo } from "./components/HeaderLogo";
import { MovieList } from "./components/MovieList";
import { MoviesProvider } from "./MoviesContext";
import { GlobalStyle } from "./styles/Global";

export function App() {

  const [isOpenDetails, setIsOpenDetails] = useState(false);

  function handleOpenMovieDetail(){
    setIsOpenDetails(true)
  }

  function handleCloseMovieDetail(){
    setIsOpenDetails(false)
  }

  return (
    <MoviesProvider>
      <HeaderLogo onCloseMovieDetail={handleCloseMovieDetail}/>

      {!isOpenDetails 
        ?
        <HeaderContent />
        :
        <></>
      }
      <MovieList 
        onOpenMovieDetail={handleOpenMovieDetail}
        isOpenDetail={isOpenDetails}
      />

      {!isOpenDetails 
        ?
        <Footer />
        :
        <></>
      }
      
        
      <GlobalStyle />
    </MoviesProvider>  
  )
}
