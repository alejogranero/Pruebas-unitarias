import { usuarioIngresado } from './booleanos';


describe('Prueba de booleanos', () => {
    it('Debe retornar true', () => {
        const resp = usuarioIngresado();
        expect(resp).toBeTruthy(true);

    });
});
