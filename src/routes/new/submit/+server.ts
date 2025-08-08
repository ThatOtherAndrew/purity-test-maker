import { mkdir, writeFile, access } from 'fs/promises';
import { type RequestHandler } from '@sveltejs/kit';
import type { PurityTestData } from '$lib/types';

export const POST: RequestHandler = async ({ request }) => {
    const data: PurityTestData = await request.json();
    await mkdir('purity-tests', { recursive: true });

    const baseFileName = data.name
        .trim()
        .toLowerCase()
        .replace(/[\s_]+/g, '-')
        .replace(/[^a-z0-9-]/g, '');

    let suffix = 1;
    let testId = baseFileName;
    while (true) {
        try {
            await access(`purity-tests/${testId}.json`);
            suffix += 1;
            testId = `${baseFileName}-${suffix}`;
        } catch {
            break;
        }
    }

    await writeFile(`purity-tests/${testId}.json`, JSON.stringify(data, null, 2));
    return new Response(JSON.stringify({ testId }));
};
