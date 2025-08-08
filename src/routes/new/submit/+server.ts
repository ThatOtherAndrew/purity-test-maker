import { mkdir, writeFile, access } from 'fs/promises';
import { type RequestHandler } from '@sveltejs/kit';
import type { PurityTestData } from '$lib/types';
import { savePurityTest } from '$lib/utils';

export const POST: RequestHandler = async ({ request }) => {
    const testId = savePurityTest(await request.json());
    return new Response(JSON.stringify({ testId }));
};
