import '@testing-library/jest-dom';
import { structuredClone as polyfillStructuredClone } from 'structured-clone-polyfill';

if (typeof global.structuredClone === 'undefined') {
  global.structuredClone = polyfillStructuredClone;
}

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});
