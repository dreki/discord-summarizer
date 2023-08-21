import { useCallback } from "react"

function SummarizeModal(): JSX.Element {
    const summarizeCallback = useCallback(async () => {
        console.log("> Summarize!")
        const result = await fetch("https://discord.com/channels/@me/messages", {
        // const result = await fetch("https://discord.com/api/v9/channels/842839285127970891/messages?limit=50&around=1142682063292608512", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        console.log("> result:")
        console.log(result)

        // Get raw body
        const body = await result.text()
        console.log("> body:")
        console.log(body)

        // Get JSON from result
        // const json = await result.json()
        // console.log("> json:")
        // console.log(json)
    }, [])

    return (
        // <dialog id="summarize_modal" className="modal">
        //     {/* <form method="dialog" className="modal-box"> */}
        //     <div className="modal-box">
        //         <h3 className="text-lg font-bold">Summarize</h3>
        //         <p>Summarize the selected messages.</p>
        //         <button onClick={summarizeCallback} className="btn btn-primary btn-sm max-w-min">
        //             Call Unreads
        //         </button>
        //         <div className="modal-action">
        //             {/* (If there is a button in this form, it will close the modal.) */}
        //             <form method="dialog">
        //                 <button className="btn">Close</button>
        //             </form>
        //         </div>
        //         {/* </form> */}
        //     </div>
        // </dialog>
        <>
            <input type="checkbox" id="summarize_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Summarize</h3>
                    <p>Summarize the selected messages.</p>
                    <button
                        onClick={summarizeCallback}
                        className="btn btn-primary btn-sm max-w-min">
                        Call Unreads
                    </button>
                    <div className="modal-action">
                        <label htmlFor="summarize_modal" className="btn">
                            Close
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SummarizeModal
