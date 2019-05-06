import { incrementar } from './numeros';

describe('Pruebas sobre numeros', () => {
    it('Debe de retornar 100 si el numero ingresado es mayor a 100', () => {
        const resp = incrementar(300);
        expect(resp).toBe(100);
    });
    it('Debe de retornar el numero ingresado +1 si el numero ingresadp no es mayor a 100', () => {
        const resp = incrementar(10);
        expect(resp).toBeLessThan(100);
    });
});
