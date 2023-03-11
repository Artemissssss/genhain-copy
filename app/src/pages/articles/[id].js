import Post from "@/components/Post/Post"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
function Id() {
    const [data, setData] = useState([])
    const router = useRouter().asPath
    
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api${router}`)
      const data = await res.json()
      setData(data)
    }
    fetchData()
  }, [])
  if(data.length === 0) return <div style={{color:'white'}}>loading</div>
  return (
    <>
    <Post component={data} />
    </>
  )
}
export async function getServerSideProps(context) {
  return {
    props: {id:context.params.id}, // will be passed to the page component as props
  }
}
export default Id