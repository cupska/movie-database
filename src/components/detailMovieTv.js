import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function DetailMovieTv(props) {
    const { id } = useParams()
    const [data, setData] = useState({})

    // props.mediatype dipassing dari App.js
    const mediaType = props.mediaType

    const url = `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=e92a7d5bfbd2499a7104d19001e21114`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => setData(res))
    }, [url])

    const title = data.title||data.name
    const image = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    const backgroundImage = `https://image.tmdb.org/t/p/original/${data.backdrop_path}`
    const releaseDate = data.release_date||data.first_air_date
    const genres =  data.genres
    const tagline = data.tagline
    const overview = data.overview

    // console.log(genres)
    return (
        <div className=" flex justify-center bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className=" sm:py-10 flex flex-col sm:flex-row justify-center items-center " >
                <div className=" relative w-2/4 sm:w-1/5 "><img src={image} alt={title} className=" translate-y-10 sm:translate-y-0 ring-1 ring-slate-700"/></div>
                <div className=" sm:w-[30rem] sm:h-full  p-2 pt-14 sm:pt-0 flex flex-col items-center sm:items-start bg-emerald-500 bg-opacity-80">
                    <div className=" flex justify-center flex-wrap gap-2"><h1 className=" text-3xl font-bold">{title}</h1> <span className=" text-3xl">({releaseDate !== undefined ? releaseDate.slice(0,4) : ""})</span></div>
                    <ul className=" flex gap-3">
                        {genres !== undefined ? genres.map(genre => {
                            return (
                                <li key={genre.id}><div className=" w-fit px-3 border border-slate-500">{genre.name}</div></li>
                            )
                        }) : "" }
                    </ul>
                    <p className=" text-justify">{tagline}</p>
                    <h2 className=" font-bold text-lg">overview</h2>
                    <p className=" text-justify">{overview}</p>
                </div>
            </div>
        </div>
    )
}