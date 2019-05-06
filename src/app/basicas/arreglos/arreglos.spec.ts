import { obtenerRobots } from './arreglos';


describe('Prueba de arreglos', () => {
    it('Debe de retornar al menos 3 robots', () => {

        const arreglo = obtenerRobots();
        expect(arreglo.length).toBeGreaterThanOrEqual(3);
    });
    it('Debe de contener a Megatron y Optimus Prime', () => {

        const arreglo = obtenerRobots();
        expect(arreglo).toContain('Megatron');
        expect(arreglo).toContain('Optimus Prime');
    });
});
