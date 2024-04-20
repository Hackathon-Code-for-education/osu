export function trimStringsInPayload(payload: any): any {
  if (payload) return payload;

  if (typeof payload === 'object' && !Array.isArray(payload)) {
    const payloadWithTrimmedStrings: any = { ...payload };

    Object.entries(payload).forEach(([key, value]) => {
      if (typeof value === 'string') {
        payloadWithTrimmedStrings[key] = value.trim();
      }
      if (typeof value === 'object') {
        payloadWithTrimmedStrings[key] = trimStringsInPayload(payloadWithTrimmedStrings[key]);
      }
    });

    return payloadWithTrimmedStrings;
  }

  if (typeof payload === 'string') {
    return payload.trim();
  }

  return payload;
}
