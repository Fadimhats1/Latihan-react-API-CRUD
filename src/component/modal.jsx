import React from 'react'
import '../style/modal.css'

const Modal = ({ isOpen, isUpdate, click, functions, postData }) => {
    return (
        <div className='modal-bg' onClick={(e) => click(e)} style={{ zIndex: isOpen ? "1" : "-1", opacity: isOpen ? "1" : " 0" }}>
            <div className='modal-content' >
                <h2 className='title-modal'>Add Post</h2>
                <div className='form'>
                    <label htmlFor="title">Title</label>
                    <input autoFocus type="text" name='title' id="title" placeholder='Title' onChange={(e) => functions.changeHandle(e)} value={postData.title} />
                    <label htmlFor="body">Description</label>
                    <textarea name="body" id="body" cols="30" rows="8" placeholder="Post's description" onChange={(e) => functions.changeHandle(e)} value={postData.body}></textarea>
                    <button className='button-form' onClick={() => {
                        functions.submitHandle(postData.id)
                    }}>Add</button>
                </div>
                <div className='close-button'>&times;</div>
            </div>
        </div>
    )
}
export default Modal