import { useCallback, useState } from "react"

import "./style.css"

function IndexPopup() {
    const [data, setData] = useState("")

    const summarizeCallback = useCallback(async () => {}, [])

    return (
        <div className="container prose m-4" style={{ width: "26rem" }}>
            <h1 className="text-lg">Discord Summarizer</h1>
            <div className="form-control mt-4">
                <button onClick={summarizeCallback} className="btn btn-primary btn-sm max-w-min">
                    Summarize
                </button>
            </div>
        </div>
    )
}

export default IndexPopup
