import { GenericContainer, StartedTestContainer } from 'testcontainers';
import { GlobalSetupContext } from 'vitest/node';

let container: StartedTestContainer;

const dockerDynamoEndpoint = 'dockerDynamoEndpoint';

export const setup = async ({ provide }: GlobalSetupContext) => {
    container = await new GenericContainer('amazon/dynamodb-local').withExposedPorts(8000).start();

    const mappedPort = container.getMappedPort(8000);
    provide(dockerDynamoEndpoint, `http://localhost:${mappedPort}`);
};

export const teardown = async () => {
    await container.stop();
};

declare module 'vitest' {
    export interface ProvidedContext {
        [dockerDynamoEndpoint]: string;
    }
}
