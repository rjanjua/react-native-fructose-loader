// @flow
import glob from 'glob';

export function loadStories(pattern: string): string[] {
  // Get the files
  return glob.sync(pattern);
}
