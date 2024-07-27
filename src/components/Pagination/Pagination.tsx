import style from './Pagination.module.css';

interface PaginationProps {
  handleBtn: (page: number) => void;
  page: number;
  charactersOnThisPage: number;
}

const MAX_ITEMS_PER_PAGE = 10;

const Pagination = (props: PaginationProps) => {
  const handleNavBtn = (page: number) => {
    props.handleBtn(page);
  };

  return (
    <div className={style.pagination}>
      <button
        className={style.prev}
        onClick={() => handleNavBtn(props.page - 1)}
        disabled={props.page === 1 ? true : false}
      >
        Prev
      </button>
      <div className={style.page_number}>{props.page}</div>
      <button
        className={style.next}
        onClick={() => handleNavBtn(props.page + 1)}
        disabled={props.charactersOnThisPage < MAX_ITEMS_PER_PAGE ? true : false}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
