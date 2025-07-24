
import '../styles.css'

function CommonOurCoursesCard({ imageUrl, title, description, years, semesters }) {
    return (
        <div className='card-container'>
            <img src={imageUrl} alt={title} className='card-container-image' />
            <div className='card-container-content'>
                <h2 className='card-title'>{title}</h2>
                <p className='card-description'>
                    <p>{description}</p>
                    <span>{years} Years</span>
                    <span>---</span>
                    <span>{semesters} Semesters</span>
                </p>
            </div>
        </div>
    );
}

export default CommonOurCoursesCard;

