import { localStorageNames } from '../../main/constants/localStorageNames.ts';

interface ICodeProps {
  clientId: string;
  redirectUri: string;
  codeChallenge: string;
}

export const getOAuthConfigForCode = ({ clientId, redirectUri, codeChallenge }: ICodeProps) => ({
  response_type: 'code',
  scope: 'openid',
  code_challenge_method: 'S256',
  code_challenge: codeChallenge,
  client_id: clientId,
  redirect_uri: redirectUri,
});

interface ITokenProps extends Omit<ICodeProps, 'codeChallenge'> {
  code: string;
}

export const getOAuthConfigForToken = ({ clientId, redirectUri, code }: ITokenProps) => ({
  grant_type: 'authorization_code',
  code_verifier: window.localStorage.getItem(localStorageNames.CODE_VERIFIER) as string,
  code,
  client_id: clientId,
  redirect_uri: redirectUri,
});
