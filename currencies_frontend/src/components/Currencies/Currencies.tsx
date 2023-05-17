import { useRef, useLayoutEffect } from 'react';
import { CurrencySelector } from './CurrencySelector';
import { useExportContext } from '../../context/AppContext';
import styles from './Currencies.module.scss';

export const Currencies = () => {
  const currencyRef = useRef<HTMLDivElement>(null);

  const { updateWidth, currencies, handleClick } = useExportContext();

  useLayoutEffect(() => {
    if (!currencyRef.current) return;
    const width = currencyRef.current.offsetWidth;
    updateWidth(width);
  }, [updateWidth]);

  return (
    <>
      <div ref={currencyRef} className={styles.wrapper}>
        <CurrencySelector
          title='From:'
          activeCurrency={currencies.from}
          onClick={handleClick('from')}
        />
      </div>
      <div className={styles.wrapper}>
        <CurrencySelector title='To:' activeCurrency={currencies.to} onClick={handleClick('to')} />
      </div>
    </>
  );
};
