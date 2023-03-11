import Editor from "@/components/Editor/Editor";
import React, { useState, useEffect } from "react";
const parse = require('html-react-parser');

export default function ok() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div className="App" style={{margin:"300px"}}>
      <h1>ckEditor 5</h1>

      <Editor
        name="description"
        onChange={(data) => {
          setData(data);
        }}
        editorLoaded={editorLoaded}
      />
<p style={{background:"white"}}>
  {parse(data)}
      {JSON.stringify(data)}
</p>
    </div>
  );
}