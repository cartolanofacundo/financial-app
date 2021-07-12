import axios from "axios";

const baseURL = 'https://morning-meadow-12976.herokuapp.com/api'

const financeApi = axios.create({baseURL});






export default financeApi;