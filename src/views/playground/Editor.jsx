import React from "react"
import { UnControlled as CodeMirror } from "react-codemirror2"

import "codemirror/lib/codemirror.css"
import "codemirror/theme/material-darker.css"
import "codemirror/mode/xml/xml"
import "codemirror/mode/css/css"
import "codemirror/mode/javascript/javascript"

const Editor = ({ language, setValue }) => {
  return (
    <CodeMirror
      options={{
        mode: language,
        theme: "material-darker",
        lineNumbers: true,
        lineWrapping: true,
      }}
      onChange={(editor, data, value) => {
        setValue(value)
      }}
    />
  )
}

export default Editor
