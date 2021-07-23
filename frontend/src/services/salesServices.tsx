import httpClient from '../http-common';
import { AMOUNT, SUCCESS, PAGINATION } from 'utils/requests';

const getAmountBySellers = () => httpClient.get(`${AMOUNT}`);
const getSucessBySellers = () => httpClient.get(`${SUCCESS}`);
const getSalesPagination = (page: number) =>
    httpClient.get(`${PAGINATION}page=${page}&size=20`);

export default { getAmountBySellers, getSucessBySellers, getSalesPagination };
