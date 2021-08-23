import { Command, flags } from "@oclif/command";
import cli from "cli-ux";
import * as inquirer from "inquirer";
import CommandBase from "../../command-base";

export default class Analytics extends CommandBase {
  static description = "Create a bigquery analytics event";

  static flags = {
    help: flags.help({ char: "h" }),
  };
  static args = [];

  // TODO(nisanthan): Figure out how to run validation cleanly. Put logic in CommandBase
  validate_event(event: string) {
    return event.split(".").length == 2 && event === event.toLowerCase()
  }
  validate_attributes(attributes: any) {

  }
  async run() {
    const event = await cli.prompt("Event type");

    let add = true;
    const attributes = [];

    while (add) {
      if (attributes.length) {
        add = await cli.confirm("Add attribute?");
      }
      if (!add) {
        break;
      }
      const responses = await inquirer.prompt([
        { type: "input", name: "name", message: "Attribute name:" },
        {
          name: "type",
          message: "Attribute type",
          type: "list",
          choices: [{ name: "string" }, { name: "integer" }],
        },
        { name: "required", type: "confirm", message: "Required?" },
      ]);
      attributes.push(responses);
    }

    this.generate("analytics", {
      fileName: `${event.replace(".", "_")}.py`,
      event,
      attributes,
    });
  }
}
