export default function Resume({resumeRef}) {
    return (
        <div id="Resume" ref={resumeRef}>
            <div>
            <h2>My Resume</h2>
            <a className='fade-scale-in' href="/Marco-De-La-Cruz-Resume.pdf" download><button>Download PDF ⤓</button></a>
            </div>
        </div>
    )
}