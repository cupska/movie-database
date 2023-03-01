import { Starlogo } from "../assets/star-logo";


export function CardMoviesTV(props) {
    const {title, rating, image, releaseDate} = props

    return (
    <div className=" w-36">
        <div><img src={image} alt="poster"/></div>
        <div className=" p-1 leading-4">
            <div className=" flex justify-end items-center text-sm">
                <Starlogo/>
                {rating}
            </div>
            <h2>{title}</h2>
            <span>{releaseDate}</span>
        </div>
    </div>
    )
}
export function CardPerson(props) {
    const {name, image} = props.data
    return (
        <div>
            <div className=" w-[6rem] h-[6rem] flex items-center overflow-hidden"><img src={image} alt="Profile"></img></div>
            <div><h2 className="  leading-4">{name}</h2></div>
        </div>
    )
}