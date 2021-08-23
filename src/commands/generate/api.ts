import { Command, flags } from "@oclif/command";
import cli from "cli-ux";
import * as inquirer from "inquirer";
import CommandBase from "../../command-base";

export default class Api extends CommandBase {
  static description = "Create an API endpoint";

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    // name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" }),
  };

  static args = [{ name: "resource", required: true }];

  async run() {
    const { args, flags } = this.parse(Api);
    let { baseClass } = await inquirer.prompt([
      {
        name: "baseClass",
        message: "Select a base API endpoint class",
        type: "list",
        choices: [
          // { name: "integration" },
          { name: "organization" },
          // { name: "organization_integration" },
          // { name: "project" },
          // { name: "none" },
        ],
      },
    ]);
    let endpoint = `${baseClass}_${args.resource}`.toLowerCase();
    const BaseAPI = {
      integration: {
        base: "integration",
        path: "sentry.api.bases.integration",
        class: "IntegrationEndpoint",
      },
      organization: {
        base: "organization",
        path: "sentry.api.bases.organization",
        class: "OrganizationEndpoint",
        args: ["organization"],
        baseURL: 'r"^(?P<organization_slug>[^/]+)/',
        pathParams: ["organization_slug"],
      },
      organization_integration: {
        base: "organziation_integration",
        path: "sentry.api.bases.organization_integrations",
        class: "OrganizationIntegrationBaseEndpoint",
      },
      project: {
        base: "project",
        path: "sentry.api.bases.project",
        class: "ProjectEndpoint",
      },
    } as any;
    // this.log(baseClass);
    // this.log(`Endpoint: ${endpoint}`);
    const generatorOptions = {
      endpoint,
      resource: args.resource,
      base: BaseAPI[baseClass],
      pathParams: [`${args.resource.replace(/-/g, "_")}_id`],
    };
    await this.generate("api", generatorOptions);
    await this.generate("urls", generatorOptions);
    this.log("\n\n")
    generatorOptions["endpoint"] =
      `${baseClass}_${args.resource}_details`.toLowerCase();
    await this.generate("api-details", generatorOptions);
    await this.generate("urls", generatorOptions);
  }
}
