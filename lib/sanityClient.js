import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'YOUR_PROJECT_ID',
    dataset: 'production',
    databaseName: 'production',
    apiVersion: 'v1',
    useCdn: false,
    token: 'YOUR_SANITY_TOKEN'
})