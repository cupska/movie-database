import { useEffect, useState } from "react"
import { Outlet, useSearchParams } from "react-router-dom"
import { CardMoviesTV, CardPerson } from "../../components/card"


export function SearchPage(props) {
    const [searchParam, setSearchParam] = useSearchParams({})
    const query = searchParam.get("query")
    const [mediaType, setMediaType] = useState("multi")
    const [datas, setDatas] = useState([])    

    const url = `https://api.themoviedb.org/3/search/${mediaType}?api_key=e92a7d5bfbd2499a7104d19001e21114&language=en-US&page=1&query=${query}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => setDatas(res.results))
    }, [url])

    // console.log(datas)
    return (
        <div className=" flex flex-col gap-8 my-10">
            <Outlet/>
            <div className="  flex flex-col gap-8 my-10">
                <div className=" flex justify-center">
                    <h1 className=" title-slider">Search</h1>
                </div>
                <div>
                    <form className=" w-fit md:ml-14 ml-6 divide-x-2 ring-1 ring-slate-600">
                        <input className="  py-1 px-3  " placeholder="Search" type="search" defaultValue={query} onChange={(e) => 
                            setTimeout(() => {
                                setSearchParam({query: e.target.value})
                            }, 1500)
                        }/>
                        <select onChange={(e) => setMediaType(e.target.value)}>
                            <option value="multi">All</option>
                            <option value="movie">Movie</option>
                            <option value="tv">TV Series</option>
                            <option value="person">Person</option>
                        </select>
                    </form>
                    {/* <Search/> */}
                </div>
                <div >
                    <ul className=" flex justify-evenly md:justify-center flex-wrap gap-y-3  md:gap-3">
                        {datas.map(data => {
                            if ((data.media_type === "person")||(data.known_for)) {
                                const person = {
                                    id: data.id,
                                    name: data.name, 
                                    image: `https://image.tmdb.org/t/p/w500/${data.profile_path}`
                                }
                                return (
                                    <li key={data.id} className=" flex items-center">
                                        <CardPerson data={person}/>
                                    </li>
                                )
                            } else {
                                const id = data.id
                                const title = data.name||data.title
                                const rating = data.vote_average.toFixed(1)
                                const image = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                                const releaseDate = (data.release_date||data.first_air_date)
                                const mediaType = data.media_type
                                return (
                                    <li key={data.id}>
                                    <CardMoviesTV id={id} title={title} rating={rating} image={image} releaseDate={releaseDate} mediaType={mediaType}/>
                                </li>
                            )}
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}