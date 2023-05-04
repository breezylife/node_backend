import { TIME_ZONE_OFFSET } from '@config';

const getNowTimeByTimeZone = () => {
  return new Date(new Date().getTime() + parseInt(TIME_ZONE_OFFSET) * 60 * 1000).toISOString();
};

export { getNowTimeByTimeZone };
