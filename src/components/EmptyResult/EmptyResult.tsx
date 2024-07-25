import { useContext } from 'react';
import style from './EmptyResult.module.css';
import { ThemeContext } from '../../context/themeContext';

interface Props {
  searchQuery: string;
}

const EmptyResult = (props: Props) => {
  const getLastSearch = (): string => {
    return localStorage.getItem('gunsnfnr.swQuery') ?? '';
  };
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === 'dark' ? style.empty : style.empty_light}>
      <div>
        Nothing was found for&nbsp;the&nbsp;search&nbsp;term&nbsp;&quot;
        {props.searchQuery ? props.searchQuery : getLastSearch()}
        &quot;.
      </div>
      <div>Don&apos;t forget, we are looking for the Star Wars characters o_0</div>
    </div>
  );
};

export default EmptyResult;
