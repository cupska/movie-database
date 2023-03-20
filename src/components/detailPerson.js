import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export function DetailPerson(props) {
    const {id} = useParams()
    const [data, setData] = useState({})

    const url = `https://api.themoviedb.org/3/person/${id}?api_key=e92a7d5bfbd2499a7104d19001e21114`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => setData(res))
    }, [url])

    const name = data.name
    const image = `https://image.tmdb.org/t/p/w500/${data.profile_path}`
    const knownFor = data.known_for_department
    const birthday = data.birthday
    const placeOfBirth = data.place_of_birth
    const gender = data.gender === 1 ? "female" : "male"
    const biography = data.biography

    // console.log(data)
    return (
        <div>
            <div className=" sm:hidden">
                <img src={image} alt={name} className=" w-[10rem] m-auto rounded-lg"/>
                <h1 className=" text-center text-3xl font-bold">{name}</h1>
                <div className=" max-sm:w-screen p-5">
                    <h2 className=" font-bold text-lg underline underline-offset-2">Personal Info</h2>
                    <div>
                        <div>
                            <h3 className=" font-semibold text-lg">Known for</h3>
                            <span>{knownFor}</span>
                        </div>
                        <div>
                            <h3 className=" font-semibold text-lg">Gender</h3>
                            <span>{gender}</span>
                        </div>
                        <div>
                            <h3 className=" font-semibold text-lg">Birthdate</h3>
                            <span>{birthday}</span>
                        </div>
                        <div>
                            <h3 className=" font-semibold text-lg">Place of birth</h3>
                            <span>{placeOfBirth}</span>
                        </div>
                    </div>
                </div>
                <div className=" p-3">
                    <h3 className=" font-semibold text-lg text-center">Biography</h3>
                    <p className=" text-justify">{biography}</p>
                </div>
            </div>

            <div className=" w-[40rem] hidden sm:flex gap-3">
                <div className=" w-1/3">
                    <img src={image} alt={name} className="rounded-lg"/>
                    <div className="">
                        <h2 className=" font-bold text-lg underline underline-offset-2">Personal Info</h2>
                        <div>
                            <div>
                                <h3 className=" font-semibold text-lg">Known for</h3>
                                <span>{knownFor}</span>
                            </div>
                            <div>
                                <h3 className=" font-semibold text-lg">Gender</h3>
                                <span>{gender}</span>
                            </div>
                            <div>
                                <h3 className=" font-semibold text-lg">Birthdate</h3>
                                <span>{birthday}</span>
                            </div>
                            <div>
                                <h3 className=" font-semibold text-lg">Place of birth</h3>
                                <span>{placeOfBirth}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-2/3">
                    <h1 className=" text-left text-3xl font-bold">{name}</h1>
                    <div className="">
                        <h3 className=" font-semibold text-lg">Biography</h3>
                        <p className=" text-justify">{biography}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}