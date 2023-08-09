import { PlasmoCSConfig } from "plasmo"

/*
let lastExpanded = false

function makeObserver(targetElement: Element): MutationObserver {
    return new MutationObserver((mutationsList) => {
        const expandedNode = targetElement.querySelector(
            "[aria-label='Inbox'][aria-expanded='true']"
        )
        // Only execute code if it's newly expanded.
        const isExpanded = !!expandedNode
        console.log(`> isExpanded = !!expandedNode (${!!expandedNode})`)
        if (isExpanded && isExpanded !== lastExpanded) {
            // Your code here
            //   observer.disconnect();
            console.log("unread messages visible")
        }
    })
}

let observer = null

// Wait until the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    debugger;
    // Wait until an element matches "[aria-label='Inbox'][aria-expanded='true']"
    // const targetNode = document.body;
    const targetElement = document.querySelector("div[aria-label='Inbox']").parentElement
    console.log(`> targetElement: ${targetElement}`)

    observer = makeObserver(targetElement)
    observer.observe(targetElement, { childList: true, subtree: true })
})
// document.addEventListener("plasmo:wait", (e) => {
*/





// Only run on discord.com
export const config: PlasmoCSConfig = {
    matches: ["https://discord.com/*"],
    all_frames: true
}

export {}
