import { get_course_overview } from '$scripts/fetch';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	console.log(get_course_overview());
	return { courses: get_course_overview() };
};
