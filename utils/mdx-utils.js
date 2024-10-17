import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
        console.log(data)
    }

    return []
    console.log(data)
}



export const getPostBySlug = async (id) => {
    try {
        const { data } = await api.get(`/posts/${id}`);
        return data;
    } catch (error) {
        console.error('Erro ao buscar post:', error);
        return null;
    }
};