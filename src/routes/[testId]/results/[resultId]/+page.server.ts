import { getPurityTest } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const testData = await getPurityTest(params.testId);
    return {
        testData,
        testId: params.testId,
        answers: parseResultId(params.resultId, testData.questions.length),
    };
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
