import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Comments from "../Comments/Comments";
const parse = require('html-react-parser');

function PostList({ component }) {
 const [components,getComponents] = useState([])
 useEffect(()=>{
  getComponents(component)
 },[])
 if(components.length === 0) {return <div>loading</div>}
  return (
    <section className="postList">
        <div className="postListWrap"></div>

        {parse(`${components.content}`)}
          <Comments router={components.link} route={component.route}/>
        <div className="postListWrap2"></div>
    </section>
  )
}
export default PostList