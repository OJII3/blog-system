import { GetAllPostsDocument, GetPostDocument } from "@/graphql/request";
import type { GetAllPostsQuery, GetPostQuery } from "@/graphql/types";
import { query } from "@/lib/client";

export async function generateStaticParams() {
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

	if (error) {
		throw error;
	}

	return notes.edges
		?.map((edge) => ({
			id: edge?.node?.id,
		}))
		.filter((id) => Boolean(id));
}

export default async function Blog({ params }: { params: { id: string } }) {
	const { id } = params;

	const { data, error } = await query<GetPostQuery>({
		query: GetPostDocument,
		variables: { id },
	});

	if (error) {
		throw error;
	}

	return (
		<div>
			<h1>{data.note.title}</h1>
			{data.note.content}
		</div>
	);
}
