export default {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-app-uploads-lewis',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://wss3ruehq3.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_4ZG84jEXK',
    APP_CLIENT_ID: '7kp7hmder9be2qh8ki0ajg23vf',
    IDENTITY_POOL_ID: 'us-east-1:95c85dae-fb36-4d4c-8045-0ac034782b97',
  },
  MAX_ATTACHMENT_SIZE: 5000000,
};
