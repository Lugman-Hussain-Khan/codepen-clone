import React, { useContext, useEffect, useRef } from "react"
import { PlaygroundContext } from "./PlaygroundContext"

const Preview = () => {
  const { srcDoc, html, css, js } = useContext(PlaygroundContext)

  const previewWrapper = useRef(null)

  const generateSrcdoc = () => {
    return `<html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        </html>`
  }

  const onChnage = () => {
    const iframe = document.createElement("iframe")
    iframe.srcdoc = generateSrcdoc()
    iframe.sandbox = "allow-scripts"
    iframe.width = "100%"
    iframe.height = "100%"
    iframe.className = "preview-iframe"
    previewWrapper.current.appendChild(iframe)

    setTimeout(() => {
      previewWrapper.current.removeChild(previewWrapper.current.childNodes[0])
    }, 200)
  }

  useEffect(() => {
    previewWrapper.current = document.getElementById("preview-wrapper")
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChnage()
    }, 550)
    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <div className="w-full h-full relative" id="preview-wrapper">
      <iframe
        srcDoc={srcDoc}
        title="preview"
        width="100%"
        height="100%"
        scripts="allow-scripts"
        className="absolute top-0 left-0"
      ></iframe>
    </div>
  )
}

export default Preview
