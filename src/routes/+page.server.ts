import { getAllPurityTests } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    return { purityTests: await getAllPurityTests() };
};
