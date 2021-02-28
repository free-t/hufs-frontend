import React from 'react'
import {Editor} from 'react-draft-wysiwyg'
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function MyEditor() {
    return (
        <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
          />
    )
}

export default MyEditor
