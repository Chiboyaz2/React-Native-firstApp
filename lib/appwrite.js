import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68068ff2001b42743bc0')
    .setPlatform('dev.first-app');

export const account = new Account(client)
export const avatars = new Avatars(client)
