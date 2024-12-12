import { HttpLink } from "@apollo/client";
import {
	ApolloClient,
	InMemoryCache,
	registerApolloClient,
} from "@apollo/experimental-nextjs-app-support";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			uri: "https://tuatmcc.kibe.la/api/v1",
			headers: {
				Authorization: `Bearer ${process.env.KIBELA_ACCESS_TOKEN}`,
			},
		}),
	});
});
