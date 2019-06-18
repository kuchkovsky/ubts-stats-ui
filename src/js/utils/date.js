import dayjs from 'dayjs';

export const DATE_FORMAT = 'YYYY-MM-DD';

export const CUSTOM_PERIOD = 'CUSTOM_PERIOD';

export const formatDate = date => dayjs(date).format(DATE_FORMAT);

export const getPreviousSunday = () => dayjs().subtract(1, 'day').day(0)
  .format(DATE_FORMAT);

export const getToday = () => dayjs().format(DATE_FORMAT);

export const getPastMonth = (number = 1) => dayjs().subtract(number, 'month')
  .format(DATE_FORMAT);

export const getPastYear = () => dayjs().subtract(1, 'year')
  .format(DATE_FORMAT);

export const getBeginningOfTime = () => dayjs(0).format(DATE_FORMAT);
