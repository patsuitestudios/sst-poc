// eslint-disable-next-line @typescript-eslint/triple-slash-reference -- Needed so that "sst install" will work.
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
    app(input) {
        return {
            name: 'typescript-starter',
            removal: input?.stage === 'production' ? 'retain' : 'remove',
            home: 'aws',
        };
    },
    async run() {
        // TODO: can this be a normal import?
        const { helloWorldApi } = await import('./src/Applications/helloWorldApi');
        return {
            helloWorldApi: helloWorldApi.url,
        };
    },
});
