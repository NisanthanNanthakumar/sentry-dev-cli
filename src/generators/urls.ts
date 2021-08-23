import * as _ from "lodash";
import * as path from "path";
import cli from "cli-ux";

import GeneratorBase from "../generator-base";

export default class CommandGenerator extends GeneratorBase {
  constructor(args: any, options: any) {
    super(args, options);
  }

  async writing() {
    const commandPath = this.destinationPath(`src/sentry/api/urls.py`);
    const { endpoint, resource, base: {baseURL}, resource_id } = this.options;

    const klass = `${_.upperFirst(_.camelCase(endpoint))}`;
    this.log(`url(
        ${baseURL}${resource.replace(/_/g, '-')}/${resource_id ? `(?P<${resource.replace(/-/g, "_")}_id>[^\/]+)` : ""}$",
        ${klass}Endpoint.as_view(),
        name="sentry-api-0-${endpoint.replace(/_/g, '-')}",
    ),`);

    cli.url("src/sentry/api/urls.py", commandPath);
  }

  async end() {
    // this.log("Success!");
    // this.log("To record analytics with Big Query:");
  }
}
