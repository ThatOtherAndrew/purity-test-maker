import type { PageServerLoad } from './$types';
import { getPurityTest } from '$lib/utils';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
    let purityTest;
    try {
        purityTest = await getPurityTest(params.testId);
    } catch (err) {
        if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
            error(404, 'Not Found');
        } else {
            throw err;
        }
    }

    return { testData: purityTest };
};
