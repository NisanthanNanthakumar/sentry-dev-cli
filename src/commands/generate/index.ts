import { Command, flags } from "@oclif/command";
import cli from "cli-ux";
import * as inquirer from "inquirer";

export default class Generate extends Command {
  static description = "Generate boilerplate code";

  static flags = {
    help: flags.help({ char: "h" }),
  };
  static args = [];

  async run() {
    return;
  }
}
