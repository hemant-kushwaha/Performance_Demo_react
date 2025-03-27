export default function Modal ({setISOpen}) {
    return (
        <div className="Moda">
            <h5>Modal</h5>
            <p>This is a modal</p>
            <button onClick={()=>setISOpen(false)}>Close</button>
        </div>
    )
}