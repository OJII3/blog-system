import { GetAllPostsDocument } from "@/graphql/request";
import type { GetAllPostsQuery } from "@/graphql/types";
import { query } from "@/lib/client";
import { Compile } from "@/lib/unified";
import Link from "next/link";
import { use } from "react";

export const HomeContainer = async () => {
	const {
		error,
		data: {
			folderFromPath: { notes },
		},
	} = await query<GetAllPostsQuery>({
		query: GetAllPostsDocument,
		variables: {
			folderPath: "https://tuatmcc.kibe.la/folders/3754",
		},
	});
	if (error) {
		throw error;
	}
	await new Promise((resolve) => setTimeout(resolve, 100));

	return (
		<main className="container mx-auto px-4 py-8">
			<div className="mb-6 text-lg font-medium text-gray-600">
				投稿数:{" "}
				<span className="font-bold text-gray-900">{notes.totalCount}</span>
			</div>
			<ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{notes.edges?.map(
					(edge) =>
						edge?.node && (
							<li key={edge.node.id}>
								<Link
									href={`/${edge.node.id}`}
									key={edge.node.id}
									className="group flex flex-col h-full p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-200"
								>
									<h2 className="text-lg font-semibold text-gray-900 mb-2">
										{edge.node.title}
									</h2>
									<div className="text-sm text-gray-500 mt-auto">
										{edge.node.createdAt}
									</div>
								</Link>
							</li>
						),
				)}
			</ol>
		</main>
	);
};
