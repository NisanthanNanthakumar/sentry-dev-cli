import * as _ from "lodash";
import * as path from "path";
import GeneratorBase from "../generator-base"

import { AnalyticsGeneratorOptions } from "../types";

export default class CommandGenerator extends GeneratorBase {
  constructor(args: any, options: AnalyticsGeneratorOptions) {
    super(args, options);
  }

  async writing() {
    this.sourceRoot(path.join(__dirname, "../../templates"));
    const commandPath = this.destinationPath(
      `src/sentry/analytics/events/${this.options.fileName}`
    );
    const opts = { ...this.options, _ };
    this.fs.copyTpl(this.templatePath(`analytics.py.ejs`), commandPath, opts);
  }

  async end() {
    this.log("Success!");
    this.log("To record analytics with Big Query:");
    this.log(`
    analytics.record(
        "${this.options.event}",
        ${this.options.attributes
          .map(({ name }: { name: string }) => `${name}=${name},`)
          .join("\n")}
    )`);
  }
}
