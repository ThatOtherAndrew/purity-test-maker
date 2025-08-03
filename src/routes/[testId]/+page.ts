import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    let testData;
    try {
        testData = await import(`$lib/purity-tests/${params.testId}.json`);
    } catch (e) {
        if (e instanceof Error && e.message.startsWith('Unknown variable dynamic import:')) {
            error(404, 'Not Found');
        } else {
            throw e;
        }
    }

    return { testData };
};
