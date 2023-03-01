import { useEffect, useState } from "react"
// import { Starlogo } from "../assets/star-logo"
import { CardMoviesTV, CardPerson } from "./card"

export function Slider(props) {
    const [datas, setDatas] = useState([])
    const options = props.options
    const [optionActivated, setOptionActivated] = useState(options[0].url)
    const section = props.section
    const url = optionActivated
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => setDatas(res.results))
    }, [url])

    return (
        <div>
          <div className=" flex items-baseline gap-3">
            <h1 className="title-slider capitalize">{section}</h1>
            <ul className=" flex gap-3">
              {options.map((option, index)=> {
                return (
                  <li key={index}><button onClick={() => setOptionActivated(option.url)}>{option.name}</button></li>
                  )
              })}
            </ul>
          </div>
          <ul className=" flex gap-2">
            {datas.map((data, index) => {
              const title = data.name||data.title
              const rating = data.vote_average.toFixed(1);
              const image = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
              const releaseDate = (data.release_date||data.first_air_date).slice(0,4)
              return (
                <li key={data.id}>
                  <CardMoviesTV title={title} rating={rating} image={image} releaseDate={releaseDate}/>
                </li>
              )
            })}
          </ul>
        </div>
    )
}

export function SliderNews(props) {
  const [datas, setDatas] = useState([])

  const url = "https://newsapi.org/v2/everything?q=movie%20AND%20TV%20series&apiKey=62c243f297954421b39cf5ec1ce63f87"
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(res => setDatas(res.articles.slice(0, 10)))
  }, [])

  // console.log(datas)
  return (
    <div>
      <div><h1 className="title-slider">News</h1></div>
      <ul>
        {datas.map(data => {
          const title = data.title
          const description = data.description
          const url = data.url
          const image = data.urlToImage
          return (
            <li key={data.title}>
              <a href={url} target="_blank" rel="noreferrer" className=" relative">
                <div><img src={image} alt='poster'/></div>
                <div className=" absolute p-2 bottom-0 bg-gradient-to-t from-black to-transparent">
                  <h2 className=" text-white font-bold">{title}</h2>
                  <p className=" text-white leading-4 line-clamp-2">{description}</p>
                </div>
              </a>
            </li>
          )
        }) }
      </ul>
    </div>
  )
}

export function SliderPerson(props) {
  const [datas, setDatas] = useState([])

  const url = "https://api.themoviedb.org/3/person/popular?api_key=e92a7d5bfbd2499a7104d19001e21114&language=en-US&page=1"
  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((res) => setDatas(res.results))
  }, [])

  // console.log(datas)
  return (
    <div>
      <div><h1 className="title-slider capitalize">Popular People</h1></div>
      <ul className=" flex gap-2">
        {datas.map(data => {
          const person = {
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
    </div>
  )
}