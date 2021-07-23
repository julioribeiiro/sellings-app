import { SELLERS } from 'utils/requests';
import httpClient from '../http-common';

const getSellers = () => httpClient.get(`${SELLERS}`);

export default { getSellers };
