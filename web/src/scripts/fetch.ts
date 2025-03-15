const api_endpoint = 'http://127.0.0.1:5000';

export type Title = string;
export type Text = string;
export type Video = string;

export type Question = {
	question: Text;
	answers: Text[];
	correct: number;
	explanations?: (string | null)[] | null;
};
export type Quiz = {
	questions: Question[];
};
type Part = Text | Quiz;
export enum PartType {
	Text = 'text',
	Quiz = 'quiz',
	Video = 'video',
	Article = 'article'
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

// function json_to_course(json: Record<string, any>): Course | 'error' {
// 	let name = json['unit-name'];
// 	if (name == null) return 'error';
// 	let parts = json['sections'];
// 	if (parts == null) return 'error';

// 	let course: Course = {
// 		id: name,
// 		units: []
// 	};

// 	let unit: Unit = { title: name, parts: [] };

// 	for (let ind = 0; ind < parts.length; ind++) {
// 		let part = parts[ind];
// 		let name = part['name'];
// 		let inner = part['part'];
// 		let next: PartUnion;
// 		switch (inner['type']) {
// 			case 'video': {
// 				let vid = inner['video']['url'];
// 				next = { type: PartType.Video, part: vid, title: name };
// 				break;
// 			}
// 			case 'text': {
// 				let text = inner['text'];
// 				next = { type: PartType.Text, part: text, title: name };
// 				break;
// 			}
// 			case 'quiz': {
// 				let questions = inner['quiz']['questions'];
// 				let quiz: Question[] = [];
// 				for (let q of questions) {
// 					let question = q['question'];
// 					let answers = q['answers'];
// 					let correct = q['correct'];
// 					let explanations = q['explanations'];
// 					quiz.push({
// 						question: question,
// 						answers: answers,
// 						correct: correct,
// 						explanations: explanations
// 					});
// 				}
// 				next = { type: PartType.Quiz, part: { questions: quiz }, title: name };
// 				break;
// 			}
// 			default:
// 				return 'error';
// 		}
// 		unit.parts.push(next);
// 	}

// 	return course;
// }
// console.log(
// 	json_to_course({
// 		'unit-name': 'Birds',
// 		sections: [
// 			{
// 				name: 'A Government Conspiracy',
// 				type: 'video | text | article | quiz',
// 				text: "Birds ain't real. And that's fax."
// 			},

// 			{
// 				name: ' Birds in The Wild Article',
// 				type: 'article',
// 				text: 'Birds aren’t real. For decades, people have been deceived into believing that birds are just harmless creatures of nature. The truth is far more sinister—birds are government surveillance drones designed to monitor and control the population. This massive operation has been in place since at least the 1950s, when real birds were systematically replaced with robotic replicas. Bird drones run on advanced solar energy, recharging themselves while perched on power lines. That’s why you always see them sitting there—they’re not resting, they’re refueling. These machines use precision-engineered wings, powered by micro-servos and artificial muscles, allowing them to mimic real bird movement perfectly. Their flight patterns are programmed to blend seamlessly with the environment, making them nearly undetectable. Every “bird” is outfitted with high-resolution cameras hidden behind their fake eyes, picking up facial recognition data and tracking movements. Their beaks contain ultra-sensitive microphones capable of recording conversations from great distances. Bird drones transmit everything they collect directly to government servers via encrypted signals. Many are equipped with 5G technology, ensuring a constant stream of surveillance data. What people assume is bird poop is actually liquid tracking technology. These droppings contain microscopic RFID trackers and chemical markers that allow government agencies to monitor individuals in real-time. The evidence is everywhere—just look at the birds around you. Have you ever seen a baby pigeon? No, because they don’t exist. The truth is hiding in plain sight, and it’s time to wake up. Birds aren’t real. They are watching us.</p>\n'
// 			},

// 			{
// 				name: ' Birds in The Wild Video',
// 				type: 'video',
// 				url: 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/27e97d4eb95d654b098a263e4b6e5e4430b9944a_birds_aren_t_real______.mp4'
// 			},

// 			{
// 				name: 'Another Article',
// 				type: 'article',
// 				text: ''
// 			}
// 		]
// 	})
// );
export function get_course_overview(): { id: string; name: string }[] {
	return [
		{
			id: 'birdfever',
			name: "Birds - They're Everywhere!"
		}
	];
}
export async function get_course(id: string): Promise<Course | null> {
	// const response = await fetch(`${api_endpoint}/get_vid/${id}`);
	// if (!response.ok) {
	// 	return null;
	// }
	// const json = await response.json();

	return {
		id: 'Birds',
		units: [
			{
				title: 'Birds',
				parts: [
					{
						title: 'A Government Conspiracy',
						type: PartType.Text,
						part: '...'
					},

					{
						title: 'Introduction to Birds!',
						type: PartType.Text,
						part: 'Birds are pretty cool!'
					},

					{
						title: ' Birds in The Wild Article',
						type: PartType.Article,
						part: 'Birds aren’t real. For decades, people have been deceived into believing that birds are just harmless creatures of nature. The truth is far more sinister—birds are government surveillance drones designed to monitor and control the population. This massive operation has been in place since at least the 1950s, when real birds were systematically replaced with robotic replicas. Bird drones run on advanced solar energy, recharging themselves while perched on power lines. That’s why you always see them sitting there—they’re not resting, they’re refueling. These machines use precision-engineered wings, powered by micro-servos and artificial muscles, allowing them to mimic real bird movement perfectly. Their flight patterns are programmed to blend seamlessly with the environment, making them nearly undetectable. Every “bird” is outfitted with high-resolution cameras hidden behind their fake eyes, picking up facial recognition data and tracking movements. Their beaks contain ultra-sensitive microphones capable of recording conversations from great distances. Bird drones transmit everything they collect directly to government servers via encrypted signals. Many are equipped with 5G technology, ensuring a constant stream of surveillance data. What people assume is bird poop is actually liquid tracking technology. These droppings contain microscopic RFID trackers and chemical markers that allow government agencies to monitor individuals in real-time. The evidence is everywhere—just look at the birds around you. Have you ever seen a baby pigeon? No, because they don’t exist. The truth is hiding in plain sight, and it’s time to wake up. Birds aren’t real. They are watching us.</p>\n'
					},

					{
						title: ' Birds in The Wild Video',
						type: PartType.Video,
						part: 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/27e97d4eb95d654b098a263e4b6e5e4430b9944a_birds_aren_t_real______.mp4'
					},

					{
						title: 'Another Article',
						type: PartType.Article,
						part: 'For generations, we have marveled at the beauty of birds, watching them soar through the skies and chirp in the trees. But what if I told you that everything we know about birds is a carefully constructed illusion? The shocking reality is that birds are not the innocent creatures of nature we believe them to be; they are, in fact, high-tech surveillance drones created by the government to monitor our every move. This covert operation dates back to the 1950s, when the government initiated a secret program to replace real birds with robotic replicas. These bird drones are equipped with advanced solar panels, allowing them to recharge while perched on power lines, giving the illusion of resting. Their wings are engineered with precision, utilizing micro-servos and artificial muscles to mimic the natural movements of real birds flawlessly. Every bird drone is outfitted with high-resolution cameras cleverly concealed behind their artificial eyes, enabling them to capture facial recognition data and track individuals in real-time. Their beaks are not just for show; they house ultra-sensitive microphones capable of picking up conversations from impressive distances. The data collected is transmitted directly to government servers via encrypted signals, ensuring that our private lives are under constant surveillance. You might think that the droppings you see on your car or sidewalk are just a nuisance, but they are actually a sophisticated form of tracking technology. These "bird droppings" contain microscopic RFID trackers and chemical markers that allow government agencies to monitor our movements and activities without us even realizing it. Consider this: have you ever noticed how few baby pigeons you see? That’s because they don’t exist—another piece of evidence in this elaborate ruse. The truth is hiding in plain sight, and it’s time to open our eyes. Birds aren’t real; they are watching us, gathering data, and reporting back to the authorities. The next time you see a bird, remember: it might just be a government spy in disguise.'
					},

					{
						title: 'Final Quiz!',
						type: PartType.Quiz,
						part: {
							questions: [
								{
									question:
										'Are birds natural and have they evolved without government intervention?',
									answers: ['1. Yes', '2. No'],
									correct: 2
								}
							]
						}
					}
				]
			}
		]
	};
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
