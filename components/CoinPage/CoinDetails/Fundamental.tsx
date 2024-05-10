type FundamentalProps = {
    title: string;
    value: string;
}

export default function Fundamental(
    { title, value }: FundamentalProps
) {
    return (
        <div className="w-full flex flex-col">
            <div className="flex flex-row justify-between items-center p-4 font-[400]">
                <p className="text-slate-500">{title}</p>
                <p className="text-slate-900">{value}</p>
            </div>
            <span className="h-0.5 rounded-full self-center w-full bg-slate-200"> </span>
        </div>
    )
}