import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "graphql/schema.graphql",
	documents: "graphql/query.graphql",
	ignoreNoDocuments: true,
	generates: {
		"src/graphql/types.ts": {
			plugins: ["typescript", "typescript-operations"],
			config: {
				immutableTypes: true,
			},
		},
		"src/graphql/request.ts": {
			preset: "import-types",
			plugins: [
				"typescript-graphql-request",
				{
					add: {
						content: "// @ts-nocheck",
					},
				},
			],
			presetConfig: {
				typesPath: "./types",
			},
		},
	},
};

export default config;
