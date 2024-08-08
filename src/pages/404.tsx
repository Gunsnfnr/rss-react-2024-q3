import style from './Page404.module.css';
import { useRouter } from 'next/router';

const Page404 = () => {
  const router = useRouter();

  const handleToMainClick = () => {
    router.push('/').catch(() => {});
  };

  return (
    <div className={style.page_wrapper}>
      <div className={style.not_found_info}>
        <div className={style.not_found}>Page not found</div>
        <button type="button" className={style.to_main_button} onClick={handleToMainClick}>
          Back to the main page
        </button>
      </div>
    </div>
  );
};

export default Page404;
