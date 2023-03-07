import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { CardMoviesTV } from "../components/card"
import { Pagination } from "../components/pagination"


export function MoviePage(props) {
    const [datas, setDatas] = useState([])
    const [sortBy, setSortBy] = useState("popularity.desc")
    const [page, setPage] = useState(1)

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=e92a7d5bfbd2499a7104d19001e21114&language=en-US&sort_by=${sortBy}&include_video=false&page=${page}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => setDatas(res.results))
    }, [url])

    // console.log(datas)
    return (
        <div className=" w-[100%]">
            <Outlet/>
            <div className=" m-auto w-fit flex flex-col gap-8 my-10">
                <div className=" flex justify-center">
                    <h1 className=" title-slider">Discover Movie</h1>
                </div>
                <select className="w-max py-1 px-3 ring-1 ring-slate-600" defaultValue="popularity.desc" onChange={(e) => setSortBy(e.target.value)}>
                    <option value="popularity.asc">Popularity ascending</option>
                    <option value="popularity.desc">Popularity descending</option>
                    <option value="release_date.asc">Release date ascending</option>
                    <option value="release_date.desc">Release date descending</option>
                    <option value="vote_average.asc">Rate ascending</option>
                    <option value="vote_average.desc">Rate descending</option>
                </select>
                <ul className=" w-fit m-auto grid auto-cols-auto grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                    {datas.map(data => {
                        const id = data.id
                        const title = data.name||data.title
                        const rating = data.vote_average.toFixed(1)
                        const image = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                        const releaseDate = (data.release_date||data.first_air_date)
                        const mediaType = "movie"
                        return (
                            <li key={data.id} className="">
                                <CardMoviesTV id={id} title={title} rating={rating} image={image} releaseDate={releaseDate} mediaType={mediaType}/>
                            </li>
                        )
                    })}
                </ul>
                <div className=" flex justify-center">
                    <Pagination page={page} setPage={setPage}/>
                </div>
            </div>
        </div>
    )
}