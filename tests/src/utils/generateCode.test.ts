import { describe, it, expect } from 'vitest';
import { generateSixDigitCode } from '../../../src/utils/generateCode.util';

describe('Pruebas de generación de código', () => {
  it('debería generar un código de exactamente 6 dígitos en formato texto', () => {
    const code = generateSixDigitCode();
    
    expect(typeof code).toBe('string');
    expect(code).toHaveLength(6);
    expect(/^\d{6}$/.test(code)).toBe(true);
  });
});