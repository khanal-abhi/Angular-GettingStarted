import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
selector: 'pm-product-list',
templateUrl: './product-list.component.html',
styleUrls:['./product-list.component.css']
})
export class ProductListComplenent {
    pageTitle: string = "Product List";
    showImage: boolean = false;
    buttonText: string = "Show Image";
    imageWidth: number = 50;
    imageMargin: number = 2;
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        },
        {
            "productId": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
        },
        {
            "productId": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2015",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
        }
    ];

    _listFilter: string = "";
    filteredProducts: IProduct[];
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        console.log(value);
        if(this.listFilter.length === 0) {
            this.filteredProducts = this.products
        } else {
            this.filteredProducts = this.products.filter((product) => {
                return product.productName.toLowerCase().includes(this.listFilter.toLowerCase())
                || product.description.toLowerCase().includes(this.listFilter.toLowerCase())
            })
        }
    }


    // filteredProducts(): any[] {
    //     console.log(this.products);
    //     if (this.listFilter.length == 0) {
    //         return this.products;
    //     }
    //     return this.products.filter((product) => {
    //         product.productName.indexOf(this.listFilter) !== -1 || product.description.indexOf(this.listFilter) !== -1;
    //     })
    // }


    showImageHandler() {
        this.showImage = !this.showImage;
        this.buttonText = this.showImage ? "Hide Image" : "Show Image";
    }

    ngOnInit() {
        this.filteredProducts = this.products;
    }
}