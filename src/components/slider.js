import { useEffect, useState } from "react"
// import { Starlogo } from "../assets/star-logo"
import { CardMoviesTV, CardPerson } from "./card"

export function Slider(props) {
    const [datas, setDatas] = useState([])
    const options = props.options
    const [optionActivated, setOptionActivated] = useState(options[0])
    const section = props.section
    const url = optionActivated.url
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => setDatas(res.results))
    }, [url])

    const [changeColor, setChangeColor] = useState(0)
    // console.log(optionActivated)
    return (
        <div>
          <div className=" ml-2 md:ml-10 mb-5 flex items-baseline gap-3">
            <h1 className="title-slider capitalize">{section}</h1>
            <ul className=" flex gap-3">
              {options.map((option, index)=> {
                return (
                  <li key={index}><button onClick={(e) => {
                    setOptionActivated(option)
                    setChangeColor(index)
                  }} className={`${changeColor === index ? "text-emerald-400" : ""}`}>{option.name}</button></li>
                  )
              })}
            </ul>
          </div>
          <ul className=" w-[100%] px-5 pb-5 flex gap-2 overflow-x-auto">
            {datas.map((data, index) => {
              const id = data.id
              const title = data.name||data.title
              const rating = data.vote_average.toFixed(1);
              const image = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
              const releaseDate = (data.release_date||data.first_air_date).slice(0,4)
              const mediaType = data.media_type||optionActivated.name

              return (
                <li key={data.id}>
                  <CardMoviesTV id={id} title={title} rating={rating} image={image} releaseDate={releaseDate} mediaType={mediaType}/>
                </li>
              )
            })}
          </ul>
        </div>
    )
}

export function SliderNews(props) {
  const [datas, setDatas] = useState([])

  // const url = "https://newsapi.org/v2/everything?q=movie%20AND%20TV%20series&apiKey=62c243f297954421b39cf5ec1ce63f87"
  const url = `https://gnews.io/api/v4/search?q=film%20OR%20series&lang=en&country=us&max=10&apikey=099c51773d6e58717e7352d97927b523`
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(res => setDatas(res.articles))
  }, [url])

  // console.log(datas)
  return (
    <div>
      <div className=" ml-2 md:ml-10 mb-5 flex items-baseline gap-3"><h1 className="title-slider">News</h1></div>
      <ul className=" mb-10 grid xl:grid-cols-5 place-items-stretch justify-items-stretch">
        {datas.map(data => {
          const title = data.title
          const description = data.description
          const url = data.url
          const image = data.image
          return (
            <li key={data.title} className=" bg-cover p-3" style={{backgroundImage: `url(${image})`}}>
              <a href={url} target="_blank" rel="noreferrer" className={`cursor-pointer`} >
                {/* <div><img src={image} alt='poster'/></div> */} 
                <div className="  p-3 bg-opacity-50 bg-slate-800 ">
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
      <div className=" ml-2 md:ml-10 mb-5 flex items-baseline gap-3"><h1 className="title-slider capitalize">Popular People</h1></div>
      <ul className=" pb-5 px-5 flex gap-3 overflow-x-auto">
        {datas.map(data => {
          const person = {
            id: data.id,
            name: data.name, 
            image: `https://image.tmdb.org/t/p/w500/${data.profile_path}`
          }
          return (
            <li key={data.id}>
              <div className="">
                <CardPerson data={person}/>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}