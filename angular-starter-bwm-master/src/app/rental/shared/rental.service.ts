import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';
@Injectable()
export class RentalService {

    private rentals: Rental[]=[{
        id: "1",
        title: "Central Apartment",
        city: "New York",
        street: "Times Square",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: "3",
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "25/10/2018"
    
      },
      {
        id: "2",
        title: "Central Apartment2",
        city: "New York",
        street: "Times Square",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: "3",
        description: "Very nice apartment",
        dailyRate: 35,
        shared: false,
        createdAt: "25/10/2018"
    
      },
      {
        id: "3",
        title: "Central Apartment3",
        city: "New York",
        street: "Times Square",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: "2",
        description: "Very nice apartment",
        dailyRate: 30,
        shared: false,
        createdAt: "25/10/2018"
    
      }
    ,{
      id: "4",
      title: "Central Apartment4",
      city: "New York",
      street: "Times Square",
      category: "apartment",
      image: "http://via.placeholder.com/350x250",
      bedrooms: "5",
      description: "Very nice apartment",
      dailyRate: 40,
      shared: false,
      createdAt: "25/10/2018"
    
    }];
    
    //Displays Retail details of each rental
    public getRentalById(rentalId: string): Observable<Rental> {
        return new Observable<Rental>((observer) => {
            setTimeout(() => {
                const foundRental = this.rentals.find((rental) => {
                    return rental.id == rentalId;
                });
                observer.next(foundRental);
            }, 500);

        });
    }

    // Displays Rentals list
    public getRentals(): Observable<Rental[]> {
        return new Observable<Rental[]>((observer) =>{
            setTimeout(() => {
                observer.next(this.rentals);
            }, 1000);    
        });

    }
}