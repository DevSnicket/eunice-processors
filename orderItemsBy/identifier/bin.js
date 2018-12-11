#!/usr/bin/env node
const
	callWithProcessStandardStreamsOfYaml = require("../../callWithProcessStandardStreamsOfYaml"),
	orderItemsByIdentifier = require("./");

callWithProcessStandardStreamsOfYaml(
	parameters => orderItemsByIdentifier(parameters.items),
);