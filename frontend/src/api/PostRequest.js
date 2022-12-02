import axios from 'axios';
const API = axios.create({baseURL: "http://localhost:5000"})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });


export const getTimelinePosts = (id)=> API.get(`/post/${id}/timeline`);
export const getTimelinePostsUser =(id) =>API.get(`/post/${id}/usertimeline`)
export const likePost = (id,userId) => API.put(`/post/${id}/like`,{userId : userId})
export const getAllPost = () =>API.get('/post')
export const deletePost = (id,userId) => API.put(`/post/${id}/${userId}/delete`)
export const getPost = (postId,data) => API.get(`/savedpost/${postId}/save`)
export const getComments=(postId)=>API.get(`/comment/getcomment/${postId}`)
export const commentPost=(data)=> API.post(`/comment/addcomment`,data)