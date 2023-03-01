

export function Navbar(props) {
    return (
        <nav className=" py-4 px-[5vw] flex justify-start gap-7 bg-emerald-400">
            <div>MyDb</div>
            <div>
                <ul className=" flex gap-7">
                    <li>Movies</li>
                    <li>TV Shows</li>
                    <li>People</li>
                </ul>
            </div>
            <div className=" ml-auto">Login</div>
        </nav>
    )
}