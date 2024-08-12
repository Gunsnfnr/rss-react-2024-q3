'use client';
import { useContext } from 'react';
import style from './EmptyResult.module.css';
import { ThemeContext } from '../../context/themeContext';
import { useSearchParams } from 'next/navigation';

const EmptyResult = () => {
  const { theme } = useContext(ThemeContext);

  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  return (
    <section className={theme === 'dark' ? style.empty : style.empty_light}>
      <div>
        Nothing was found for&nbsp;the&nbsp;search&nbsp;term&nbsp;&quot;
        {search}&quot;.
      </div>
      <div>Don&apos;t forget, we are looking for the Star Wars characters o_0</div>
    </section>
  );
};

export default EmptyResult;
