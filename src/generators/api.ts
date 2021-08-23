import * as _ from "lodash";
import * as path from "path";
import cli from 'cli-ux'
import GeneratorBase from "../generator-base"


export default class CommandGenerator extends GeneratorBase {
  constructor(args: any, options: any) {
    super(args, options);
  }
  
  async writing() {
    this.sourceRoot(path.join(__dirname, "../../templates"));
    const commandPath = this.destinationPath(
      `src/sentry/api/endpoints/${this.options.endpoint}.py`
    );
    const opts = { ...this.options, _ };
    this.fs.copyTpl(this.templatePath(`api.py.ejs`), commandPath, opts);
  }

  async end() {
    this.log("Success!");
    this.log("To record analytics with Big Query:");
  }
}
