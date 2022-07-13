
const arregloItems = [];

const Comida = [
    {
        id: 1,
        nombre: 'Patata',
        precio: 1,
        imagen: 'patata.jpg'
    },
    {
        id: 2,
        nombre: 'Cebolla',
        precio: 1.2,
        imagen: 'cebolla.jpg'
    },
    {
        id: 3,
        nombre: 'Calabacin',
        precio: 2.1,
        imagen: 'calabacin.jpg'
    },
    {
        id: 4,
        nombre: 'Fresas',
        precio: 0.6,
        imagen: 'fresas.jpg'
    },
    {
        id: 5,
        nombre: 'Melon',
        precio: 6.6,
        imagen: 'fresas.jpg'
    },
    {
        id: 6,
        nombre: 'Maruchan',
        precio: 4.6,
        imagen: 'fresas.jpg'
    },
    {
        id: 7,
        nombre: 'Gansitos',
        precio: 2.6,
        imagen: 'fresas.jpg'
    },
    {
        id: 8,
        nombre: 'Chetos',
        precio: 3.6,
        imagen: 'fresas.jpg'
    },
    {
        id: 9,
        nombre: 'Sabritas',
        precio: 0.6,
        imagen: 'fresas.jpg'
    },
    {
        id: 10,
        nombre: 'Pan Bimbo',
        precio: 0.6,
        imagen: 'fresas.jpg'
    }
    

];



arregloItems.forEach(item => {

    const div = document.createAttribute('div');
    div.className = 'col mb-5';

    div.innerHtml = `
                    <div class="card h-100">
                            <div id="ItemCant" class="item-cant">99</div>
                            <!-- Product image-->
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                        

                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">Fancy Product</h5>
                                    <!-- Product price-->
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>`;

});


