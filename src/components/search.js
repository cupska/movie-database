import { useState } from "react"
import { Link } from "react-router-dom"


export function Search(props) {
    const [searchParam, setSearchParam] = useState("")
    const screenWidth = window.screen.width

    // console.log(window.screen.width)
    return (
        <div className=" w-full flex justify-between rounded-2xl overflow-hidden">
            <input type={"search"} placeholder={screenWidth > 640 ? "Search for a Movie, TV Show, Person.." : "Search..."} onChange={(e) => setSearchParam(e.target.value)} required className="pl-4 pr-2 py-1 grow outline-0"/>
            <Link to={`search?query=${searchParam}`} className=" pl-3 pr-5 flex items-center bg-green-400"><span className=" text-white">Search</span></Link>
        </div>
    )
}