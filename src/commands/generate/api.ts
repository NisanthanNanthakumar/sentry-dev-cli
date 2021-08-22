import {Command, flags} from '@oclif/command'

export default class Api extends Command {
  static description = 'Create an API endpoint'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file', required: true}]

  async run() {
    const {args, flags} = this.parse(Api)
    if (args.generator === "api") {
      // const endpoint = await cli.prompt("Endpoint name");
      // let { baseClass }: any = await inquirer.prompt([
      //   {
      //     name: "baseClass",
      //     message: "Select a base endpoint class",
      //     type: "list",
      //     choices: [
      //       { name: "integration" },
      //       { name: "organization" },
      //       { name: "organization_integration" },
      //     ],
      //   },
      // ]);
      // this.log(baseClass);
      // this.log(`You entered: ${endpoint}`);
    }
    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /Users/nisanthannanthakumar/Documents/sentry-dev-cli/src/commands/api.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
