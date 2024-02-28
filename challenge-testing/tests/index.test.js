const CarritoCompra = require("../index");

describe("testeo para  'CarritoCompra'", () => {
    test("Es una clase", () => {
        expect(typeof CarritoCompra.prototype.constructor).toBe("function");
    });

    test("Debe tener un metodo", () => {
        const metodo = new CarritoCompra();
        expect(metodo.carrito).toBeDefined();
    });

    test('agregarProducto() agrega un producto al carrito', () => {
        const metodo = new CarritoCompra();
        metodo.agregarProducto('producto1');
        expect(metodo.carrito).toContain('producto1');
    });

    test('Agregar múltiples productos al carrito', () => {
        const metodo = new CarritoCompra();
        metodo.agregarProducto({ nombre: 'Producto 1', precio: 20 });
        metodo.agregarProducto({ nombre: 'Producto 2', precio: 30 });
        expect(metodo.carrito.length).toBe(2);
    });

    test('calcularTotal() calcula el total correctamente', () => {
        const metodo = new CarritoCompra();
        metodo.agregarProducto({ precio: 10 });
        metodo.agregarProducto({ precio: 20 });
        expect(metodo.calcularTotal()).toBe(30);
    });

    test('Calcular total de la compra sin productos', () => {
        const metodo = new CarritoCompra();
        expect(metodo.calcularTotal()).toBe(0);
    });


    test('aplicarDescuento() aplica el descuento correctamente', () => {
        const metodo = new CarritoCompra();
        metodo.agregarProducto({ precio: 100 });
        metodo.aplicarDescuento(10);
        expect(metodo.calcularTotal()).toBe(90);
    });

    test('Aplicar descuento del 0%', () => {
        const metodo = new CarritoCompra();
        metodo.agregarProducto({ precio: 20 });
        metodo.agregarProducto({ precio: 30 });
        expect(metodo.aplicarDescuento(0)).toBe(50);
    });

    test('Aplicar descuento del 20%', () => {
        const metodo = new CarritoCompra();
        metodo.agregarProducto({ precio: 20 });
        metodo.agregarProducto({ precio: 30 });
        expect(metodo.aplicarDescuento(20)).toBe(40);
    });

    test('Aplicar descuento del 50%', () => {
        const metodo = new CarritoCompra();
        metodo.agregarProducto({ precio: 20 });
        metodo.agregarProducto({ precio: 30 });
        expect(metodo.aplicarDescuento(50)).toBe(25);
    });
});