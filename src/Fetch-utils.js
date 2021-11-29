import request from 'superagent';
const URL = 'http://localhost:7890';


export async function postFormData(obj) {
    await request
    .post(`${URL}/formdata/data`)
    .send(obj);

} 
export async function getStatesDifferential() {
    const response = await request
    .get(`${URL}/api/2019/populationchange`);
    return response.body;
}