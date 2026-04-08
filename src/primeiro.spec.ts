import { describe, it, expect } from '@jest/globals';


describe('Meu Primeiro Teste', () => {
  it('deve ser capaz de somar 2 + 2', () => {
    const resultado = 2 + 2;
    expect(resultado).toBe(4);
  });
});
