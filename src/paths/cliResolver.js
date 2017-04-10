
// @flow
import CliPathConfig from './CliPathConfig';

type CliArguments = {
  searchDir: ?string | string[],
  outputFile: ?string,
  pattern: ?string,
};

export default function cliResolver(yargv: CliArguments): CliPathConfig {
  if (!yargv || typeof yargv !== 'object') {
    return new CliPathConfig();
  }

  const config: CliPathConfig = new CliPathConfig();

  if (yargv.searchDir && Array.isArray(yargv.searchDir)) {
    config.searchDir = yargv.searchDir;
  } else if (yargv.searchDir) {
    config.searchDir = [yargv.searchDir];
  }

  if (yargv.outputFile) {
    config.outputFile = yargv.outputFile;
  }

  if (yargv.pattern) {
    config.pattern = yargv.pattern;
  }

  return config;
}
