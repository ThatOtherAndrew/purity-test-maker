import type { PageServerLoad } from './$types';
import { getPurityTest } from '$lib/utils';

export const load: PageServerLoad = async ({ params }) => {
    return { testData: await getPurityTest(params.testId) };
};
