import { handleResponseError } from './handleResponseError.ts';

export async function handleResponse(res: Response) {
  const contentTypeHeader = res.headers.get('content-type');
  const isContentTypeJson = contentTypeHeader?.includes('application/json');
  const isContentTypeText = contentTypeHeader?.includes('text/');
  const contentDisposition = res.headers.get('content-disposition');

  const data =
    (!contentDisposition && isContentTypeJson && (await res.clone().json())) ||
    (isContentTypeText && (await res.clone().text())) ||
    (await res.clone().blob());

  if (!res.ok) {
    const errorData = isContentTypeJson ? data : { status: res.status, statusText: res.statusText };

    return Promise.reject(handleResponseError(errorData));
  }

  return data;
}
