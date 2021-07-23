import httpClient from '../http-common';
import { AMOUNT } from 'utils/requests';

const getAmountBySellers = () => httpClient.get(`${AMOUNT}`);
export default { getAmountBySellers };
