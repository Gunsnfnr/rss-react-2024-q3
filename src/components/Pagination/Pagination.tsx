import style from './Pagination.module.css';

export default function Pagination() {
  return (
    <div className={style.pagination}>
      <button className={style.prev}>Prev</button>
      <div className={style.page_number}>1</div>
      <button className={style.next}>Next</button>
    </div>
  );
}
