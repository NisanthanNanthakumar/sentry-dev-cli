import Command from "@oclif/command";
import { createEnv } from "yeoman-environment";
import Environment = require("yeoman-environment");

type EnvironmentOptions = Omit<Environment.Options, "run">;

export default abstract class CommandBase extends Command {
  protected async generate(type: string, generatorOptions: object = {}) {
    const env: EnvironmentOptions = createEnv();

    env.register(
      require.resolve(`./generators/${type}`),
      `sentry-dev-cli:${type}`,
    )
    await env.run(`sentry-dev-cli:${type}`, {...generatorOptions})

  }
}
