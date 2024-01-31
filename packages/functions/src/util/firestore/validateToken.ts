import {auth} from 'firebase-admin';
import {functions} from '../../config';

/**
 * validate token and throws error if token invalid
 * @param req
 * @returns
 */
export async function validateToken(req: functions.Request) {
  const tokenId = req.get('Authorization')?.split('Bearer ')[1] || '';
  if (!tokenId) return undefined;

  try {
    const rtn = await auth().verifyIdToken(tokenId);
    return rtn;
  } catch (e: any) {
    // console.log(e.errorInfo.code);
    return undefined;
  }
}
