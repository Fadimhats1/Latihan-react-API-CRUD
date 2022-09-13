import React, { useContext, useState } from 'react'
import '../style/posts.css'
import { dataApiContext } from '../utils/utils'
import Card from './card'
import Modal from './modal'


const Posts = () => {
    const [modal, setModal] = useState(false);
    const dataApi = useContext(dataApiContext)

    function modalHandle(e){
        if(e.target.className == 'add-posts' || e.target.className == 'modal-bg' || e.target.className == 'close-button' || e.target.className == 'button-form' || e.target.className == 'button-edit'){
            setModal(current=>!current);
            if(dataApi.isUpdate){
                dataApi.functions.updateHandle(-1);
            }
        }
    }
    let cards = dataApi.postsData.map((data) => <Card key={data.id} postData={data} textBody={data.body} click={modalHandle} functions={dataApi.functions} />);
    
    return (
        <div>
            <h1 className='posts-title'>Posts</h1>
            <button className='add-posts' onClick={(e)=> modalHandle(e)}>
                Add Post
            </button>
            <div className='posts'>
                {cards}
            </div>
            <Modal click={modalHandle} isOpen={modal} functions={dataApi.functions} isUpdate={dataApi.isUpdate} postData={dataApi.postData} />
        </div>
    )
}

export default Posts