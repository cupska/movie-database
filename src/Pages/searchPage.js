import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CardMoviesTV, CardPerson } from "../components/card"


export function SearchPage(props) {
    const {query} = useParams()
    const [formQuery, setFormQuery] = useState(`${query}`)
    const [mediaType, setMediaType] = useState("multi")
    const [datas, setDatas] = useState([])

    const url = `https://api.themoviedb.org/3/search/${mediaType}?api_key=e92a7d5bfbd2499a7104d19001e21114&language=en-US&page=1&query=${formQuery}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => setDatas(res.results))
    }, [url])

    console.log(datas)
    return (
        <div className="">
            <div>
                <form>
                    <input type="search" defaultValue={query} onChange={(e) => 
                        setTimeout(() => {
                            setFormQuery(e.target.value)
                        }, 1000)
                    }/>
                    <select name="cars" id="cars" form="carform" onChange={(e) => setMediaType(e.target.value)}>
                        <option value="multi">All</option>
                        <option value="movie">Movie</option>
                        <option value="tv">TV Series</option>
                        <option value="person">Person</option>
                    </select>
                </form>
                {/* <Search/> */}
            </div>
            <div >
                <ul className=" flex justify-evenly md:justify-center flex-wrap  md:gap-3">
                    {datas.map(data => {
                        if ((data.media_type === "person")||(data.known_for)) {
                            const person = {
                                name: data.name, 
                                image: `https://image.tmdb.org/t/p/w500/${data.profile_path}`
                            }
                            return (
                                <li key={data.id} className="">
                                    <CardPerson data={person}/>
                                </li>
                            )
                        } else {
                            const title = data.name||data.title
                            const rating = data.vote_average.toFixed(1)
                            const image = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                            const releaseDate = (data.release_date||data.first_air_date)
                        return (
                            <li key={data.id}>
                                <CardMoviesTV title={title} rating={rating} image={image} releaseDate={releaseDate}/>
                            </li>
                        )}
                    })}
                </ul>
            </div>
        </div>
    )
}