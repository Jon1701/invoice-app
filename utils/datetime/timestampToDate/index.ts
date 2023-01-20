import { fromUnixTime } from 'date-fns';

/**
 * Converts a UNIX timestamp to a Date object.
 *
 * @param timestamp UNIX timestamp.
 * @returns Date object.
 */
const timestampToDate = (timestamp: number | undefined): Date | undefined =>
  timestamp === undefined ? undefined : fromUnixTime(timestamp);

export default timestampToDate;
