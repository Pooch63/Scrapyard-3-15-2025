import { get_course } from '$scripts/fetch';
import type { PageServerLoad } from '../../$types';

export const load: PageServerLoad = async ({ params }) => {
	return {
		course: await get_course(params.id),
		unit: params.unit
	};
};
