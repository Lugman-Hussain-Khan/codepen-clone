import React, { useContext } from "react"
import Split from "react-split"
import Editor from "./Editor"
import { PlaygroundContext } from "./PlaygroundContext"

const EditorLayout = () => {
  const { setHtml, setCss, setJs } = useContext(PlaygroundContext)

  return (
    <Split className="flex" direction="horizontal">
      <div className="bg-neutral-800">
        <div className="h-8 w-full flex items-center gap-2 px-2">
          <div className="w-5 h-5 rounded-md bg-orange-600 flex items-center justify-center relative">
            <h1 className=" text-xs font-bold tracking-wide text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 text-center">
              /
            </h1>
          </div>
          <h1 className="text-gray-400 text-sm font-semibold">HTML</h1>
        </div>
        <Editor language="xml" setValue={(value) => setHtml(value)} />
      </div>
      <div className="bg-neutral-800">
        <div className="h-8 w-full flex items-center gap-2 px-2">
          <div className="w-5 h-5 rounded-md bg-blue-500 flex items-center justify-center relative">
            <h1 className=" text-sm font-bold tracking-wide text-white absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 text-center">
              *
            </h1>
          </div>
          <h1 className="text-gray-400 text-sm font-semibold">CSS</h1>
        </div>
        <Editor language="css" setValue={(value) => setCss(value)} />
      </div>
      <div className="bg-neutral-800">
        <div className="h-8 w-full flex items-center gap-2 px-2">
          <div className="w-5 h-5 rounded-md bg-yellow-500 flex items-center justify-center relative">
            <h1 className=" text-xs font-bold tracking-wide text-white absolute top-1/2 left-[51%] transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
              ( )
            </h1>
          </div>
          <h1 className="text-gray-400 text-sm font-semibold">JS</h1>
        </div>
        <Editor language="javascript" setValue={(value) => setJs(value)} />
      </div>
    </Split>
  )
}

export default EditorLayout
