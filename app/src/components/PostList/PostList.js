import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

function PostList({ name, posts}) {
 const [allPost,getAllPost] = useState([])
 useEffect(()=>{
 getAllPost(posts)
 },[])
  return (
    <section className="postList">
        <div className="postListWrap"></div>
        <h1 className="postListTittle">{name}</h1>
        <div className="postListList">
        {allPost.map((arr,i) => {
            return(
                <div className="postListItem" key={i}>
                    <Link className="postListHref" href={arr.link} as={arr.link}>
                        <Image priority="true" className="postListImg" alt={arr.name} src={arr.imgPost} width={arr.width} height={arr.height}></Image>
                        <h2 className="postListText">{arr.name}</h2>
                    </Link>
                </div>
            )
        })}
        </div>
        <div className="postListWrap2"></div>
    </section>
  )
}
export default PostList