import type { ServerInit } from '@sveltejs/kit';
import { access, mkdir, writeFile } from 'fs/promises';

export const init: ServerInit = async () => {
    await mkdir('purity-tests', { recursive: true });

    const modules = import.meta.glob('$lib/purity-tests/*.json', { query: '?json' });
    for (const path in modules) {
        const json = await modules[path]();
        const fileName = path.split('/').pop();
        const filePath = `purity-tests/${fileName}`;
        try {
            await access(filePath);
        } catch {
            console.log(`Writing missing purity test file: ${fileName}`);
            writeFile(filePath, JSON.stringify(json, null, 2));
        }
    }
};
