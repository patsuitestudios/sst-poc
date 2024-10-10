import { beforeEach, vi } from 'vitest';

import { testResource } from './src/Components/TestSupport/testResource';

const fakeResource = new Proxy(
    {},
    {
        get: (_target, prop) => {
            const fakeResource = testResource.get(prop);
            if (fakeResource == null) {
                throw new Error(`Resource "${String(prop)}" was not set for testing using "testResource.set()"`);
            }
            return fakeResource;
        },
        set: (target, prop): boolean => {
            throw new Error(
                `Test resource "${String(prop)}" cannot be set using assignment. Use "testResource.set()" instead`
            );
        },
    }
);

beforeEach(() => {
    testResource.clear();
});

vi.mock('sst', (importOriginal) => ({
    ...importOriginal,
    Resource: fakeResource,
}));
