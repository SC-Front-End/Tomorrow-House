import axios from 'axios';

export async function getApiList(pageParam, categoryIdParam, sizeParam) {
    try {
        console.log(pageParam,categoryIdParam,sizeParam);
        const response = await axios.get(`http://mini.jh1105.xyz:5305/api/post/category/`, {
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