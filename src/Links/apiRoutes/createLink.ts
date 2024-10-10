import { randomUUID } from 'node:crypto';

import { APIGatewayProxyEventV2, APIGatewayProxyHandlerV2 } from 'aws-lambda';
import { APIGatewayProxyStructuredResultV2 } from 'aws-lambda/trigger/api-gateway-proxy';

import { linkDataGateway, linkDecoderWithoutLinkId, LinkWithoutLinkId } from '../linkDataGateway';

export const createLink = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyStructuredResultV2> => {
    let linkParams: LinkWithoutLinkId;

    try {
        linkParams = linkDecoderWithoutLinkId.forceDecode(JSON.parse(event.body ?? ''));
    } catch (err) {
        console.error('Invalid input', err);
        return {
            statusCode: 400,
        };
    }

    try {
        const linkId = randomUUID();

        await linkDataGateway.put({
            linkId,
            ...linkParams,
        });
        return {
            statusCode: 201,
            body: JSON.stringify({
                linkId,
            }),
        };
    } catch (err) {
        console.error('Failed to list links', err);
        return {
            statusCode: 500,
        };
    }
};

export const handler: APIGatewayProxyHandlerV2 = createLink;
