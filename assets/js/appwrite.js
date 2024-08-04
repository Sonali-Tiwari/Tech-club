import { Client,Account } from "appwrite";
const client = new Client()
 .setEndpoint('https://cloud.appwrite.io/v1')
 .setProject('https://cloud.appwrite.io/v1');

 const account =new Account(client)

 export{account,client};
