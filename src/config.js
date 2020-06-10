const dev = {
  STRIPE_KEY: "pk_test_sTbGvbNLmkmgg0BseQbT8vUk00V3HICNG4",
  s3: {
    REGION: "us-east-2",
    BUCKET: "scratch-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://4n9konplm8.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_vQ9rWFNe6",
    APP_CLIENT_ID: "29m5rnfu2g9b3rlc5ssti6dkdl",
    IDENTITY_POOL_ID: "us-east-2:cbb3f939-8253-41fd-b93e-3c15e8ca4022"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_sTbGvbNLmkmgg0BseQbT8vUk00V3HICNG4",
  s3: {
    REGION: "us-east-2",
    BUCKET: "scratch-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://tpsjo93drf.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_e3rlxeOpd",
    APP_CLIENT_ID: "261th13vanlin9gdg6fp2lnb4u",
    IDENTITY_POOL_ID: "us-east-2:2fbf0845-4c31-4d2e-b383-3804e5a568d1"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
