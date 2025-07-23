import '../styles.css'

function CommonOurProgramsCard({ imageUrl, title, years, semesters }) {
    return (
        <div className='card-container'>
            <img src={imageUrl} alt={title} className='card-container-image' />
            <div className='card-container-content'>
                <h2 className='card-title'>{title}</h2>
                <p className='card-description'>
                    <span>{years} Years</span>
                    <span>---</span>
                    <span>{semesters} Semesters</span>
                </p>
            </div>
        </div>
    );
}

export default CommonOurProgramsCard