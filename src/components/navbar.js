import { useState } from "react"
import { Link } from "react-router-dom"

export function Navbar(props) {
    const [isNavBtnActive ,setIsNavBtnActive] = useState(false)
    return (
        <nav className=" relative py-4 px-[5vw] flex justify-start items-center gap-7 bg-emerald-400">
            <div><Link to="/"><span className="logo font-[Rufina] text-3xl font-extrabold">MyDb</span></Link></div>
            <div className=" hidden md:block ">
                <ul className=" flex gap-7">
                    <li><Link to="movie">Movies</Link></li>
                    <li><Link to="tv">TV Shows</Link></li>
                    <li><Link to="people">People</Link></li>
                </ul>
            </div>
            <div className=" ml-auto">Login</div>

            {/* Mobile < 768, Navbar */}
            <button className=" w-10 h-10 p-1 flex flex-col justify-evenly items-end md:hidden rounded-md border border-slate-700" onClick={() => setIsNavBtnActive(true)}> 
                <div className=" w-1/3 h-1 bg-slate-700"></div>
                <div className=" w-2/3 h-1 bg-slate-700"></div>
                <div className=" w-full h-1 bg-slate-700"></div>
            </button>
            <ul id=" nav-drop-mobile" className={` fixed z-40 top-0 left-0 w-[100%] ${isNavBtnActive ? "-translate-y-0" : "-translate-y-full"} flex flex-col justify-evenly divide-y duration-500 ease-out [&>*]:py-14 [&>*]:text-center bg-emerald-400`}>
                    <li><Link to="movie" onClick={() => setIsNavBtnActive(false)}>Movies</Link></li>
                    <li><Link to="tv" onClick={() => setIsNavBtnActive(false)}>TV Shows</Link></li>
                    <li><Link to="people" onClick={() => setIsNavBtnActive(false)}>People</Link></li>
            </ul>
            <button className={` fixed z-[39] top-0 left-0 h-[100vh] w-[100%] ${isNavBtnActive ? "block" : "hidden"} bg-slate-600 bg-opacity-50 backdrop-blur`} onClick={() => setIsNavBtnActive(false)}></button>                           
        </nav>
    )
}