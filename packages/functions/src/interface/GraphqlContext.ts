import {BaseContext} from '@apollo/server';
import {DecodedIdToken} from 'firebase-admin/auth';

export interface GraphqlContext extends BaseContext {
  /** authentication of user */
  auth?: DecodedIdToken;
}
