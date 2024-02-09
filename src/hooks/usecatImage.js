import { useEffect, useState } from "react";

 export function useCatImage ({ fact }) {
    const [imageUrl, setImageUrl] = useState()
  
    //Para recuperar la imagen acda vez que tenemos una cita nueva
  
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ');
      console.log(threeFirstWords);
  
      fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`)
      .then(response => {
        return response.blob();
      })
      .then(blob => {
        const imageUrl = URL.createObjectURL(blob);
        setImageUrl(imageUrl);
      })
  }, [fact])
  
  return { imageUrl }
  
  }