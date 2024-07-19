import { Link } from 'react-router-dom';
import style from './PageNotFound.module.css';

export default function PageNotFound() {
  return (
    <div className={style.page_wrapper}>
      <div className={style.not_found_info}>
        <div className={style.not_found}>Page not found</div>
        <Link to="/">
          <button type="button" className={style.to_main_button}>
            Back to the main page
          </button>
        </Link>
      </div>
    </div>
  );
}
