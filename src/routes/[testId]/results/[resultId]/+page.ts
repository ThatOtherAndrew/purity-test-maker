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

    const answers = parseResultId(params.resultId, testData.questions.length);

    return { testId: params.testId, testData, answers };
};

function parseResultId(base64: string, questionLength: number): boolean[] {
    let standardBase64 = base64.replace(/-/g, '+').replace(/_/g, '/');
    while (standardBase64.length % 4) {
        standardBase64 += '=';
    }
    const bytes = new Uint8Array(atob(standardBase64).length);
    for (let i = 0; i < atob(standardBase64).length; i++) {
        bytes[i] = atob(standardBase64).charCodeAt(i);
    }
    let fullBinaryString = '';
    for (const byte of bytes) {
        fullBinaryString += byte.toString(2).padStart(8, '0');
    }
    const relevantBinary = fullBinaryString.slice(0, questionLength);
    return relevantBinary.split('').map((bit: string) => bit === '1');
}
