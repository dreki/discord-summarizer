import { PlasmoCSConfig } from "plasmo"
import { useCallback } from "react"
import { createRoot } from "react-dom/client"

import "../style.css"

import ReactDOM from "react-dom"

import SummarizeModal from "~components/SummarizeModal"

// When `data-list-id="recents"` is available, add a button as its first child.
const selector = '[data-list-id="recents"]'

function Summarize(): JSX.Element {
    return (
        <>
            <div className="form-control ml-4 mt-3">
                <label htmlFor="summarize_modal" className="btn btn-primary btn-sm max-w-min">Summarize</label>
                {/* <button onClick={summarizeCallback} className="btn btn-primary btn-sm max-w-min">
                    Summarize
                </button> */}
            </div>
            <SummarizeModal />
        </>
    )
}

// Every 500ms, check to see if element exists. If it does, add button. We'll always check, since
// the Unread UI can be hidden.
const interval = setInterval(() => {
    const element = document.querySelector(selector)
    if (element) {
        // If the element exists, return.
        if (document.getElementById("summarize_button")) {
            return
        }

        // Element exists; mount component. Give it an ID so we can look for it later.
        const div = document.createElement("div")
        div.id = "summarize_button"
        element.prepend(div)
        // Create root
        createRoot(div).render(<Summarize />)
    }
}, 500)

// Only run on discord.com
export const config: PlasmoCSConfig = {
    matches: ["https://discord.com/*"],
    all_frames: true
}

export { }
