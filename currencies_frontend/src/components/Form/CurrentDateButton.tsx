import { Button } from '@mui/material';
import dayjs from 'dayjs';
import { useRecoilState } from 'recoil';

import { useMediaQuery } from '../../hooks/useMediaQuery';
import { formValuesState } from '../../state';
import { DATE_FORMAT, DESKTOP_QUERY } from '../../utils/constants';
import style from './Form.module.scss';

export const CurrentDateButton = () => {
  const [values, setValues] = useRecoilState(formValuesState);
  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  const currentDate = dayjs().format(DATE_FORMAT);

  const handleClick = () => {
    setValues((prev) => ({ ...prev, date: { isValid: true, value: currentDate } }));
  };

  if (!isDesktop || currentDate === values.date.value) return null;

  return (
    <Button className={style.currentDateButton} onClick={handleClick} variant="contained">
      Current Date
    </Button>
  );
};
