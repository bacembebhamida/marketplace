import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast"
export class Product {

    id: string;
    sku: string;
    name: string;
    description: string;
    unitPrice: number;
    imageUrl: String;
    active: boolean;
    unitsInStock: number;
    dateCreated: Date;
    lastUpdated: Date;
    /*
    Product(String sku, String name, String description, number unitprice, Date dateCreated, Date LastUpdated, boolean active, string imageurl, number unitsInStock) {
        this.sku = sku;
        this.name = name;
        this.description = description;
        this.unitPrice = unitprice;
        this.imageUrl = imageurl;
        this.active = active;
        this.unitsInStock = unitsInStock;
        this.dateCreated = dateCreated;
        this.lastUpdated = LastUpdated;


    }


*/

}
