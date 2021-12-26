import request from 'superagent';
const URL = 'https://activity-tracker99.herokuapp.com';


export async function postFormData(obj) {
    await request
    .post(`${URL}/formdata`)
    .send(obj);

} 
export async function getStatesDifferential() {
    const response = await request
    .get(`${URL}/api/2019/populationchange`);
    return response.body;
}