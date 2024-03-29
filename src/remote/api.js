import axios from 'axios';

export async function getApiList(pageParam, categoryIdParam, sizeParam) {
    try {
        console.log(pageParam,categoryIdParam,sizeParam);
        const response = await axios.get(`http://34.192.1.4:8080/api/post/category/`, {
            params: {categoryId: categoryIdParam, page: pageParam, size: sizeParam }
        });
        const { content, last, totalElements, totalPages } = response.data;
        const lastVisible = last ? null : pageParam + 1;

        return { items: content, lastVisible, totalElements, totalPages };
    } catch (error) {
        console.error('에러확인 fetching data from API:', error);
        throw error;
    }
}

export const getBestApiList = async () => {
    try {
        const response = await axios.get('http://34.192.1.4:8080/api/post/normal/?page=0&size=10');
        return response.data.content;
    } catch (error) {
        console.error('Error fetching best item data from Spring:', error);
        throw error;  
};
}