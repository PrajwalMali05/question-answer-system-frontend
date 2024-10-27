import * as superagent from 'superagent';
import { Subject } from 'rxjs';

const serviceObject = new Subject<boolean>();
const responseTime = new Subject<any>();
const handledErrors = new Set<string>();
export const request = superagent.agent().use((req: any) => {
  const currentTime = new Date().getTime();
  req.on('response', (res: any) => {
    if (res.error) {
      // logHttpError(res.error);
      if (res.status === 401) {
        serviceObject.next(true);
      }
    }
  });
  req.on('error', (err: any) => {
    if (
      err &&
      !err.status &&
      !err.response &&
      err.message.includes('the network is offline') &&
      !req.url.includes('info')
    ) {
      const errorKey = err.message;

      // Check if the error has already been handled
      if (!handledErrors.has(errorKey)) {
        // Mark the error as handled
        handledErrors.add(errorKey);

        // showErrorPopup
      }
    }
  });
  req.on('end', () => {
    responseTime.next(
      req.url
        .concat('(')
        .concat(`${new Date().getTime() - currentTime}`)
        .concat('ms)')
    );
  });
});

export const getAuthorizationError = () => serviceObject.asObservable();
export const getResponseTime = () => responseTime.asObservable();
