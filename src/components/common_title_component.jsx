import '../styles.css'

function CommonTitleComponent({title, description}) {
    return (
        <div className='common-title'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default CommonTitleComponent