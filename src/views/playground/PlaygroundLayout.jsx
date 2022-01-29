import EditorLayout from "./EditorLayout"
import Split from "react-split"
import Preview from "./Preview"
import PlyagroundContextProvider from "./PlaygroundContext"
import Navbar from "./Navbar"

const PlaygroundLayout = () => {
  return (
    <PlyagroundContextProvider>
      <Navbar />
      <Split
        direction="vertical"
        style={{ height: "calc(100vh - 4rem)" }}
        // className="flex"
      >
        <EditorLayout />
        <Preview />
      </Split>
    </PlyagroundContextProvider>
  )
}

export default PlaygroundLayout
