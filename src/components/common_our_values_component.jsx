import '../styles.css'

function CommonOurValuesComponent({ imageUrl, title }) {
    return (
        <div className='our-values-container'>
            <img className='image' src={imageUrl} alt={title} />
            <p className='text'>{title}</p>
        </div>
    );
}

export default CommonOurValuesComponent