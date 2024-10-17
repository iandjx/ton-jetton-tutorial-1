import { Config } from '@ton/blueprint';

import { getHttpEndpoint } from '@orbs-network/ton-access';

export const config: Config = {
    network: {
        endpoint: 'https://toncenter.com/api/v2/jsonRPC',
        type: 'testnet',
        version: 'v2',
        // key: 'YOUR_API_KEY',
        // key: 'qvNJpzws.Prng79Kiw9hZfML1rAL7nJ8PUshCbbwY',
    },
};
