import { randomUUID } from 'node:crypto';

import { Context, LambdaFunctionURLEvent } from 'aws-lambda';
import { beforeEach, expect, test } from 'vitest';

import { handler } from './helloWorldApi';
import { testResource } from './TestSupport/testResource';

let apiName: string;
let apiUrl: string;

beforeEach(() => {
    apiName = randomUUID();
    apiUrl = randomUUID();

    testResource.set('HelloWorldApi', {
        url: apiUrl,
        name: apiName,
        type: 'sst.aws.Function',
    });
});

test('works', async () => {
    const result = await handler({} as LambdaFunctionURLEvent, {} as Context, () => {});
    expect(result).toEqual({
        statusCode: 200,
        body: `Hello, World! (from ${apiName})`,
    });
});
