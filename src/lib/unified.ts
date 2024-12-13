import { type ReactElement, createElement } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeRaw from "rehype-raw";
import rehypeReact from "rehype-react";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export async function Compile(markdown: string): Promise<ReactElement> {
	const parsed = await unified()
		.use(remarkParse, { flagment: true })
		.use(remarkMath)
		.use(remarkRehype)
		// .use(rehypeSanitize)
		.use(rehypeKatex)
		.use(rehypePrettyCode)
		.use(rehypeRaw)
		.use(rehypeStringify)
		.use(rehypeReact, {
			Fragment: Fragment,
			jsx: jsx,
			jsxs: jsxs,
			createElement: createElement,
		})
		.process(markdown);
	return parsed.result;
}
