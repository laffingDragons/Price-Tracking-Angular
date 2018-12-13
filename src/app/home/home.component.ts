import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Chart } from 'chart.js';
import { AppService } from './../app.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public chart: any;
    public rateControl: FormControl;
    public name: string;
    public rate: number;
    public USD: number;
    public MXN: number;
    public GBP: number;
    public AED: number;
    public loading: boolean = false;

    constructor(public appService: AppService, public router: Router, public _route: ActivatedRoute, public snackBar: MatSnackBar, ) { }

    ngOnInit() {

        this.rateControl = new FormControl("", [Validators.min(0)])

    }



    checkRate() {


        if (!this.name) {

            this.snackBar.open(`Enter Name of the Product`, "Dismiss", {
                duration: 5000,
            })


        } else if (this.rate < 0) {

            this.snackBar.open(`Enter Rate of the Product in INR`, "Dismiss", {
                duration: 5000,
            })

        } else {




            let data = {
                name: this.name.toLocaleLowerCase(),
                price: this.rate
            }

            this.appService.storeData(data).subscribe(data => {

                console.log(data['status']);
                if (data['status'] == 400) {
                    this.snackBar.open(`Product already exist`, "Dismiss", {
                        duration: 5000,
                    });
                }else{

               

                // Start of conversion


                // Exchange rate for USD
                this.appService.getRates("INR", "USD").subscribe(data => {

                    this.USD = data['INR_USD'].val * this.rate


                }, (err) => {

                    this.snackBar.open(`some error occured`, "Dismiss", {
                        duration: 5000,
                    });

                    setTimeout(() => {
                        this.router.navigate(['/500'])
                    }, 500);

                });

                // Exchange rate for GBP 
                this.appService.getRates("INR", "GBP").subscribe(data => {

                    this.GBP = data['INR_GBP'].val * this.rate


                }, (err) => {

                    this.snackBar.open(`some error occured`, "Dismiss", {
                        duration: 5000,
                    });

                    setTimeout(() => {
                        this.router.navigate(['/500'])
                    }, 500);

                });

                // Exchange rate for MXP 
                this.appService.getRates("INR", "MXN").subscribe(data => {

                    this.MXN = data['INR_MXN'].val * this.rate

                }, (err) => {

                    this.snackBar.open(`some error occured`, "Dismiss", {
                        duration: 5000,
                    });

                    setTimeout(() => {
                        this.router.navigate(['/500'])
                    }, 500);

                });

                // Exchange rate for AED
                this.appService.getRates("INR", "AED").subscribe(data => {

                    this.AED = data['INR_AED'].val * this.rate


                }, (err) => {

                    this.snackBar.open(`some error occured`, "Dismiss", {
                        duration: 5000,
                    });

                    setTimeout(() => {
                        this.router.navigate(['/500'])
                    }, 500);

                });

                // End of conversion

            }

            }, (err) => {

                this.snackBar.open(`some error occured`, "Dismiss", {
                    duration: 5000,
                });

                setTimeout(() => {
                    this.router.navigate(['/500'])
                }, 500);

            });


        }



    }


}
