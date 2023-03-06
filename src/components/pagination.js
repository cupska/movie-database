

export function Pagination(props) {
    const {page, setPage} = props

    return (
        <div className=" w-fit flex divide-x-2 border [&>*]:w-10 [&>*]:text-xl [&>*]:text-center">
            <button onClick={() => setPage(page > 1 ? page - 1 : 1 )}>{"<"}</button>
            <span>{page}</span>
            <button onClick={() => setPage(page + 1)}>{">"}</button>
        </div>
    )
}