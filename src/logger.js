// @flow
import colors from 'colors';

const logger = console;

export function info(message: string, value: ?string): void {
  const outputValue = value || '';
  logger.log(colors.blue(message), colors.white(outputValue));
}

export function warn(message: string): void {
  logger.log(colors.yellow(message));
}

export function error(message: string): void {
  logger.log(colors.red(message));
}
