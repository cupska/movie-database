import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { CardPerson } from "../components/card"
import { Pagination } from "../components/pagination"

export function PeoplePage(props) {
    const [datas, setDatas] = useState([])
    const [page, setPage] = useState(1)

    const url = `https://api.themoviedb.org/3/person/popular?api_key=e92a7d5bfbd2499a7104d19001e21114&language=en-US&page=${page}`
    useEffect(() => {
      fetch(url)
      .then((res) => res.json())
      .then((res) => setDatas(res.results))
    }, [url])
    // console.log(datas)
    return (
        <div id="top-peoplePage" className=" flex flex-col items-center gap-8 my-10">
            <Outlet/>
            <div className=" flex justify-center">
                <h1 className=" title-slider">Discover People</h1>
            </div>
            <ul className=" w-fit grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3">
                {datas.map(data => {
                const person = {
                    id: data.id,
                    name: data.name, 
                    image: `https://image.tmdb.org/t/p/w500/${data.profile_path}`
                }
                return (
                    <li key={data.id} className="">
                            <CardPerson data={person}/>
                    </li>
                )
                })}
            </ul>
            <div className=" flex justify-center">
                <Pagination page={page} setPage={setPage}/>
            </div>
        </div>
    )
}