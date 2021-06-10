import request from '../utility/request';

export default {
    insertOneFood: async (data) => {
        try {
            const result = await request.post('/food', data);
            return result.data;
        } catch (error) {
            return await Promise.reject(error);
        }
    },
    getManyFood: async ({ limit, offset }) => {
        try {
            const result = await request.get('/food');
            return result.data;
        } catch (error) {
            return await Promise.reject(error);
        }
    },
    getOneFood: async id => {
        try {
            const result = await request.get(`/food/${id}`);
            return result.data;
        } catch (error) {
            return await Promise.reject(error);
        }
    },
}