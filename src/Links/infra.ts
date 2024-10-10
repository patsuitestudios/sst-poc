const linksTable = new sst.aws.Dynamo('LinksTable', {
    fields: {
        hk: 'string',
        sk: 'string',
    },
    primaryIndex: { hashKey: 'hk', rangeKey: 'sk' },
});

const linksApi = new sst.aws.ApiGatewayV2('LinksApi');

const linkLinksHandler = new sst.aws.Function('ListLinksHandler', {
    handler: `src/Links/apiRoutes/listLinks.handler`,
    link: [linksTable],
});
linksApi.route('GET /', linkLinksHandler.arn);

const createLinkHandler = new sst.aws.Function('CreateLinkHandler', {
    handler: `src/Links/apiRoutes/createLink.handler`,
    link: [linksTable],
});
linksApi.route('POST /', createLinkHandler.arn);

const Links = new sst.Linkable('Links', {
    properties: {
        linksTable: {
            ...linksTable.getSSTLink().properties,
        },
    },
});

export { Links };
