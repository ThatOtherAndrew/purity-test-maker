import { getTest } from '$lib/purity-tests';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    return { testData: getTest(params.testId) };
};
