import { Link } from "react-router-dom";
import { Starlogo } from "../assets/star-logo";


export function CardMoviesTV(props) {
    const {id, title, rating, image, releaseDate, mediaType} = props

    return (
    <div className=" w-36 h-full rounded-md overflow-hidden bg-emerald-400 bg-opacity-20">
        <Link to={`/${mediaType}/${id}`}>
            <div><img src={image} alt="poster"/></div>
            <div className=" p-1 leading-4">
                <div className=" flex justify-end items-center text-sm">
                    <Starlogo/>
                    {rating}
                </div>
                <h2 className=" line-clamp-2">{title}</h2>
                <span>{releaseDate}</span>
            </div>
        </Link>
    </div>
    )
}
export function CardPerson(props) {
    const {id, name, image} = props.data
    return (
        <div className=" w-36 flex justify-center">
            <Link to={`/people/${id}`} className=" w-[100%]">
                <div className=" w-[100%] flex items-center overflow-hidden aspect-square"><img src={image} alt="Profile"></img></div>
                <div className=" mt-2"><h2 className="  leading-4">{name}</h2></div>
            </Link>
        </div>
    )
}