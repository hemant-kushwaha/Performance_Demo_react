export default function Modal ({close}) {
    return (
        <div className="Moda">
            <h5>Modal</h5>
            <p>This is a modal</p>
            <button onClick={close}>Close</button>
        </div>
    )
}