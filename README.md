sentry-dev-cli
==============



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/sentry-dev-cli.svg)](https://npmjs.org/package/sentry-dev-cli)
[![Downloads/week](https://img.shields.io/npm/dw/sentry-dev-cli.svg)](https://npmjs.org/package/sentry-dev-cli)
[![License](https://img.shields.io/npm/l/sentry-dev-cli.svg)](https://github.com/NisanthanNanthakumar/sentry-dev-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g sentry-dev-cli
$ sentry-dev-cli COMMAND
running command...
$ sentry-dev-cli (-v|--version|version)
sentry-dev-cli/0.0.0 darwin-x64 node-v12.22.1
$ sentry-dev-cli --help [COMMAND]
USAGE
  $ sentry-dev-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`sentry-dev-cli generate`](#sentry-dev-cli-generate)
* [`sentry-dev-cli generate:analytics`](#sentry-dev-cli-generateanalytics)
* [`sentry-dev-cli generate:api FILE`](#sentry-dev-cli-generateapi-file)
* [`sentry-dev-cli help [COMMAND]`](#sentry-dev-cli-help-command)

## `sentry-dev-cli generate`

Generate boilerplate code

```
USAGE
  $ sentry-dev-cli generate

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/generate/index.ts](https://github.com/NisanthanNanthakumar/sentry-dev-cli/blob/v0.0.0/src/commands/generate/index.ts)_

## `sentry-dev-cli generate:analytics`

Create a bigquery analytics event

```
USAGE
  $ sentry-dev-cli generate:analytics

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/generate/analytics.ts](https://github.com/NisanthanNanthakumar/sentry-dev-cli/blob/v0.0.0/src/commands/generate/analytics.ts)_

## `sentry-dev-cli generate:api FILE`

Create an API endpoint

```
USAGE
  $ sentry-dev-cli generate:api FILE

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/generate/api.ts](https://github.com/NisanthanNanthakumar/sentry-dev-cli/blob/v0.0.0/src/commands/generate/api.ts)_

## `sentry-dev-cli help [COMMAND]`

display help for sentry-dev-cli

```
USAGE
  $ sentry-dev-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_
<!-- commandsstop -->
