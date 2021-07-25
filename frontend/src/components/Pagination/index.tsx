import { SalePage } from 'types/seller';

type Props = {
    page: SalePage;
    // eslint-disable-next-line @typescript-eslint/ban-types
    onPageChange: Function;
};

const Pagination = ({ page, onPageChange }: Props) => {
    return (
        <div className="row d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => onPageChange(page.number - 1)}
                        >
                            Previous
                        </button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{page.number + 1}</span>
                    </li>
                    <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                        <button
                            onClick={() => onPageChange(page.number + 1)}
                            className="page-link"
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
