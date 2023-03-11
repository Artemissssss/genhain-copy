import { useEffect, useState, useRef, useContext } from "react"
import ReCAPTCHA from "react-google-recaptcha";
import { StatusContext } from "@/context/context";

function Comments({router,route}) {
    const { status } = useContext(StatusContext);
    const [data, setData] = useState([])
    const captch = useRef()
    const comment = (e) => {
        e.preventDefault();
        if(captch.current.getValue()){
          fetch(`/api/comments${router}`, {
            method: 'POST',
            body: JSON.stringify({"name":e.target[0].value,"text":e.target[1].value,"route":route}),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(async (res)=>{const data = await res.json();setData(data.reverse())});
          e.target.reset()
        }else{
          alert("Пройдіть перевірку reCaptcha")
        }
      }
      const deleter = (e) =>{
      fetch(`/api/comments${router}`, {
        method: 'DELETE',
        body: JSON.stringify(e.target.textContent),
        headers: {
        'Content-Type': 'application/json'
        }
        }).then(async (res)=>{const data = await res.json();setData(data.reverse())});
    }
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/comments${router}`)
      const data = await res.json()
      setData(data.reverse())
    }
    fetchData()
  }, [])

  return (
    <>
    <form className="commentFrom" onSubmit={comment}>
<input className="commentFromName" type="text" name="name" placeholder="Ім’я" required maxLength="30"/>
<textarea className="commentFromText"  name="text" placeholder="Коментар" required maxLength="200"></textarea>
<ReCAPTCHA
    sitekey="6LdDFZwkAAAAADmk6YJPel8e03eDXLVGuKUS_ELw"
    ref={captch}
  />
<input className="commentFromBtn" type="submit" name="submit" value="Надіслати"/>
    </form>

 
    <div className="CommentsSect">
    <h3 className="CommentsSectQuant">{data.length} {data.length === 1? "коментар":"коментарів"}</h3>
    <div className="CommentsSectLine"></div>
    {data.length !== 0 ? (
    <div className="CommentsSectList">
        {
            data.map((arr,i)=>{return (<div className="postCommentsList" key={i}><h4 className="postCommentsName">{arr.name}</h4> <p className="postCommentsText">{arr.text}</p> {status ? <button onClick={deleter}>{arr._id}</button> : null}</div>)})
        }
    </div>
    ): null}
    </div>
    </>
  )
}
export default Comments