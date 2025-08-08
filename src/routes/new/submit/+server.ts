import { mkdir, writeFile, access } from 'fs/promises';
import type { RequestHandler } from '@sveltejs/kit';

export type PurityTestSubmission = {
    name: string;
    description: string;
    completionConsequence: string;
    questions: string[];
};

export const POST: RequestHandler = async ({ request }) => {
    const data: PurityTestSubmission = await request.json();
    await mkdir('purity-tests', { recursive: true });

    const baseFileName = data.name
        .trim()
        .toLowerCase()
        .replace(/[\s_]+/g, '-')
        .replace(/[^a-z0-9-]/g, '');

    let suffix = 1;
    let filePath = `purity-tests/${baseFileName}.json`;
    while (true) {
        try {
            await access(filePath);
            suffix += 1;
            filePath = `purity-tests/${baseFileName}-${suffix}.json`;
        } catch {
            break;
        }
    }

    await writeFile(filePath, JSON.stringify(data, null, 2));
    console.log(data);
    return new Response();
};
