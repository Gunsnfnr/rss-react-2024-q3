import { Link } from "react-router-dom";
import style from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={style.page_wrapper}>
      <div className={style.not_found_info}>
        <div className={style.not_found}>Page not found</div>
        <Link to="/main">
          <button type="button" className={style.to_main_button}>
            Back to the main page
          </button>
        </Link>
      </div>
    </div>
  );
}
