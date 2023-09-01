import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    //adicionando um evento à janela do navegador, executado quando o user alterar o tamanho da tela (resize)
    //quando isso acontecer vai ser disparada a funcao handleResize
    window.addEventListener('resize', handleResize)

    //ao usar um listener no useEffect, o indicado é limpá-lo ao fim do useEffect
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return width
}