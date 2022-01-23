import React, { useContext, useEffect } from "react"
import { PlaygroundContext } from "./PlaygroundContext"
import demoSrcDoc from "./utils/demoSrcDoc"

const Preview = () => {
  const { srcDoc, setSrcDoc, html, css, js } = useContext(PlaygroundContext)

  if (html === "" && css === "" && js === "") {
    setSrcDoc(demoSrcDoc)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `<html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
            </html>`
      )
    }, 250)
    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <div className="w-full h-full">
      <iframe
        srcDoc={srcDoc}
        title="preview"
        width="100%"
        height="100%"
        scripts="allow-scripts"
      ></iframe>
    </div>
  )
}

export default Preview
