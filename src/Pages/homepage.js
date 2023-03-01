import { Search } from "../components/search";
import { Slider, SliderNews, SliderPerson } from "../components/slider";

export function Homepage(props) {
    // const picky = require("../assets/")

    return (
        <div className=" flex flex-col gap-8">
            <section className=" relative h-[50vh]  bg-cover  bg bg-top" style={{backgroundImage: 'url("https://wallpaper.dog/large/20494993.jpg")'}}>
                <div className=" absolute z-10 w-[100%] h-full top-0 flex flex-col justify-center items-center gap-5">
                    <div className=" w-[90%] flex justify-center">
                        <p className=" font-bold text-3xl md:text-6xl text-white">Welcome. <br/>Millions of Movies, TV Shows, and People to discover. Explore now.</p>
                    </div>
                    <div className=" w-[90%] flex justify-center">
                        <Search/>
                    </div>
                </div>
                <div className=" absolute w-full h-full top-0 left-0 bg-green-500 opacity-25"></div>
            </section>
            <section id="homepage-trending">
                <Slider section="trending" options={[
                    {name: "Today", url: "https://api.themoviedb.org/3/trending/all/day?api_key=e92a7d5bfbd2499a7104d19001e21114"},
                    {name: "This Week", url: "https://api.themoviedb.org/3/trending/all/week?api_key=e92a7d5bfbd2499a7104d19001e21114"},
                ]}/>
            </section>
            <section>
                <SliderPerson/>
            </section>
            <section id="homepage-popular">
                <Slider section="What's Popular" options={[
                    {name: "Movie", url: "https://api.themoviedb.org/3/movie/top_rated?api_key=e92a7d5bfbd2499a7104d19001e21114&language=en-US&page=1"},
                    {name: "TV", url: "https://api.themoviedb.org/3/tv/top_rated?api_key=e92a7d5bfbd2499a7104d19001e21114&language=en-US&page=1"},
                ]}/>
            </section>
            <section>
                <SliderNews />
            </section>
        </div>
    )
}