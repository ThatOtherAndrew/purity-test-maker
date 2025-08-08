import { type RequestHandler } from '@sveltejs/kit';
import { savePurityTest } from '$lib/utils';

export const POST: RequestHandler = async ({ request }) => {
    const testId = savePurityTest(await request.json());
    return new Response(JSON.stringify({ testId }));
};
