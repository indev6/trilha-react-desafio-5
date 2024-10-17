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
        const { data } = await api.get(`/posts?select=3359724a-e29d-42a7-9c3e-3c7b11b3a005'`);
        return data;
    } catch (error) {
        console.error('Erro ao buscar post:', error);
        return null;
    }
};