import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
type Data = {
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const id = req.query.id;

	const API_ENDPOINT = process.env.API_ENDPOINT;
	const API_TOKEN = process.env.API_TOKEN;

	const userResponse = await axios.get(`${API_ENDPOINT}/users?/id=${id}`, {
		headers: {
			"x-auth-token": `${API_TOKEN}`,
		},
	});
	res.status(200).json(userResponse.data[0]);
}
