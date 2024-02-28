class CarritoCompra {
    constructor() {
        this.carrito = [];
    };

    agregarProducto(producto) {
        this.carrito.push(producto);
    };

    calcularTotal() {
        let total = 0;
        this.carrito.forEach(producto => {
            total += producto.precio
        })
        return total
    };

    aplicarDescuento(porcentaje) {
        this.carrito.forEach(producto => {
            producto.precio = producto.precio - (producto.precio * (porcentaje / 100));
        });
        return this.calcularTotal();
    };
};

module.exports = CarritoCompra;