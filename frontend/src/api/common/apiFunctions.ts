import { handleResponse } from './handleResponse.ts';

export async function apiGet<T>(url: string): Promise<T> {
  return fetch(url, {
    method: 'GET',
  }).then(handleResponse);
}

async function apiFetch<T>(method: string, url: string, body?: any, shouldSendCredentials = false): Promise<T> {
  return fetch(url, {
    method,
    ...(shouldSendCredentials ? { credentials: 'include' } : {}),
    body: JSON.stringify(body),
  }).then(handleResponse);
}

export async function apiPost<T>(url: string, body?: any): Promise<T> {
  return apiFetch('POST', url, body);
}

export async function apiPostWithCredentials<T>(url: string, body?: any): Promise<T> {
  return apiFetch('POST', url, body);
}

export async function apiPatch<T>(url: string, body?: any): Promise<T> {
  return apiFetch('PATCH', url, body);
}

export async function apiPut<T>(url: string, body?: any): Promise<T> {
  return apiFetch('PUT', url, body);
}

export async function apiDelete<T>(url: string, body?: any): Promise<T> {
  return apiFetch('DELETE', url, body);
}
