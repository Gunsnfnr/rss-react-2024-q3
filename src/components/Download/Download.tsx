import { useSelector } from 'react-redux';

import style from './Download.module.css';
import { RootState } from '../../store';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const Download = () => {
  const selectedCards = useSelector((state: RootState) => state.charactersCards.selectedCards);
  const numberOfSelectedCards = useSelector((state: RootState) => state.charactersCards.selectedCards.length);
  const { theme } = useContext(ThemeContext);

  const getACsv = (): string => {
    const download = (data: string) => {
      const blob = new Blob([data], { type: 'text/csv' });
      return URL.createObjectURL(blob);
    };

    const makeACsv = () => {
      const csvRows = [];
      const headers = Object.keys(selectedCards[0]);
      csvRows.push(headers.join(';'));
      selectedCards.forEach((card) => {
        const values = Object.values(card);
        csvRows.push(values.join(';'));
      });
      return csvRows.join('\n');
    };

    const resultingCSV = makeACsv();

    return download(resultingCSV);
  };

  return (
    <a
      className={theme === 'dark' ? style.button : style.button_light}
      href={getACsv()}
      download={`sw_characters_${numberOfSelectedCards}.csv`}
    >
      Download
    </a>
  );
};

export default Download;
