import { describe, it, expect } from 'vitest';
import { hashPassword, comparePassword } from '../../../src/utils/password.util';

describe('Pruebas de contraseñas', () => {
  const password1 = "ClaveUno123!";
  const password2 = "ClaveDos456!";

  it('debería generar hashes no vacíos y diferentes a la contraseña original', async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);

    expect(hash1).not.toBe('');
    expect(hash2).not.toBe('');
    expect(hash1).not.toBe(password1);
    expect(hash2).not.toBe(password2);
  });

  it('debería devolver true para la contraseña correcta', async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);

    expect(await comparePassword(password1, hash1)).toBe(true);
    expect(await comparePassword(password2, hash2)).toBe(true);
  });

  it('debería devolver false para contraseñas incorrectas', async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);

    expect(await comparePassword(password2, hash1)).toBe(false);
    expect(await comparePassword(password1, hash2)).toBe(false);
  });
});