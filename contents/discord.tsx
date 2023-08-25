import type { PlasmoCSConfig, PlasmoCSUIJSXContainer, PlasmoCSUIProps, PlasmoGetInlineAnchor, PlasmoRender } from "plasmo"
import type { FC } from "react"
import { createRoot } from "react-dom/client"

const SpikeComponent: FC<PlasmoCSUIProps> = () => {
    return <div className="spike-component">hello world</div>
}

export const getInlineAnchor: PlasmoGetInlineAnchor = () =>
    document.querySelector(
        // First child of `[data-list-id="recents"]`
        // '[data-list-id="unreads"] > *'

        // Before first child of `[data-list-id="unreads"]`
        // '[data-list-id="unreads"] > *:first-child'


        // Before `[data-list-id="unreads"]`
        '[data-list-id="unreads"]'
    )

// Only run on discord.com
export const config: PlasmoCSConfig = {
    matches: ["https://discord.com/*"],
    all_frames: true
}

// export const render: PlasmoRender<PlasmoCSUIJSXContainer> = async ({ createRootContainer }) => {
//     const rootContainer = await createRootContainer()
//     const root = createRoot(rootContainer)
//     root.render(<div>hello world</div>)
// }

export default SpikeComponent;
