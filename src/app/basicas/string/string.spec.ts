import { mensaje } from './string';

describe('Pruebas de strings', () => {
    it('Debe de regresar un string', () => {
        const resp = mensaje('Alejo');
        expect(typeof resp).toBe('string'); // busca coincidencia exacta
    });

    it('Debe de regresar un saludo con el nombre enviado', () => {
        const nombre = 'Alejo';
        const resp = mensaje(nombre);
        expect( resp).toContain(nombre); // busca que contenga el script pasado por parámetro
    });
});
