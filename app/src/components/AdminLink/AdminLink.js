import { StatusContext } from "@/context/context"
import Link from "next/link"
import { useRouter } from "next/router"
import { useContext } from "react"

function AdminLink() {
    const {setStatus} = useContext(StatusContext)
    const router = useRouter()
  return (
    <section className="AdminLinkSect">
        <div className="AdminLinkSectWrapper">
            <h2 className="AdminLinkText">Відділи</h2>
            <div className="AdminLinkLine"></div>
            <ul className="AdminLinkList">
                <li className="AdminLinkListItem"><h3 className="AdminLinkListItemText"><Link href={"/admin/articles"}>Статті</Link></h3></li>
                <li className="AdminLinkListItem"><h3 className="AdminLinkListItemText"><Link href={"/admin/heroes"}>Персонажі</Link></h3></li>
                <li className="AdminLinkListItem"><h3 className="AdminLinkListItemText"><Link href={"/admin/bilds"}>Білди</Link></h3></li>
                <li className="AdminLinkListItem"><h3 className="AdminLinkListItemText"><Link href={"/admin/geography"}>Географія</Link></h3></li>
            </ul>
            <button className="AdminLinkButton" onClick={() =>{setStatus(false)}}>Вийти</button>
        </div>
    </section>
  )
}
export default AdminLink