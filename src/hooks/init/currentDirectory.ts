import {Hook} from '@oclif/config'
import * as path from "path"
const hook: Hook<'init'> = async function (_opts) {
  let isSentryDir = path.basename(path.resolve()) === "sentry";
  if (!isSentryDir) {
    this.error(new Error("Working directory not 'sentry'"), {
      exit: 0,
    });
  }
}

export default hook
