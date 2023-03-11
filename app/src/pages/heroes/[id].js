import Post from "@/components/Post/Post"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
function Id() {
    const [data, setData] = useState([])
    const router = useRouter().asPath
    
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/heroes`)
      const data = await res.json()
      setData(data.filter((arr) =>{if(arr.link === router){return true;}}))
    }
    fetchData()
  }, [])
  if(data.length === 0) return <div style={{color:'white'}}>loading</div>
  return (
    <>
    {/* <p style={{color:'white'}} >{router.asPath}</p> */}
    <Post component={data[0]} />
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {id:context.params.id}, // will be passed to the page component as props
  }
}
export default Id