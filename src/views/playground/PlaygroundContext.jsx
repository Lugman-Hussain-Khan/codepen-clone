import { createContext, useState } from "react"

export const PlaygroundContext = createContext()

const PlyagroundContextProvider = ({ children }) => {
  const [html, setHtml] = useState("")
  const [css, setCss] = useState("")
  const [js, setJs] = useState("")

  const [srcDoc, setSrcDoc] = useState("")

  const value = {
    html,
    setHtml,
    css,
    setCss,
    js,
    setJs,
    srcDoc,
    setSrcDoc,
  }

  return (
    <PlaygroundContext.Provider value={value}>
      {children}
    </PlaygroundContext.Provider>
  )
}

export default PlyagroundContextProvider
