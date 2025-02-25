import '@testing-library/jest-dom';
import { structuredClone as polyfillStructuredClone } from 'structured-clone-polyfill';

if (typeof global.structuredClone === 'undefined') {
  global.structuredClone = polyfillStructuredClone;
}
