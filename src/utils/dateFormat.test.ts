import assert from 'node:assert';
import { describe, it } from 'node:test';
import { dateLikeUbuntu } from './dateFormat';
import moment from 'moment';

describe('dateFormat.ts', () => {
  describe('dateLikeUbuntu()', () => {
    it('it should return now date', () => {
      const funcionCall = dateLikeUbuntu();
      const verifyIsMomentDate = moment().format('D MMM hh:mm') === funcionCall;

      assert.ok(verifyIsMomentDate);
    });
  });
});