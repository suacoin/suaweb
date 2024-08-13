import axios from 'axios';

class Suatokens {
    constructor(baseURL = 'https://api.suatokens.com/') {
        this.baseURL = baseURL;
        this.apiClient = this.createApiClient();
    }

    createApiClient() {
        return axios.create({
            baseURL: this.baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    setNodeURL(url) {
        this.baseURL = url;
        this.apiClient = this.createApiClient();
    }

    async createToken(ticker, name, whitepaper, hash, block, decimals, quantity, mintable, minter, signature, payer) {
        try {
            const response = await this.apiClient.post('/token/create', {
                ticker: ticker,
                name: name,
                whitepaper: whitepaper,
                hash: hash,
                block: block,
                decimals: decimals,
                quantity: quantity,
                mintable: mintable,
                minter: minter,
                signature: signature,
                payer: payer
            });
            return response.data;
        } catch (error) {
            console.error('Error creating token:', error);
        }
    }

    async transferToken(token, to, from, hash, block, amount, signature, payer) {
        try {
            const response = await this.apiClient.post('/transfers/create', {
                token: token,
                to: to,
                from: from,
                hash: hash,
                block: block,
                amount: amount,
                signature: signature,
                payer: payer
            });
            return response.data;
        } catch (error) {
            console.error('Error creating transfer:', error);
        }
    }

    async mintTokens(token, previous, amount, hash, block, quantity, signature, payer) {
        try {
            const response = await this.apiClient.post('/mints/create', {
                token: token,
                previous: previous,
                amount: amount,
                hash: hash,
                block: block,
                quantity: quantity,
                signature: signature,
                payer: payer
            });
            return response.data;
        } catch (error) {
            console.error('Error minting tokens:', error);
        }
    }

    async listTokens(token = '', address = '') {
        try {
            const params = {};
            if (token) params.token = token;
            if (address) params.address = address;

            const response = await this.apiClient.get('/token/list', {
                params
            });
            return response.data;
        } catch (error) {
            console.error('Error listing tokens:', error);
        }
    }

    async listMints(token = '') {
        try {
            const params = {};
            if (token) params.token = token;

            const response = await this.apiClient.get('/mints/list', {
                params
            });
            return response.data;
        } catch (error) {
            console.error('Error listing mints:', error);
        }
    }

    async listTransfers(token = '') {
        try {
            const params = {};
            if (token) params.token = token;

            const response = await this.apiClient.get('/transfers/list', {
                params
            });
            return response.data;
        } catch (error) {
            console.error('Error listing transfers:', error);
        }
    }

    async getTokenTransfersTotal(token) {
        try {
            const response = await this.apiClient.get('/transfers/total', {
                params: {
                    token: token,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching token transfers total:', error);
        }
    }

    async listTransfersForAddress(token, address) {
        try {
            const response = await this.apiClient.get('/transfers/list', {
                params: {
                    token: token,
                    address: address,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error listing transfers for address:', error);
        }
    }


    async getBalance(token, address) {
        try {
            const response = await this.apiClient.get(`/balance`, {
                params: {
                    token: token,
                    address: address,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching balance:', error);
        }
    }

    async getTransfer(id) {
        try {
            const response = await this.apiClient.get(`/transfers/get`, {
                params: {
                    id: id,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching transfer:', error);
        }
    }

    async listNodes() {
        try {
            const response = await this.apiClient.get('/node/list');
            return response.data;
        } catch (error) {
            console.error('Error listing nodes:', error);
        }
    }

    async getAvgFee() {
        try {
            const response = await this.apiClient.get('/getavgfee');
            return response.data;
        } catch (error) {
            console.error('Error fetching average fee:', error);
        }
    }

    async getHoldersCount(token) {
        try {
            const response = await this.apiClient.get('/holders', {
                params: {
                    token: token,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching holders count:', error);
        }
    }

    async getBlockCount() {
        try {
            const response = await this.apiClient.get('/blockcount');
            return response.data;
        } catch (error) {
            console.error('Error fetching block count:', error);
        }
    }

}

export default Suatokens;
