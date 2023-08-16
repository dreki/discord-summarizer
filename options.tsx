import "./style.css"

function Options(): JSX.Element {
    return (
        <div className="container mx-auto pt-16">
            <h1 className="text-3xl">
                <span className="font-bold">Discord Summarizer</span> <span className="ml-1">Options</span>
            </h1>

            <div className="form-control mt-4">
                <label className="label">
                    <span className="label-text">OpenAI GPT API key</span>
                </label>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                />
            </div>
        </div>
    )
}

export default Options
