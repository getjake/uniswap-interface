# Uniswap Interface

This is the pseduo-uniswap interface that allows user to send ether to another on the webpage.

Please install the Metamask and switch to `Rinkeby Testnet`.

Before you start, remember to edit `./lib/sanityClient.js`.

```javascript
export const client = sanityClient({
    projectId: 'YOUR_PROJECT_ID',
    dataset: 'production',
    databaseName: 'production',
    apiVersion: 'v1',
    useCdn: false,
    token: 'YOUR_SANITY_TOKEN'
})
```