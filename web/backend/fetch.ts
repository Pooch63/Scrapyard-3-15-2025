const api_endpoint = 'http://127.0.0.1:5000';

export type Title = string;
export type Text = string;

interface Course {}

export async function get_course(id: string): Promise<Course | null> {
	const response = await fetch(`${api_endpoint}/get_vid/${id}`);
	if (!response.ok) {
		return null;
	}
	const json = await response.json();

	console.log(json);

	return null;
}
