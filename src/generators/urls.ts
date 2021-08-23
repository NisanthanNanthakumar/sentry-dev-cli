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
    const { endpoint, resource, base, resource_id } = this.options;

    const klass = `${_.upperFirst(_.camelCase(endpoint))}`;
    this.log(`Add the following route under ${base.base}: \n`)    
    cli.url("\tsrc/sentry/api/urls.py", commandPath);
    this.log(`
    url(
        ${base.baseURL}${resource.replace(/_/g, '-')}/${resource_id ? `(?P<${resource.replace(/-/g, "_")}_id>[^\/]+)` : ""}$",
        ${klass}Endpoint.as_view(),
        name="sentry-api-0-${endpoint.replace(/_/g, '-')}",
    ),\n`);
  }

  async end() {
    return
  }
}
