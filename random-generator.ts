import crypto from 'crypto';

export default class RandomGenerator {
  static number(buffer: Uint8Array) {
    crypto.randomFillSync(buffer);
  }
}
