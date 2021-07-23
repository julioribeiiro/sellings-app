import httpClient from '../http-common';
import { AMOUNT, SUCCESS } from 'utils/requests';

const getAmountBySellers = () => httpClient.get(`${AMOUNT}`);
const getSucessBySellers = () => httpClient.get(`${SUCCESS}`);

export default { getAmountBySellers, getSucessBySellers };
