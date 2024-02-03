
export function Lists({title, list}){
    return(
        <div>
            <div className="font-medium text-lg pb-3">
                {title}
            </div>

            <div>
            {list.map((x, index) => (
                <div className="text-base text-gray-400" key={index}>{x}</div>
            ))}
            </div>
        </div>
    )
}