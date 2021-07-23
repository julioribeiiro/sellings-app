import Pagination from 'components/Pagination';
import { useEffect } from 'react';
import { useState } from 'react';
import { SalePage } from 'types/seller';
import salesServices from 'services/salesServices';

const DataTable = () => {
    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0,
        numberOfElements: 0,
    });

    const changePage = (index: number) => {
        setPageNumber(index);
    };

    useEffect(() => {
        salesServices
            .getSalesPagination(pageNumber)
            .then(response => {
                const data = response.data as SalePage;
                setPage(data);
                console.log(data.content);
            })
            .catch(error => console.log('Something went wrong', error));
    }, [pageNumber]);

    return (
        <>
            <Pagination page={page} onPageChange={changePage} />
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Seller</th>
                            <th>Visited Clients</th>
                            <th>Closed Deals</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(sale => (
                            <tr key={sale.id}>
                                <td>{sale.date}</td>
                                <td>{sale.seller.name}</td>
                                <td>{sale.visited}</td>
                                <td>{sale.deals}</td>
                                <td>{sale.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default DataTable;
