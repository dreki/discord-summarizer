function SummarizeModal(): JSX.Element {
    return (
        <dialog id="summarize_modal" className="modal">
            <form method="dialog" className="modal-box">
                <h3 className="text-lg font-bold">Summarize</h3>
                <p>Summarize the selected messages.</p>
                <div className="modal-action">
                    {/* (If there is a button in this form, it will close the modal.) */}
                    <button className="btn">Close</button>
                </div>
            </form>
        </dialog>
    )
}

export default SummarizeModal
