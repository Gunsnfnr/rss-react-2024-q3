import Link from 'next/link';
import style from './Page404.module.css';

const NotFound = () => {
  return (
    <div className={style.page_wrapper}>
      <div className={style.not_found_info}>
        <div className={style.not_found}>Page not found</div>
        <Link href="/">
          <button type="button" className={style.to_main_button}>
            Back to the main page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
