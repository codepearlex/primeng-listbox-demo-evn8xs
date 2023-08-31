import { Component } from "@angular/core";
import { PrimeNGConfig, SelectItemGroup } from "primeng/api";
interface City {
  name: string;
  code: string;
}

interface Country {
  name: string;
  code: string;
}

interface Operator {
  code: string;
  name: string;
  country: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      :host ::ng-deep .ui-listbox {
        width: 20em;
      }
    `
  ]
})
export class AppComponent {
  cities: City[];

  countries: any[];

  operators: Operator[];

  selectedCity: City;

  selectedCountries: any[];

  groupedCities: SelectItemGroup[];

  constructor(private primengConfig: PrimeNGConfig) {
    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ];

    this.countries = [
      { name: "Australia", code: "AU" },
      { name: "Brazil", code: "BR" },
      { name: "China", code: "CN" },
      { name: "Egypt", code: "EG" },
      { name: "France", code: "FR" },
      { name: "Germany", code: "DE" },
      { name: "India", code: "IN" },
      { name: "Japan", code: "JP" },
      { name: "Spain", code: "ES" },
      { name: "United States", code: "US" }
    ];

    this.operators = [
      { code: "2ES", name: "Spanish Military", country: "Spain" },
      { code: "3DLH", name: "Deutsche Lufthansa", country: "Germany" },
      { code: "2DE", name: "German Military", country: "Germany" },
      { code: "3GWI", name: "German Wings", country: "Germany" },
      { code: "3RYR", name: "Ryanair", country: "Ireland" },
      { code: "3AAL", name: "Americal Airlines", country: "United States of America" },
    ];

    this.groupedCities = [
      {
        label: "Germany",
        value: "de",
        items: [
          { label: "Berlin", value: "Berlin" },
          { label: "Frankfurt", value: "Frankfurt" },
          { label: "Hamburg", value: "Hamburg" },
          { label: "Munich", value: "Munich" }
        ]
      },
      {
        label: "USA",
        value: "us",
        items: [
          { label: "Chicago", value: "Chicago" },
          { label: "Los Angeles", value: "Los Angeles" },
          { label: "New York", value: "New York" },
          { label: "San Francisco", value: "San Francisco" }
        ]
      },
      {
        label: "Japan",
        value: "jp",
        items: [
          { label: "Kyoto", value: "Kyoto" },
          { label: "Osaka", value: "Osaka" },
          { label: "Tokyo", value: "Tokyo" },
          { label: "Yokohama", value: "Yokohama" }
        ]
      }
    ];
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
