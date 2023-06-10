import { Button, Typography } from '@mui/material';
import { FC } from 'react';

import { useMediaQuery } from '../../hooks/useMediaQuery';
import { DESKTOP_QUERY } from '../../utils/constants';
import { cn } from '../../utils/utils';
import style from './Slider.module.scss';

type SliderProps = {
  children: React.ReactNode,
  isOpen: boolean,
  onClose: () => void,
  title: string,
};

export const Slider: FC<SliderProps> = ({
  children,
  isOpen,
  onClose,
  title,
}) => {
  const isDesktop = useMediaQuery(DESKTOP_QUERY);

  const wrapperStyles = cn(
    style.wrapper,
    isOpen ? style.wrapperOpen : style.wrapperClosed
  );

  return (
    <div className={wrapperStyles}>
      {isDesktop && (
        <button className={style.closeButton} onClick={onClose}>
          <div className={style.buttonHoverShadow}></div>
        </button>
      )}
      <div className={style.container}>
        <Typography className={style.title} variant="h1">
          {title}
        </Typography>
        <div className={style.content}>{children}</div>
        <Button
          className={style.button}
          onClick={onClose}
          type="button"
          variant="contained"
        >
          Close
        </Button>
      </div>
    </div>
  );
};
