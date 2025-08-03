import { error } from '@sveltejs/kit';

type PurityTest = {
    name: string;
    description: string;
    completionConsequence?: string;
    questions: Array<string>;
};

const purityTests: Record<string, PurityTest> = {
    original: await import('./original.json'),
    sparc: await import('./sparc.json'),
};

export default purityTests;

export function getTest(testId: string) {
    if (!Object.hasOwn(purityTests, testId)) {
        error(404, 'Not Found');
    }
    return purityTests[testId];
}
