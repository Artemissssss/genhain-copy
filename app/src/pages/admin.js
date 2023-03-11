import AdminLink from "@/components/AdminLink/AdminLink";
import { StatusContext } from "@/context/context"
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react"

function admin() {
    const { status, setStatus } = useContext(StatusContext);
    const router = useRouter()
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
    <>
      <section className="postList">
        <h1 className="postListTittle">Панель адміністратора</h1>
        <div className="adminSectWrap">
          <AdminLink/>
        </div>
      </section>
    </>
  )
}
export default admin