import './App.css'
import axios from 'axios'
import React, { Component } from 'react'
import { URL_API } from './utils/utils'
import Posts from './component/posts'
import Navbar from './component/navbar'
import DataApiProvider from './utils/utils'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      isUpdate: false,
      postData: {
        id: 1,
        userId: 1,
        title: '',
        body: '',
      }
    }
  }

  getFromAPI = () => {
    axios.get(`${URL_API}?_sort=id&_order=desc`).then((res) => {
      this.setState({
        posts: res.data
      })
    })
  }

  componentDidMount() {
    this.getFromAPI()
  }
  
  removeHandle = (id) =>{
    axios.delete(`${URL_API}/${id}`).then((res)=>{
      console.log(res);
      this.getFromAPI();
    })
  }

  postToApi = () => {
    axios.post(URL_API, this.state.postData).then((res) => {
      console.log(res);
      this.getFromAPI();
    })
  }

  putToApi = (id) =>{
    axios.put(`${URL_API}/${id}`, this.state.postData).then((res) => {
      console.log(res);
      this.getFromAPI();
    })
  }

  updateHandle = (id) =>{
    this.setState({isUpdate: !this.state.isUpdate});
    let dataUpdate = id != -1 ? this.state.posts.find((data)=> data.id == id) : {
      id: 1,
      userId: 1,
      title: '',
      body: '',
    };
    this.setState({
      postData: dataUpdate
    })
  }


  inputChangeHandle = (e) => {
    let newPostData = { ...this.state.postData }
    if(!this.state.isUpdate)
      newPostData['id'] = new Date().getTime();
    newPostData[e.target.name] = e.target.value
    this.setState({ postData: newPostData })
  }

  submitHandle = (id) => {
    if(!this.state.isUpdate)
      this.postToApi();
    else
      this.putToApi(id)
  }


  render() {
    const props = {
      postsData: this.state.posts,
      isUpdate: this.state.isUpdate,
      postData: this.state.postData,
      functions: {
        submitHandle: this.submitHandle,
        changeHandle: this.inputChangeHandle,
        updateHandle: this.updateHandle,
        removeHandle: this.removeHandle,
      }
    }
    return (
      <div className='app'>
        <Navbar />
        <Body>
          <DataApiProvider values={props}>
            <Posts />
          </DataApiProvider>
        </Body>
      </div>
    )
  }
}

export function Body({ children }) {
  return (
    <div className='body'>
      {children}
    </div>
  )
}