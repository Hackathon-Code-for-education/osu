import { apiPost } from '../common/apiFunctions.ts';
import { API_URL } from '../constants/apiUrl.ts';

export class AuthController {
  public static async fetchSignIn(request: NonNullable<unknown>): Promise<NonNullable<unknown>> {
    return apiPost(API_URL, request);
  }
}
