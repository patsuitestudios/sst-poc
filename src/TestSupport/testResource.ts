import type { Resource } from 'sst';

let fakeResource: Record<string | symbol, unknown> = {};

const get = (name: string | symbol): unknown => fakeResource[name] ?? null;

const set = <TKey extends keyof Resource>(name: TKey, value: Resource[TKey]) => {
    fakeResource[name] = value;
};

const clear = () => {
    fakeResource = {};
};

export const testResource = {
    get,
    set,
    clear,
};
