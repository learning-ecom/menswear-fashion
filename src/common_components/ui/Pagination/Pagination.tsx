import Assets from "../../../imports/assets.imports";
import { useSetState } from "../../../utils/functions.utils";
import './Pagination.scss'

interface IPagination {
  currentPage?: any;
  itemPerPage?: any;
  totalItems?: any;
  paginate?: any;
  setCurrentPage?: any;
}
const Pagination = (props: IPagination) => {
  const pageNumbers = [];

  // state
  const [state, setState] = useSetState({
    pageNumberLimit: 5,
    maxPageNumber: 5,
    minPageNumber: 0,
  });

  //number of page condition
  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemPerPage); i++) {
    pageNumbers.push(i);
  }

  // nextpage
  const handleNextbtn = () => {
    props.setCurrentPage(props.currentPage + 1);

    if (props.currentPage + 1 > state.maxPageNumber) {
      setState({
        maxPageNumber: state.maxPageNumber + state.pageNumberLimit,
        minPageNumber: state.maxPageNumber + state.pageNumberLimit,
      });
    }
  };

  // prevpage
  const handlePrevbtn = () => {
    props.setCurrentPage(props.currentPage - 1);

    if ((props.currentPage - 1) % state.pageNumberLimit == 0) {
      setState({
        maxPageNumber: state.maxPageNumber - state.pageNumberLimit,
        minPageNumber: state.maxPageNumber - state.pageNumberLimit,
      });
    }
  };

  return (
    <div className="pagination-container">
      <div className="product_pagination">
      <div
            className={ props.currentPage === pageNumbers[0]?"":"prev_btn"}
            onClick={handlePrevbtn}
          >
           { props.currentPage === pageNumbers[0]?"":
           "<"
          // <img src={Assets.pagination} alt=""  style={{transform: "rotate(180deg)"}}/>
           }
          </div>
       
        {pageNumbers.map((number) => {
          if (
            number < state.maxPageNumber + 1 &&
            number > state.minPageNumber
          ) {
            return (
              <div 
                key={number}
                onClick={() => props.paginate(number)}
                className={
                  props.currentPage == number
                    ? "pagination_content active"
                    : "pagination_content"
                }
              >
                {number}
              </div>
            );
          }
        })}
        <div>
        <div
            className={props.currentPage === pageNumbers[pageNumbers.length - 1]?"":"next_btn"}
            onClick={handleNextbtn}
          >
           { props.currentPage === pageNumbers[pageNumbers.length - 1]?"":
          // <img src={Assets.pagination} alt="" />
          ">"
           }
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Pagination;
