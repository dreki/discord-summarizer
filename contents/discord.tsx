import { PlasmoCSConfig } from "plasmo"
import { useCallback } from "react"

import "../style.css"

import ReactDOM from "react-dom"

// When `data-list-id="recents"` is available, add a button as its first child.
const selector = '[data-list-id="recents"]'

function Summarize(): JSX.Element {
    const summarizeCallback = useCallback(async () => {
        console.log("> Summarize!")
    }, [])

    return (
        <div className="form-control ml-4 mt-3">
            <button onClick={summarizeCallback} className="btn btn-primary btn-sm max-w-min">
                Summarize
            </button>
        </div>
    )
}

// Every 500ms, check to see if element exists. If it does, add button and stop checking.
// TODO: Re-do this whenever the Unread UI is hidden.
const interval = setInterval(() => {
    const element = document.querySelector(selector)
    if (element) {
        console.log("Element found:", element)

        // Element exists; mount component.
        const div = document.createElement("div")
        element.prepend(div)
        ReactDOM.render(<Summarize />, div)

        // Stop checking if element exists.
        clearInterval(interval)
    }
}, 500)

// Only run on discord.com
export const config: PlasmoCSConfig = {
    matches: ["https://discord.com/*"],
    all_frames: true
}

export { }
