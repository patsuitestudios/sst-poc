// eslint-disable-next-line @typescript-eslint/triple-slash-reference -- Needed so that "sst install" will work.
/// <reference path="./.sst/platform/config.d.ts" />

import { parse } from '@aws-sdk/util-arn-parser';
import { Output } from '@pulumi/pulumi';

const getDynamoEndpoint = (tableArn: Output<string>): Output<string> => {
    const region = tableArn.apply<string>((arn) => parse(arn).region);
    return region.apply((region) => `https://dynamodb.${region}.amazonaws.com`);
};

export default $config({
    app(input) {
        return {
            name: 'sst-poc',
            removal: input?.stage === 'production' ? 'retain' : 'remove',
            home: 'aws',
        };
    },
    async run() {
        sst.Linkable.wrap(sst.aws.Dynamo, (table) => ({
            properties: {
                arn: table.arn,
                name: table.name,
                endpoint: getDynamoEndpoint(table.arn),
            },
            include: [
                sst.aws.permission({
                    actions: ['dynamodb:*'],
                    resources: [table.arn, table.arn.apply((arn) => `${arn}/*`)],
                }),
            ],
        }));

        const { Links } = await import('./src/Links/infra');

        return { Links };
    },
});
