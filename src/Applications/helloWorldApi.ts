export const helloWorldApi = new sst.aws.Function('HelloWorldApi', {
    url: true,
    handler: 'src/Components/helloWorldApi.handler',
});
