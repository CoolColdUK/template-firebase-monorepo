import * as functions from 'firebase-functions';

export {functions};

export const region = 'europe-west2';

export const runtimeOpts: functions.RuntimeOptions = {
  timeoutSeconds: 40,
  memory: '1GB',
};
