import { useCallback, useEffect, useState } from "react"

import { Storage } from "@plasmohq/storage"

import "./style.css"

const storage = new Storage()

function Options(): JSX.Element {
    const [gptApiKey, setGptApiKey] = useState<string>("")
    const [saved, setSaved] = useState<boolean>(false)

    useEffect(() => {
        async function getFromStorage() {
            const gptApiKey = await storage.get("gptApiKey")
            console.log(`> gptApiKey: ${gptApiKey}`)
            setGptApiKey(gptApiKey)
        }

        getFromStorage()
    }, [])

    const saveCallback = useCallback(async () => {
        console.log(`> Saving gptApiKey: ${gptApiKey}`)
        await storage.set("gptApiKey", gptApiKey)
        setSaved(true)
    }, [gptApiKey])

    return (
        <div className="container prose mx-auto pt-16">
            <h1 className="text-3xl">
                <span className="font-bold">Discord Summarizer</span>{" "}
                <span className="ml-1">Options</span>
            </h1>

            <div className="form-control mt-4">
                <label className="label">
                    <span className="label-text">OpenAI GPT API key</span>
                </label>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    value={gptApiKey}
                    // onChange={(e) => setGptApiKey(e.target.value)}
                    onChange={e => {
                        console.log(e.target.value)
                        // return true
                        setGptApiKey(e.target.value)
                    }}
                />
            </div>

            <div className="form-control mt-4">
                <button onClick={saveCallback} className="btn btn-primary max-w-min">
                    Save
                </button>
            </div>

            {saved && (
                <div className="alert alert-success mt-4 max-w-sm">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>Saved</span>
                </div>
            )}
        </div>
    )
}

export default Options
