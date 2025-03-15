const api_endpoint = 'http://127.0.0.1:5000';

export type Title = string;
export type Text = string;
export type Video = string;

export type Question = {
	question: Text;
	answers: Text[];
	correct: number;
	explanation?: string | null;
};
export type Quiz = {
	questions: Question[];
};
type Part = Text | Quiz;
export enum PartType {
	Text,
	Quiz,
	Video
}
export interface PartUnion {
	type: PartType;
	part: Part;
	title: string;
}
interface Unit {
	title: Title;
	parts: PartUnion[];
}
export interface Course {
	id: string;
	units: Unit[];
}

export async function get_course(id: string): Promise<Course | null> {
	// const response = await fetch(`${api_endpoint}/get_vid/${id}`);
	// if (!response.ok) {
	// 	return null;
	// }
	// const json = await response.json();

	return {
		id: 'id',
		units: [
			{
				title: 'Birds',
				parts: [
					{
						title: 'Introduction',
						type: PartType.Text,
						part: 'Birds are cool!'
					},
					{
						title: 'About birds',
						type: PartType.Video,
						part: 'https://www.youtube.com/embed/jF0Id-hH9y4'
					},
					{
						title: 'Parakeets',
						type: PartType.Quiz,
						part: {
							questions: [
								{
									question: 'What is the best bird?',
									answers: ['Penguin', 'Ostrich', 'Kiwi', 'Chicken'],
									correct: 0
								}
							]
						}
					}
				]
			}
		]
	};

	return null;
}
