const articulos = [
    {
        "Id":"1",
        "Name":"laptop",
        "Price": 500,
        "ImgRoot": "https://es.digitaltrends.com/wp-content/uploads/2022/06/surface-laptop-go-2-feat.jpg?resize=625%2C417&p=1",
        "Stock": 10
    },
    {
        "Id":"2",
        "Name":"Mouse",
        "Price": 200,
        "ImgRoot": "https://thermaltake.azureedge.net/pub/media/catalog/product/cache/6bf0ed99c663954fafc930039201ed07/l/2/l20m01.jpg",
        "Stock": 10
    },
    {
        "Id":"3",
        "Name":"Teclado",
        "Price": 500,
        "ImgRoot": "https://m.media-amazon.com/images/I/81CxvebthLS._AC_SX355_.jpg",
        "Stock": 10
    },
    {
        "Id":"4",
        "Name":"Board",
        "Price": 300,
        "ImgRoot": "https://m.media-amazon.com/images/I/61mngTZGfiL._AC_SY355_.jpg",
        "Stock": 10
    },
    {
        "Id":"5",
        "Name":"Monitor",
        "Price": 250,
        "ImgRoot": "https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SY355_.jpg",
        "Stock": 10
    },
    {
        "Id":"6",
        "Name":"Disco SSD",
        "Price": 500,
        "ImgRoot": "https://m.media-amazon.com/images/I/61Sm1xzjG7L._AC_SY355_.jpg",
        "Stock": 10
    },
    {
        "Id":"7",
        "Name":"Memory DDR5",
        "Price": 700,
        "ImgRoot": "https://m.media-amazon.com/images/I/61UwHpj3J4L._AC_SX355_PIbundle-2,TopRight,0,0_SH20_.jpg",
        "Stock": 10
    }
]
const loyoutItems = document.getElementById('LoyoutItems');



document.addEventListener('DOMContentLoaded', ()=>{

    FillLayoutWidthItems();

});


function FillLayoutWidthItems(){

    loyoutItems.innerHTML = '';

    articulos.forEach(item => {

        const col = document.createElement('div');
        col.className = 'col mb-5';

        const card = document.createElement('div');
        card.className = 'card h-100 seleccion';


        const divCir = document.createElement('div');
        divCir.className = 'circulo-stock';

        const divCant = document.createElement('div');
        divCant.className = 'item-cant';
        divCant.innerText = item.Stock;
        divCir.appendChild(divCant);
        card.appendChild(divCir);

        const imagen = document.createElement('img');
        imagen.src = item.ImgRoot;
        imagen.className = 'card-img-top';
        imagen.alt = 'Logo';
        card.appendChild(imagen);


        const divCardBody = document.createElement('div');
        divCardBody.className = 'card-body p-4 card-b-margin';

        const divText = document.createElement('div');
        divText.className = 'text-center detail-product';

        const h4 = document.createElement('h4');
        h4.innerText = item.Price;
        divText.appendChild(h4);

        const p = document.createElement('p');
        p.innerText = `- stock ${item.Stock}`;
        divText.appendChild(p);

        







        divCardBody.appendChild(divText);
        card.appendChild(divCardBody);


       


        card.insertAdjacentHTML = `
                        <div class="card-body p-4 card-b-margin">
                            <div class="text-center detail-product ">
                                <h4>${item.Price} $</h4>
                                <p>- stock: 99</p>
                                <h5 class="fw-bolder">Name Product</h5>
                            </div>
                        </div>
        
        `;


        col.appendChild(card);



        //     <div class="col mb-5">
        
        //     <div class="card h-100 seleccion">
        
                // <div class="circulo-stock">
                //     <div class="item-cant">99</div>
                // </div>
        
        //         <img class="card-img-top" src="assets/laptop.jpg" alt="..." />
               
        
        
                // <div class="card-body p-4 card-b-margin">
        
                //     <div class="text-center detail-product ">
                       
                //         <h4>10$</h4>
                //         <p>- stock: 99</p>
                //         <h5 class="fw-bolder">Name Product</h5>
                       
                       
                //     </div>
                // </div>
        
        //         <div class="card-footer p-4 pt-0 border-top-0 bg-transparent card-f-ocultar">
        //             <div class="text-center">
        //                 <a class="btn btn-outline-dark mt-auto" href="#"><i class='bx bxs-cart-add' ></i> add</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        
        
        
        
        
        
        
        loyoutItems.appendChild(col);
        
        });
        





}




