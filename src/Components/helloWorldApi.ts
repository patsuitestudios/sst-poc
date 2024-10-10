import { LambdaFunctionURLHandler } from 'aws-lambda';
import { Resource } from 'sst';

export const handler: LambdaFunctionURLHandler = async () => {
    return {
        statusCode: 200,
        body: `Hello, World! (from ${Resource.HelloWorldApi.name})`,
    };
};
