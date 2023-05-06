import { config } from 'dotenv';
config({
  path: `.env.${process.env.NODE_ENV || 'development'}.local`,
});

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN, CONNECTION_URL, DATABASE, USERS, TIME_ZONE_OFFSET, TASKS } = process.env;
