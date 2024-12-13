import { GetAllPostsDocument, GetPostDocument } from "@/graphql/request";
import type { GetAllPostsQuery, GetPostQuery } from "@/graphql/types";
import { query } from "@/lib/client";
import { Compile } from "@/lib/unified";

export async function generateStaticParams(): Promise<{ id: string }[]> {
	const {
		data: {
			folderFromPath: { notes },
		},
		error,
	} = await query<GetAllPostsQuery>({
		query: GetAllPostsDocument,
		variables: {
			folderPath: "https://tuatmcc.kibe.la/folders/3754",
		},
	});
	await new Promise((resolve) => setTimeout(resolve, 100));

	if (error || !notes.edges?.length) {
		throw error;
	}

	return notes.edges.flatMap((edge) => {
		if (!edge?.node?.id) return [];
		return { id: edge.node.id };
	});
}

export default async function Blog({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const { data, error } = await query<GetPostQuery>({
		query: GetPostDocument,
		variables: { id },
	});
	await new Promise((resolve) => setTimeout(resolve, 100));

	if (error) {
		throw error;
	}

	console.log(data.note.content);
	const Result = await Compile(data.note.content);

	return (
		<div>
			<h1>{data.note.title}</h1>
			{Result}
		</div>
	);
}
