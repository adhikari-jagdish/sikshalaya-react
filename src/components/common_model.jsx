import '../styles.css'

function CommonModel({ isOpen, onClose, title, description }) {

    if (!isOpen) return null;

    return (
        <div className='modal-overlay'>
            <div className='modal-box'>
                <button className='modal-close' onClick={onClose}>X</button>
                <h2 className='modal-title'>{title}</h2>
                <div className='modal-content'>
                    {description}
                </div>
            </div>
        </div>
    );
}

export default CommonModel;