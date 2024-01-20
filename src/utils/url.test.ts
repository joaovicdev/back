import assert from 'node:assert';
import { describe, it } from 'node:test';
import { generateUrlByEnv } from './url';

describe('generateUrlByEnv()', () => {
  it('it should return url with dev1 env', () => {
    const generateWithDevEnv = generateUrlByEnv('dev1');

    const verifyIfContains = generateWithDevEnv.includes('portal.dev1.smiles');

    assert.ok(verifyIfContains);
  });

  it('it should return url with uat5 env', () => {
    const generateWithDevEnv = generateUrlByEnv('uat5');

    const verifyIfContains = generateWithDevEnv.includes('portal-uat5.smiles');

    assert.ok(verifyIfContains);
  });

  it('it should return production url with any env', () => {
    const generateWithDevEnv = generateUrlByEnv('prd');

    const verifyIfContains = generateWithDevEnv.includes('www.smiles.com');

    assert.ok(verifyIfContains);
  });
});