import { useState, useEffect } from "react";
import Editor from "../Editor/Editor"

function ArticlesAdder({router}) {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");
    const addarticle = (e) =>{
        e.preventDefault();
        fetch(`/api${router}`, {
            method: 'POST',
            body: JSON.stringify({
                "name":e.target[0].value,
                "width":"247",
                "height":"139",
                "imgPost":e.target[1].value,
                "route":"/"+e.target[2].value,
                "content":data,
                "link":`${router}/`+e.target[2].value
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
        e.target.reset()
    }
    useEffect(() => {
      setEditorLoaded(true);
    }, []);
  
    return (
<form className="addArticles" onSubmit={addarticle}>
        <input className="commentFromName" type={"name"} placeholder={"Ім’я"} required/>
        <input className="commentFromName" type={"name"} placeholder={"Зображення посту"} required/>
        <input className="commentFromName" type={"name"} placeholder={"Рут"} required/>
      <div className="App">
        <Editor
          name="description"
          onChange={(data) => {
              setData(data);
            }}
            editorLoaded={editorLoaded}
            />
      </div>
      <button className="commentFromBtn">Створити статтю</button>
</form>
    );
}
export default ArticlesAdder
