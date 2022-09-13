import React from 'react'
import { URL_image } from '../utils/utils'
import '../style/card.css'

const Card = ({postData, functions, click}) => {

    return (
        <div className='card-container'>
            <img src={URL_image + "tech"} alt={URL_image + "tech"} />
            <div className='container-text'>
                <h2 className='title'>{postData.title}</h2>
                <p className='desc'>
                    {postData.body}
                </p>
            </div>
            <div className='container-button-card'>
                <button className='button-remove' onClick={()=> functions.removeHandle(postData.id)}>Remove</button>
                <button className='button-edit' onClick={(e)=>{
                    functions.updateHandle(postData.id)
                    click(e)
                    
                }}>Edit</button>
            </div>
        </div>
    )
}

export default Card