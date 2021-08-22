import * as Generator from "yeoman-generator";


export default class GeneratorBase extends Generator {
  constructor(args: any, options: any) {
    super(args, options, {customInstallTask: true});
  }
}
