import style from "./EmptyResult.module.css";

interface Props {
  searchQuery: string;
}

const EmptyResult = (props: Props) => {
  const getLastSearch = (): string => {
    return localStorage.getItem("gunsnfnr.swQuery") ?? "";
  };

  return (
    <div className={style.empty}>
      <div className={style.no_result}>
        Nothing was found for&nbsp;the&nbsp;search&nbsp;term&nbsp;&quot;
        {props.searchQuery ? props.searchQuery : getLastSearch()}
        &quot;.
      </div>
      <div className={style.no_result}>
        Don&apos;t forget, we are looking for the Star Wars characters o_0
      </div>
    </div>
  );
};

export default EmptyResult;
