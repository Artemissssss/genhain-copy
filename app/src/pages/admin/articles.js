import AdminLink from "@/components/AdminLink/AdminLink";
import ArticlesAdder from "@/components/ArticlesAdder/ArticlesAdder";
import { StatusContext } from "@/context/context"
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react"
function articles() {
    const router = useRouter()
    const { status, setStatus } = useContext(StatusContext);
    useEffect(()=>{
        if(!status){
          router.push('/admin/login')
        }
      },[])
      useEffect(()=>{
        if(!status){
          router.push('/admin/login')
        }
      },[status])
  return (
    <section className="postList">
        <h1 className="postListTittle">Панель адміністратора</h1>
        <div className="adminSectWrap">
          <AdminLink/>
          <ArticlesAdder router={"/articles"}/>
        </div>
      </section>
  )
}
export default articles
