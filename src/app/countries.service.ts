/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  selectedcountry: any;
  setdata: any;
  constructor(private http: HttpClient) { }


  Countries = [
    // {
    //   "code": "+7 840",
    //   "name": "Abkhazia"
    // },
    {
      "code": "+93",
      "name": "Afghanistan",
      "currencysymbol": "؋",
      "currencyname": "Afghan afghani",
      "currencycode": "AFN"
    },
    {
      "code": "+355",
      "name": "Albania",
      "currencysymbol": "L",
      "currencyname": "Albanian lek",
      "currencycode": "ALL"
    },
    {
      "code": "+213",
      "name": "Algeria",
      "currencysymbol": "د.ج",
      "currencyname": "Algerian Dinar",
      "currencycode": "DZD"
    },
    {
      "code": "+1 684",
      "name": "American Samoa",
      "currencycurrencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+376",
      "name": "Andorra",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+244",
      "name": "Angola",
      "currencysymbol": "Kz",
      "currencyname": "Angolan kwanza",
      "currencycode": "AOA"
    },
    {
      "code": "+1 264",
      "name": "Anguilla",
      "currencysymbol": "$",
      "currencyname": "East Caribbean Dollar",
      "currencycode": "XCD"
    },
    {
      "code": "+1 268",
      "name": "Antigua and Barbuda",
      "currencysymbol": "$",
      "currencyname": "East Caribbean Dollar",
      "currencycode": "XCD"
    },
    {
      "code": "+54",
      "name": "Argentina",
      "currencysymbol": "$",
      "currencyname": "Argentine Peso",
      "currencycode": "ARS"
    },
    {
      "code": "+928",
      "name": "Arizona",
      "currencysymbol": "₼",
      "currencyname": "Azerbaijani manat",
      "currencycode": "AZN"
    },
    {
      "code": "+480",
      "name": "Arizona",
      "currencysymbol": "₼",
      "currencyname": "Azerbaijani manat",
      "currencycode": "AZN"
    },
    {
      "code": "+623",
      "name": "state of Arizona",
      "currencysymbol": "₼",
      "currencyname": "Azerbaijani manat",
      "currencycode": "AZN"
    },
    {
      "code": "+374",
      "name": "Armenia",
      "currencysymbol": "֏",
      "currencyname": "Armenian dram",
      "currencycode": "AMD"

    },
    {
      "code": "+297",
      "name": "Aruba",
      "currencysymbol": "ƒ",
      "currencyname": "Aruban Florin",
      "currencycode": "AWG"
    },
    {
      "code": "+247",
      "name": "Ascension",
      "currencysymbol": "‎£",
      "currencyname": "Saint Helena Pound",
      "currencycode": "SHP"
    },
    {
      "code": "+770",
      "name": "Atlanta",
      "currencysymbol": "‎IRs",
      "currencyname": "Indian Rupee",
      "currencycode": "INR"
    },
    {
      "code": "+404",
      "name": "Atlanta",
      "currencysymbol": "‎IRs",
      "currencyname": "Indian Rupee",
      "currencycode": "INR"
    },
    {
      "code": "+61",
      "name": "Australia",
      "currencysymbol": "$",
      "currencyname": "Australian Dollar",
      "currencycode": "AUD"
    },
    // {
    //   "code": "+672",
    //   "name": "Australian External Territories",
    //   "currencycurrencysymbol"	:	"$"
    // },
    {
      "code": "+43",
      "name": "Austria",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR",
      "dateformat": "dd/mm/yyyy"
    },
    {
      "code": "+994",
      "name": "Azerbaijan",
      "currencysymbol": "₼",
      "currencyname": "Azerbaijanian Manat",
      "currencycode": "AZN",
      "dateformat": "yyyy-mm-dd"
    },
    {
      "code": "+1 242",
      "name": "Bahamas",
      "currencysymbol": "$",
      "currencyname": "Bahamian Dollar",
      "currencycode": "BSD",
    },
    {
      "code": "+973",
      "name": "Bahrain",
      "currencysymbol": ".د.ب",
      "currencyname": "Bahraini Dinar",
      "currencycode": "BHD"
    },
    {
      "code": "+880",
      "name": "Bangladesh",
      "currencysymbol": "৳",
      "currencyname": "Taka",
      "currencycode": "BDT"
    },
    {
      "code": "+1 246",
      "name": "Barbados",
      "currencysymbol": "$",
      "currencyname": "Barbados Dollar",
      "currencycode": "BBD"
    },
    {
      "code": "+375",
      "name": "Belarus",
      "currencysymbol": "p.",
      "currencyname": "Belarussian Ruble",
      "currencycode": "BYR"
    },
    {
      "code": "+32",
      "name": "Belgium",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+501",
      "name": "Belize",
      "currencysymbol": "$",
      "currencyname": "Belize Dollar",
      "currencycode": "BZD"
    },
    {
      "code": "+229",
      "name": "Benin",
      "currencysymbol": "Fr",
      "currencyname": "CFA Franc BCEAO",
      "currencycode": "XOF"
    },
    {
      "code": "+1 441",
      "name": "Bermuda",
      "currencysymbol": "$",
      "currencyname": "Bermudian Dollar",
      "currencycode": "BMD"
    },
    {
      "code": "+975",
      "name": "Bhutan",
      "currencysymbol": "Nu",
      "currencyname": "Ngultrum",
      "currencycode": "BTN"
    },
    {
      "code": "+591",
      "name": "Bolivia",
      "currencysymbol": "Bs",
      "currencyname": "Boliviano",
      "currencycode": "BOB"
    },
    {
      "code": "+387",
      "name": "Bosnia and Herzegovina",
      "currencysymbol": "KM",
      "currencyname": "Convertible Mark",
      "currencycode": "BAM"
    },
    {
      "code": "+617",
      "name": "Boston",
      "currencysymbol": "XE",
      "currencyname": "Pound sterling",
      "currencycode": "GBP"
    },
    {
      "code": "+267",
      "name": "Botswana",
      "currencysymbol": "P",
      "currencyname": "Pula",
      "currencycode": "BWP"
    },
    {
      "code": "+55",
      "name": "Brazil",
      "currencysymbol": "R$",
      "currencyname": "Brazilian Real",
      "currencycode": "BRL"
    },
    {
      "code": "+246",
      "name": "British Indian Ocean Territory",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    // {
    //   "code": "+1 284",
    //   "name": "British Virgin Islands",
    //   "currencysymbol": "$"
    // },
    {
      "code": "+673",
      "name": "Brunei",
      "currencysymbol": "$",
      "currencyname": "Brunei Dollar",
      "currencycode": "BND"
    },
    {
      "code": "+359",
      "name": "Bulgaria",
      "currencysymbol": "лв",
      "currencyname": "Bulgarian Lev",
      "currencycode": "BGN"
    },
    {
      "code": "+226",
      "name": "Burkina Faso",
      "currencysymbol": "Fr",
      "currencyname": "CFA Franc BCEAO",
      "currencycode": "XOF"
    },
    {
      "code": "+257",
      "name": "Burundi",
      "currencysymbol": "Fr",
      "currencyname": "Burundi Franc",
      "currencycode": "BIF"
    },

    {
      "code": "+209",
      "name": "California",
      "currencysymbol": "$",
      "currencyname": "",
      "currencycode": "CAD"
    },
    {
      "code": "+916",
      "name": "California",
      "currencysymbol": "$",
      "currencyname": "",
      "currencycode": "CAD"
    },
    {
      "code": "+650",
      "name": "California",
      "currencysymbol": "$",
      "currencyname": "",
      "currencycode": "CAD"
    },
    {
      "code": "+310",
      "name": "California",
      "currencysymbol": "$",
      "currencyname": "",
      "currencycode": "CAD"
    },
    {
      "code": "+530",
      "name": "California",
      "currencysymbol": "$",
      "currencyname": "",
      "currencycode": "CAD"
    },
    {
      "code": "+909",
      "name": "California",
      "currencysymbol": "$",
      "currencyname": "",
      "currencycode": "CAD"
    },
    {
      "code": "+855",
      "name": "Cambodia",
      "currencysymbol": "៛",
      "currencyname": "Riel",
      "currencycode": "KHR"
    },
    {
      "code": "+237",
      "name": "Cameroon",
      "currencysymbol": "Fr",
      "currencyname": "CFA Franc BEAC",
      "currencycode": "XAF"
    },
    {
      "code": "+819",
      "name": "Canada",
      "currencysymbol": "$",
      "currencyname": "Canadian Dollar",
      "currencycode": "CAD"
    },
    {
      "code": "+416",
      "name": "Ontario",
      "currencysymbol": "$",
      "currencyname": "Canadian Dollar",
      "currencycode": "CAD"
    },
    // {
    //   "code": "+238",
    //   "name": "Cape Verde",
    //   "currencysymbol": "Esc"
    // },
    {
      "code": "+ 345",
      "name": "Cayman Islands",
      "currencysymbol": "$",
      "currencyname": "Cayman Islands Dollar",
      "currencycode": "KYD"
    },
    {
      "code": "+236",
      "name": "Central African Republic",
      "currencysymbol": "Fr",
      "currencyname": "CFA Franc BEAC",
      "currencycode": "XAF"
    },
    {
      "code": "+235",
      "name": "Chad",
      "currencysymbol": "Fr",
      "currencyname": "CFA Franc BEAC",
      "currencycode": "XAF"
    },
    {
      "code": "+56",
      "name": "Chile",
      "currencysymbol": "$",
      "currencyname": "Chilean Peso",
      "currencycode": "CLP"
    },
    {
      "code": "+86",
      "name": "China",
      "currencysymbol": "¥",
      "currencyname": "Yuan Renminbi",
      "currencycode": "CNY"
    },
    {
      "code": "+61",
      "name": "Christmas Island",
      "currencysymbol": "$",
      "currencyname": "Australian Dollar",
      "currencycode": "AUD"
    },
    // {
    //   "code": "+61",
    //   "name": "Cocos-Keeling Islands",
    //   "currencysymbol": "$"
    // },

    {
      "code": "+510",
      "name": "City of Oakland",
      "currencysymbol": "$",
      "currencyname": "",
      "currencycode": "CAD"
    },
    {
      "code": "+513",
      "name": "Cincinnati",
      "currencysymbol": "$",
      "currencyname": "",
      "currencycode": "CAD"
    },
    {
      "code": "+57",
      "name": "Colombia",
      "currencysymbol": "$",
      "currencyname": "Colombian Peso",
      "currencycode": "COP"
    },
    {
      "code": "+269",
      "name": "Comoros",
      "currencysymbol": "Fr",
      "currencyname": "Comoro Franc",
      "currencycode": "KMF"
    },
    {
      "code": "+242",
      "name": "Congo",
      "currencysymbol": "Fr",
      "currencyname": "Congolese Franc",
      "currencycode": "CDF"
    },
    // {
    //   "code": "+243",
    //   "name": "Congo, Dem. Rep. of (Zaire)",
    //   "currencysymbol": "Fr"
    // },
    {
      "code": "+682",
      "name": "Cook Islands",
      "currencysymbol": "$",
      "currencyname": "New Zealand Dollar",
      "currencycode": "NZD"
    },
    {
      "code": "+506",
      "name": "Costa Rica",
      "currencysymbol": "₡",
      "currencyname": "Costa Rican Colon",
      "currencycode": "CRC"
    },
    {
      "code": "+385",
      "name": "Croatia",
      "currencysymbol": "kn",
      "currencyname": "Kuna",
      "currencycode": "HRK"
    },
    {
      "code": "+53",
      "name": "Cuba",
      "currencysymbol": "$",
      "currencyname": "Cuban Peso",
      "currencycode": "CUP"
    },
    {
      "code": "+599",
      "name": "Curacao",
      "currencysymbol": "ƒ",
      "currencyname": "Netherlands Antillean Guilder",
      "currencycode": "ANG"
    },
    // {
    //   "code": "+537",
    //   "name": "Cyprus"
    // },
    {
      "code": "+420",
      "name": "Czech Republic",
      "currencysymbol": "Kč",
      "currencyname": "Czech Koruna",
      "currencycode": "CZK"
    },
    {
      "code": "+45",
      "name": "Denmark",
      "currencysymbol": "kr",
      "currencyname": "Danish Krone",
      "currencycode": "DKK"
    },
    // {
    //   "code": "+246",
    //   "name": "Diego Garcia",
    //   "currencysymbol": "$"
    // },
    {
      "code": "+253",
      "name": "Djibouti",
      "currencysymbol": "Fr",
      "currencyname": "Djibouti Franc",
      "currencycode": "DJF"
    },
    {
      "code": "+1 767",
      "name": "Dominica",
      "currencysymbol": "$",
      "currencyname": "East Caribbean Dollar",
      "currencycode": "XCD"
    },
    {
      "code": "+1 809",
      "name": "Dominican Republic",
      "currencysymbol": "$",
      "currencyname": "Dominican Peso",
      "currencycode": "DOP"
    },
    // {
    //   "code": "+670",
    //   "name": "East Timor",
    //   "currencysymbol": "$"
    // },
    // {
    //   "code": "+56",
    //   "name": "Easter Island"
    // },
    {
      "code": "+757",
      "name": "eastern Virginia",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "EV"
    },
    {
      "code": "+540",
      "name": "northern Virginia",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "EV"
    },
    {
      "code": "+593",
      "name": "Ecuador",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+20",
      "name": "Egypt",
      "currencysymbol": "£",
      "currencyname": "Egyptian Pound",
      "currencycode": "EGP"
    },
    {
      "code": "+503",
      "name": "El Salvador",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+240",
      "name": "Equatorial Guinea",
      "currencysymbol": "Fr",
      "currencyname": "CFA Franc BEAC",
      "currencycode": "XAF"
    },
    {
      "code": "+291",
      "name": "Eritrea",
      "currencysymbol": "Nfk",
      "currencyname": "Nakfa",
      "currencycode": "ERN"
    },
    {
      "code": "+372",
      "name": "Estonia",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+251",
      "name": "Ethiopia",
      "currencysymbol": "Br",
      "currencyname": "Ethiopian Birr",
      "currencycode": "ETB"
    },
    {
      "code": "+500",
      "name": "Falkland Islands",
      "currencysymbol": "£",
      "currencyname": "Falkland Islands Pound",
      "currencycode": "FKP"
    },
    {
      "code": "+298",
      "name": "Faroe Islands",
      "currencysymbol": "kr",
      "currencyname": "Danish Krone",
      "currencycode": "DKK"
    },
    {
      "code": "+679",
      "name": "Fiji",
      "currencysymbol": "$",
      "currencyname": "Fiji Dollar",
      "currencycode": "FJD"
    },
    {
      "code": "+358",
      "name": "Finland",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+954",
      "name": "Florida",
      "currencysymbol": "ƒ",
      "currencyname": "florin",
      "currencycode": ""
    },
    {
      "code": "+863",
      "name": "Florida",
      "currencysymbol": "ƒ",
      "currencyname": "florin",
      "currencycode": ""
    },
    {
      "code": "+561",
      "name": "Florida",
      "currencysymbol": "ƒ",
      "currencyname": "florin",
      "currencycode": ""
    },
    {
      "code": "+331",
      "name": "France",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+336",
      "name": "Burlington",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+596",
      "name": "French Antilles",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+594",
      "name": "French Guiana",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+689",
      "name": "French Polynesia",
      "currencysymbol": "Fr",
      "currencyname": "CFP Franc",
      "currencycode": "XPF"
    },
    {
      "code": "+241",
      "name": "Gabon",
      "currencysymbol": "Fr",
      "currencyname": "CFA Franc BEAC",
      "currencycode": "XAF"
    },
    {
      "code": "+220",
      "name": "Gambia",
      "currencysymbol": "D",
      "currencyname": "Dalasi",
      "currencycode": "GMD"
    },
    {
      "code": "+995",
      "name": "Georgia",
      "currencysymbol": "ლ",
      "currencyname": "Lari",
      "currencycode": "GEL"
    },
    {
      "code": "+49",
      "name": "Germany",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+233",
      "name": "Ghana",
      "currencysymbol": "₵",
      "currencyname": "Ghana Cedi",
      "currencycode": "GHS",
      "dateformat": "dd/mm/yyyy"
    },
    {
      "code": "+350",
      "name": "Gibraltar",
      "currencysymbol": "£",
      "currencyname": "Gibraltar Pound",
      "currencycode": "GIP"
    },
    {
      "code": "+30",
      "name": "Greece",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+299",
      "name": "Greenland",
      "currencysymbol": "kr",
      "currencyname": "Danish Krone",
      "currencycode": "DKK"
    },
    {
      "code": "+1 473",
      "name": "Grenada",
      "currencysymbol": "$",
      "currencyname": "East Caribbean Dollar",
      "currencycode": "XCD"
    },
    {
      "code": "+590",
      "name": "Guadeloupe",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+1 671",
      "name": "Guam",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+502",
      "name": "Guatemala",
      "currencysymbol": "Q",
      "currencyname": "Quetzal",
      "currencycode": "GTQ"
    },
    {
      "code": "+224",
      "name": "Guinea",
      "currencysymbol": "Fr",
      "currencyname": "Guinea Franc",
      "currencycode": "GNF"
    },
    {
      "code": "+245",
      "name": "Guinea-Bissau",
      "currencysymbol": "Fr",
      "currencyname": "CFA Franc BCEAO",
      "currencycode": "XOF"
    },
    {
      "code": "+595",
      "name": "Guyana",
      "currencysymbol": "₲",
      "currencyname": "Guyana Dollar",
      "currencycode": "GYD"
    },
    {
      "code": "+509",
      "name": "Haiti",
      "currencysymbol": "G",
      "currencyname": "Gourde",
      "currencycode": "HTG"
    },
    {
      "code": "+504",
      "name": "Honduras",
      "currencysymbol": "L",
      "currencyname": "Lempira",
      "currencycode": "HNL"
    },
    {
      "code": "+346",
      "name": "Houston",
      "currencysymbol": "$",
      "currencyname": "Fiji dollar",
      "currencycode": "FJD"
    },
    
    {
      "code": "+713",
      "name": "Houston",
      "currencysymbol": "$",
      "currencyname": "Fiji dollar",
      "currencycode": "FJD"
    },
    // {
    //   "code": "+852",
    //   "name": "Hong Kong SAR China",
    //   "currencysymbol": "$"
    // },
    {
      "code": "+36",
      "name": "Hungary",
      "currencysymbol": "Ft",
      "currencyname": "Forint",
      "currencycode": "HUF"
    },
    {
      "code": "+354",
      "name": "Iceland",
      "currencysymbol": "kr",
      "currencyname": "Iceland Krona",
      "currencycode": "ISK"
    },
    {
      "code": "+91",
      "name": "India",
      "currencysymbol": "₹",
      "currencyname": "Indian Rupee",
      "currencycode": "INR"
    },
    {
      "code": "+62",
      "name": "Indonesia",
      "currencysymbol": "Rp",
      "currencyname": "Indonesian rupiah",
      "currencycode": "IDR"
    },
    {
      "code": "+98",
      "name": "Iran",
      "currencysymbol": "﷼",
      "currencyname": "Iranian Rial",
      "currencycode": "IRR"
    },
    {
      "code": "+964",
      "name": "Iraq",
      "currencysymbol": "ع.د",
      "currencyname": "Iraqi Dinar",
      "currencycode": "IQD"
    },
    {
      "code": "+353",
      "name": "Ireland",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+972",
      "name": "Israel",
      "currencysymbol": "₪",
      "currencyname": "New Israeli Sheqel",
      "currencycode": "ILS"
    },
    {
      "code": "+39",
      "name": "Italy",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    // {
    //   "code": "+225",
    //   "name": "Ivory Coast",
    //   "currencysymbol":"Fr"
    // },
    {
      "code": "+1 876",
      "name": "Jamaica",
      "currencysymbol": "$",
      "currencyname": "Jamaican Dollar",
      "currencycode": "JMD"
    },
    {
      "code": "870",
      "name": "Jamaica",
      "currencysymbol": "$",
      "currencyname": "Jamaican Dollar",
      "currencycode": "JMD"
    },
    {
      "code": "+866",
      "name": "Jamaica",
      "currencysymbol": "$",
      "currencyname": "Jamaican Dollar",
      "currencycode": "JMD"
    },
    {
      "code": "+81",
      "name": "Japan",
      "currencysymbol": "¥",
      "currencyname": "Yen",
      "currencycode": "JPY"
    },
    {
      "code": "+962",
      "name": "Jordan",
      "currencysymbol": "د.ا",
      "currencyname": "Jordanian Dinar",
      "currencycode": "JOD"
    },
    
    {
      "code": "+913",
      "name": "Kansas",
      "currencysymbol": "Kč",
      "currencyname": "Czech Koruna",
      "currencycode": "CZK"
    },
    {
      "code": "+77",
      "name": "Kazakhstan",
      "currencysymbol": "₸",
      "currencyname": "Tenge",
      "currencycode": "KZT"
    },
    {
      "code": "+722",
      "name": "Kazakhstan",
      "currencysymbol": "₸",
      "currencyname": "Tenge",
      "currencycode": "KZT"
    },
    {
      "code": "+254",
      "name": "Kenya",
      "currencysymbol": "sh",
      "currencyname": "Kenyan Shilling",
      "currencycode": "KES"
    },
    {
      "code": "+686",
      "name": "Kiribati",
      "currencysymbol": "$",
      "currencyname": "Australian Dollar",
      "currencycode": "AUD"
    },
    {
      "code": "+965",
      "name": "Kuwait",
      "currencysymbol": "د.ك",
      "currencyname": "Kuwaiti Dinar",
      "currencycode": "KWD"
    },
    {
      "code": "+996",
      "name": "Kyrgyzstan",
      "currencysymbol": "c",
      "currencyname": "Som",
      "currencycode": "KGS"
    },
    {
      "code": "+323",
      "name": "Los Angeles",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+702",
      "name": "Las Vegas",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+856",
      "name": "Laos",
      "currencysymbol": "₭",
      "currencyname": "Lao kip",
      "currencycode": "LAK"
    },
    {
      "code": "+371",
      "name": "Latvia",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+961",
      "name": "Lebanon",
      "currencysymbol": "ل.ل",
      "currencyname": "Lebanese Pound",
      "currencycode": "LBP"
    },
    {
      "code": "+266",
      "name": "Lesotho",
      "currencysymbol": "L",
      "currencyname": "Loti",
      "currencycode": "LSL"
    },
    {
      "code": "+231",
      "name": "Liberia",
      "currencysymbol": "$",
      "currencyname": "Liberian Dollar",
      "currencycode": "LRD"
    },
    {
      "code": "+214",
      "name": "Libya",
      "currencysymbol": "ل.د",
      "currencyname": "Libyan Dinar",
      "currencycode": "LYD"
    },
    {
      "code": "+218",
      "name": "Libya",
      "currencysymbol": "ل.د",
      "currencyname": "Libyan Dinar",
      "currencycode": "LYD"
    },
    {
      "code": "+219",
      "name": "Libya",
      "currencysymbol": "ل.د",
      "currencyname": "Libyan Dinar",
      "currencycode": "LYD"
    },
    {
      "code": "+423",
      "name": "Liechtenstein",
      "currencysymbol": "Fr",
      "currencyname": "Swiss Franc",
      "currencycode": "CHF"

    },
    {
      "code": "+370",
      "name": "Lithuania",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+217",
      "name": "Illinois",
      "currencysymbol": "₪",
      "currencyname": "New Shekels",
      "currencycode": "ILS"
    },
    {
      "code": "+352",
      "name": "Luxembourg",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    // {
    //   "code": "+853",
    //   "name": "Macau SAR China",
    //   "currencysymbol":"P"
    // },
    {
      "code": "+389",
      "name": "Macedonia",
      "currencysymbol": "ден",
      "currencyname": "Denar",
      "currencycode": "MKD"
    },
    {
      "code": "+261",
      "name": "Madagascar",
      "currencysymbol": "Ar",
      "currencyname": "Malagasy Ariary",
      "currencycode": "MGA"
    },
    {
      "code": "+265",
      "name": "Malawi",
      "currencysymbol": "MK",
      "currencyname": "Kwacha",
      "currencycode": "MWK"
    },
    {
      "code": "+60",
      "name": "Malaysia",
      "currencysymbol": "RM",
      "currencyname": "Malaysian Ringgit",
      "currencycode": "MYR"
    },
    {
      "code": "+960",
      "name": "Maldives",
      "currencysymbol": ".ރ",
      "currencyname": "Rufiyaa",
      "currencycode": "MVR"
    },
    {
      "code": "+223",
      "name": "Mali",
      "currencysymbol": "Fr",
      "currencyname": "CFA Franc BCEAO",
      "currencycode": "XOF"
    },
    {
      "code": "+356",
      "name": "Malta",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+692",
      "name": "Marshall Islands",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+596",
      "name": "Martinique",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+222",
      "name": "Mauritania",
      "currencysymbol": "UM",
      "currencyname": "Ouguiya",
      "currencycode": "MRU"
    },
    {
      "code": "+230",
      "name": "Mauritius",
      "currencysymbol": "Rs",
      "currencyname": "Mauritius Rupee",
      "currencycode": "MUR"
    },
    {
      "code": "+262",
      "name": "Mayotte",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+52",
      "name": "Mexico",
      "currencysymbol": "$",
      "currencyname": "Mexican Peso",
      "currencycode": "MXN"
    },
    {
      "code": "+305",
      "name": "Miami",
      "currencysymbol": "L",
      "currencyname": "libra",
      "currencycode": "GBP"
    },
    {
      "code": "+691",
      "name": "Micronesia",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    // {
    //   "code": "+1 808",
    //   "name": "Midway Island"
    // },
    {
      "code": "+320",
      "name": "Minnesota",
      "currencysymbol": "$MN",
      "currencyname": "Cuban Peso",
      "currencycode": "CUP"
    },
    {
      "code": "+314",
      "name": "Missouri",
      "currencysymbol": "$MN",
      "currencyname": "Macau",
      "currencycode": "MO"
    },
    {
      "code": "+373",
      "name": "Moldova",
      "currencysymbol": "L",
      "currencyname": "Moldovan Leu",
      "currencycode": "MDL"
    },
    {
      "code": "+377",
      "name": "Monaco",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+976",
      "name": "Mongolia",
      "currencysymbol": "₮",
      "currencyname": "Tugrik",
      "currencycode": "MNT"
    },
    {
      "code": "+382",
      "name": "Montenegro",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+1664",
      "name": "Montserrat",
      "currencysymbol": "$",
      "currencyname": "East Caribbean Dollar",
      "currencycode": "XCD"
    },
    {
      "code": "+212",
      "name": "Morocco",
      "currencysymbol": "د.م.",
      "currencyname": "Moroccan Dirham",
      "currencycode": "MAD"
    },
    {
      "code": "+95",
      "name": "Myanmar",
      "currencysymbol": "Ks",
      "currencyname": "Kyat",
      "currencycode": "MMK"
    },
    {
      "code": "+264",
      "name": "Namibia",
      "currencysymbol": "$",
      "currencyname": "Namibia Dollar",
      "currencycode": "NAD"
    },
    {
      "code": "+674",
      "name": "Nauru",
      "currencysymbol": "$",
      "currencyname": "Australian Dollar",
      "currencycode": "AUD"
    },
    {
      "code": "+977",
      "name": "Nepal",
      "currencysymbol": "Rs",
      "currencyname": "Nepalese Rupee",
      "currencycode": "NPR"
    },
    {
      "code": "+31",
      "name": "Netherlands",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    // {
    //   "code": "+599",
    //   "name": "Netherlands Antilles"
    // },
    {
      "code": "+1 869",
      "name": "Nevis",
      "currencysymbol": "$",
      "currencyname": "East Caribbean Dollar",
      "currencycode": "XCD"
    },
    {
      "code": "+687",
      "name": "New Caledonia",
      "currencysymbol": "Fr",
      "currencyname": "CFP Franc",
      "currencycode": "XPF"
    },
    {
      "code": "+609",
      "name": "New Jersey",
      "currencysymbol": "£",
      "currencyname": "Penny",
      "currencycode": "P"
    },

    {
      "code": "+201",
      "name": "New Jersey",
      "currencysymbol": "£",
      "currencyname": "Penny",
      "currencycode": "P"
    },
    {
      "code": "+646",
      "name": "New York",
      "currencysymbol": "$",
      "currencyname": "U.S. dollar",
      "currencycode": "USD"
    },
    {
      "code": "+914",
      "name": "New York",
      "currencysymbol": "$",
      "currencyname": "U.S. dollar",
      "currencycode": "USD"
    },
    {
      "code": "+347",
      "name": "New York",
      "currencysymbol": "$",
      "currencyname": "U.S. dollar",
      "currencycode": "USD"
    },
    {
      "code": "+718",
      "name": "New York",
      "currencysymbol": "$",
      "currencyname": "U.S. dollar",
      "currencycode": "USD"
    },
    {
      "code": "+64",
      "name": "New Zealand",
      "currencysymbol": "$",
      "currencyname": "New Zealand Dollar",
      "currencycode": "NZD"
    },
    {
      "code": "+6464",
      "name": "New Zealand",
      "currencysymbol": "$",
      "currencyname": "New Zealand Dollar",
      "currencycode": "NZD"
    },
    {
      "code": "+505",
      "name": "Nicaragua",
      "currencysymbol": "C$",
      "currencyname": "Cordoba Oro",
      "currencycode": "NIO"
    },
    {
      "code": "+227",
      "name": "Niger",
      "currencysymbol": "Fr",
      "currencyname": "CFA Franc BCEAO",
      "currencycode": "XOF"
    },
    {
      "code": "+234",
      "name": "Nigeria",
      "currencysymbol": "₦",
      "currencyname": "Naira",
      "currencycode": "NGN"
    },
    {
      "code": "+683",
      "name": "Niue",
      "currencysymbol": "$",
      "currencyname": "New Zealand Dollar",
      "currencycode": "NZD"
    },
    {
      "code": "+672",
      "name": "Norfolk Island",
      "currencysymbol": "$",
      "currencyname": "Australian Dollar",
      "currencycode": "AUD"
    },
    {
      "code": "+806",
      "name": "North American",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+700",
      "name": "North American",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+301",
      "name": "Maryland ",
      "currencysymbol": "£",
      "currencyname": "British pound",
      "currencycode": "pound"
    },
    {
      "code": "+919",
      "name": "North Carolina",
      "currencysymbol": "£",
      "currencyname": "British pound",
      "currencycode": "pound"
    },
    {
      "code": "+603",
      "name": "state of New Hampshire",
      "currencysymbol": "£",
      "currencyname": "British pound",
      "currencycode": "pound"
    },
    {
      "code": "+850",
      "name": "North Korea",
      "currencysymbol": "₩",
      "currencyname": "North Korean Won",
      "currencycode": "KPW"
    },
    {
      "code": "+1 670",
      "name": "Northern Mariana Islands",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+47",
      "name": "Norway",
      "currencysymbol": "kr",
      "currencyname": "Norwegian Krone",
      "currencycode": "NOK"
    },
    {
      "code": "+968",
      "name": "Oman",
      "currencysymbol": "ر.ع.",
      "currencyname": "Rial Omani",
      "currencycode": "OMR"
    },
    {
      "code": "+407",
      "name": "Orlando",
      "currencysymbol": "L",
      "currencyname": "Orlando",
      "currencycode": "MCO"
    },
    {
      "code": "+92",
      "name": "Pakistan",
      "currencysymbol": "Rs",
      "currencyname": "Pakistan Rupee",
      "currencycode": "PKR"
    },
    {
      "code": "+680",
      "name": "Palau",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    // {
    //   "code": "+970",
    //   "name": "Palestinian Territory",
    //   "currencysymbol": "₪"
    // },
    {
      "code": "+507",
      "name": "Panama",
      "currencysymbol": "B/.",
      "currencyname": "Balboa",
      "currencycode": "PAB"
    },
    {
      "code": "+675",
      "name": "Papua New Guinea",
      "currencysymbol": "K",
      "currencyname": "Kina",
      "currencycode": "PKG"
    },
    {
      "code": "+595",
      "name": "Paraguay",
      "currencysymbol": "₲",
      "currencyname": "Guarani",
      "currencycode": "PYG"
    },
    {
      "code": "+51",
      "name": "Peru",
      "currencysymbol": "S/.",
      "currencyname": "Nuevo Sol",
      "currencycode": "PEN"
    },
    {
      "code": "+602",
      "name": "Phoenix",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+63",
      "name": "Philippines",
      "currencysymbol": "₱",
      "currencyname": "Philippine Peso",
      "currencycode": "PHP"
    },
    {
      "code": "+602",
      "name": "Phoenix",
      "currencysymbol": "₱",
      "currencyname": "Philippine Peso",
      "currencycode": "PHP"
    },
    {
      "code": "+48",
      "name": "Poland",
      "currencysymbol": "zł",
      "currencyname": "Zloty",
      "currencycode": "PLN"
    },
    {
      "code": "+351",
      "name": "Portugal",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+1 787",
      "name": "Puerto Rico",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+974",
      "name": "Qatar",
      "currencysymbol": "ر.ق",
      "currencyname": "Qatari Rial",
      "currencycode": "QAR"
    },
    {
      "code": "+262",
      "name": "Reunion",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },

    {
      "code": "+401",
      "name": "Rhode Island",
      "currencysymbol": "£sd",
      "currencyname": "Spanish dollars",
      "currencycode": "RI"
    },
    {
      "code": "+407",
      "name": "South Carolina",
      "currencysymbol": "£sd",
      "currencyname": "Spanish dollars",
      "currencycode": "RI"
    },
    {
      "code": "+803",
      "name": "South Carolina",
      "currencysymbol": "£sd",
      "currencyname": "Spanish dollars",
      "currencycode": "RI"
    },
    {
      "code": "+40",
      "name": "Romania",
      "currencysymbol": "lei",
      "currencyname": "Romanian Leu",
      "currencycode": "RON"
    },
    {
      "code": "+7",
      "name": "Russia",
      "currencysymbol": "₽",
      "currencyname": "Russian Ruble",
      "currencycode": "RUB"
    },
    {
      "code": "+250",
      "name": "Rwanda",
      "currencysymbol": "Fr",
      "currencyname": "Rwanda Franc",
      "currencycode": "RWF"
    },
    {
      "code": "+685",
      "name": "Samoa",
      "currencysymbol": "T",
      "currencyname": "Tala",
      "currencycode": "WST"
    },
    {
      "code": "+415",
      "name": "San Francisco",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+378",
      "name": "San Marino",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+966",
      "name": "Saudi Arabia",
      "currencysymbol": "ر.س",
      "currencyname": "Saudi Riyal",
      "currencycode": "SAR"
    },
    {
      "code": "+221",
      "name": "Senegal",
      "currencysymbol": "Fr",
      "currencyname": "CFA Franc BCEAO",
      "currencycode": "XOF"
    },
    {
      "code": "+381",
      "name": "Serbia",
      "currencysymbol": "дин.",
      "currencyname": "Serbian Dinar",
      "currencycode": "RSD"
    },
    {
      "code": "+248",
      "name": "Seychelles",
      "currencysymbol": "Rs",
      "currencyname": "Seychelles Rupee",
      "currencycode": "SCR"
    },
    {
      "code": "+232",
      "name": "Sierra Leone",
      "currencysymbol": "Le",
      "currencyname": "Leone",
      "currencycode": "SLL"
    },
    {
      "code": "+65",
      "name": "Singapore",
      "currencysymbol": "$",
      "currencyname": "Singapore Dollar",
      "currencycode": "SGD"
    },
    {
      "code": "+421",
      "name": "Slovakia",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+386",
      "name": "Slovenia",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+677",
      "name": "Solomon Islands",
      "currencysymbol": "$",
      "currencyname": "Solomon Islands Dollar",
      "currencycode": "SBD"
    },
    {
      "code": "+27",
      "name": "South Africa",
      "currencysymbol": "R",
      "currencyname": "Rand",
      "currencycode": "ZAR"
    },
    // {
    //   "code": "+500",
    //   "name": "South Georgia and the South Sandwich Islands",
    //   "currencysymbol": "£"
    // },
    {
      "code": "+843",
      "name": "South Carolina",
      "currencysymbol": "SC",
      "currencyname": "Siacoin",
      "currencycode": "SC"
    },
    {
      "code": "+82",
      "name": "South Korea",
      "currencysymbol": "	₩",
      "currencyname": "Won",
      "currencycode": "KRW"
    },
    {
      "code": "+734",
      "name": "southeast Michigan",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+616",
      "name": "West Michigan",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+435",
      "name": "Utah",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+519",
      "name": "southeast Michigansouthwestern Ontario",
      "currencysymbol": "$",
      "currencyname": "Canadian Dollar",
      "currencycode": "CAD"
    },
    {
      "code": "+34",
      "name": "Spain",
      "currencysymbol": "€",
      "currencyname": "Euro",
      "currencycode": "EUR"
    },
    {
      "code": "+94",
      "name": "Sri Lanka",
      "currencysymbol": "Rs",
      "currencyname": "Sri Lanka Rupee",
      "currencycode": "LKR"
    },
    {
      "code": "+406",
      "name": "state of Montana",
      "currencysymbol": "$",
      "currencyname": "U.S. dollar",
      "currencycode": "MZN"
    },
    {
      "code": "+249",
      "name": "Sudan",
      "currencysymbol": "ج.س.",
      "currencyname": "Sudanese Pound",
      "currencycode": "SDG"
    },
    {
      "code": "+597",
      "name": "Suriname",
      "currencysymbol": "$",
      "currencyname": "Surinam Dollar",
      "currencycode": "SRD"
    },
    {
      "code": "+268",
      "name": "Swaziland",
      "currencysymbol": "L",
      "currencyname": "Lilangeni",
      "currencycode": "SZL"
    },
    {
      "code": "+46",
      "name": "Sweden",
      "currencysymbol": "kr",
      "currencyname": "Swedish Krona",
      "currencycode": "SEK"
    },
    {
      "code": "+41",
      "name": "Switzerland",
      "currencysymbol": "Fr",
      "currencyname": "Swiss Franc",
      "currencycode": "CHF"
    },
    {
      "code": "+963",
      "name": "Syria",
      "currencysymbol": "£",
      "currencyname": "Syrian Pound",
      "currencycode": "SYP"
    },
    {
      "code": "+203",
      "name": "Connecticut",
      "currencysymbol": "£",
      "currencyname": "Connecticut",
      "currencycode": "SYP"
    },
    {
      "code": "+860",
      "name": "Connecticut",
      "currencysymbol": "£",
      "currencyname": "Connecticut",
      "currencycode": "SYP"
    },
    {
      "code": "+886",
      "name": "Taiwan",
      "currencysymbol": "$",
      "currencyname": "New Taiwan Dollar",
      "currencycode": "TWD"
    },
    {
      "code": "+888",
      "name": "Taiwan",
      "currencysymbol": "$",
      "currencyname": "New Taiwan Dollar",
      "currencycode": "TWD"
    },
    {
      "code": "+992",
      "name": "Tajikistan",
      "currencysymbol": "SM",
      "currencyname": "Somoni",
      "currencycode": "TJS"
    },
    {
      "code": "+922",
      "name": "Tajikistan",
      "currencysymbol": "SM",
      "currencyname": "Somoni",
      "currencycode": "TJS"
    },
    {
      "code": "+255",
      "name": "Tanzania",
      "currencysymbol": "sh",
      "currencyname": "Tanzanian Shilling",
      "currencycode": "TZS"
    },
    {
      "code": "+66",
      "name": "Thailand",
      "currencysymbol": "฿",
      "currencyname": "Baht",
      "currencycode": "THB"
    },
    // {
    //   "code": "+670",
    //   "name": "Timor Leste"
    // },
    {
      "code": "+228",
      "name": "Togo",
      "currencysymbol": "Fr",
      "currencyname": "CFA Franc BCEAO",
      "currencycode": "XOF"
    },
    {
      "code": "+690",
      "name": "Tokelau",
      "currencysymbol": "$",
      "currencyname": "New Zealand Dollar",
      "currencycode": "NZD"
    },
    {
      "code": "+676",
      "name": "Tonga",
      "currencysymbol": "T$",
      "currencyname": "Pa’anga",
      "currencycode": "TOP"
    },
    {
      "code": "+1 868",
      "name": "Trinidad and Tobago",
      "currencysymbol": "$",
      "currencyname": "Trinidad and Tobago Dollar",
      "currencycode": "TTD"
    },
    {
      "code": "+216",
      "name": "Tunisia",
      "currencysymbol": "د.ت",
      "currencyname": "Tunisian Dinar",
      "currencycode": "TND"
    },
    {
      "code": "+931",
      "name": "Tennessee  ",
      "currencysymbol": "د.ت",
      "currencyname": "Tunisian Dinar",
      "currencycode": "TND"
    },
    {
      "code": "+90",
      "name": "Turkey",
      "currencysymbol": "₺",
      "currencyname": "Turkish Lira",
      "currencycode": "TRY"
    },
    {
      "code": "+993",
      "name": "Turkmenistan",
      "currencysymbol": "m",
      "currencyname": "Turkmenistan New Manat",
      "currencycode": "TMT"
    },
    {
      "code": "+1 649",
      "name": "Turks and Caicos Islands",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+940",
      "name": "Texas",
      "currencysymbol": "$",
      "currencyname": "Texas Dollar",
      "currencycode": "TSD"
    },
    {
      "code": "+313",
      "name": "Detroit ",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+688",
      "name": "Tuvalu",
      "currencysymbol": "$",
      "currencyname": "Australian Dollar",
      "currencycode": "AUD"
    },
    // {
    //   "code": "+1 340",
    //   "name": "U.S. Virgin Islands",
    //   "currencysymbol": "$"
    // },
    {
      "code": "+256",
      "name": "Uganda",
      "currencysymbol": "sh",
      "currencyname": "Uganda Shilling",
      "currencycode": "UGX"
    },
    {
      "code": "+380",
      "name": "Ukraine",
      "currencysymbol": "₴",
      "currencyname": "Hryvnia",
      "currencycode": "UAH"
    },
    {
      "code": "+971",
      "name": "United Arab Emirates",
      "currencysymbol": "د.إ",
      "currencyname": "United Arab Emirates dirham",
      "currencycode": "AED"
    },
    {
      "code": "+826",
      "name": "United Kingdom",
      "currencysymbol": "£",
      "currencyname": "Pound Sterling",
      "currencycode": "GBP"
    },
    {
      "code": "+515",
      "name": "Iowa",
      "currencysymbol": "£",
      "currencyname": "Pound Sterling",
      "currencycode": "GBP"
    },
    {
      "code": "+720",
      "name": "Colorado",
      "currencysymbol": "£",
      "currencyname": "Pound Sterling",
      "currencycode": "GBP"
    },
    {
      "code": "+857",
      "name": "Massachusetts",
      "currencysymbol": "£",
      "currencyname": "Massachusetts Pound",
      "currencycode": "GBP"
    },
    {
      "code": "+1",
      "name": "United States",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+541",
      "name": "Eugene",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+598",
      "name": "Uruguay",
      "currencysymbol": "$",
      "currencyname": "Peso Uruguayo",
      "currencycode": "UYU"
    },
    // {
    //   "code": "+998",
    //   "name": "Uzbekistan"
    // },
    {
      "code": "+678",
      "name": "Vanuatu",
      "currencysymbol": "vt",
      "currencyname": "Vatu",
      "currencycode": "VUV"
    },
    {
      "code": "+58",
      "name": "Venezuela",
      "currencysymbol": "Bs.F",
      "currencyname": "Bolivar",
      "currencycode": "VEF"
    },
    {
      "code": "+84",
      "name": "Vietnam",
      "currencysymbol": "₫",
      "currencyname": "Vietnamese dong",
      "currencycode": "VND"
    },
    {
      "code": "+681",
      "name": "Wallis and Futuna",
      "currencysymbol": "Fr",
      "currencyname": "CFP Franc",
      "currencycode": "XPF"
    },
    {
      "code": "+425",
      "name": "Washington",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+202",
      "name": "Washington",
      "currencysymbol": "$",
      "currencyname": "US Dollar",
      "currencycode": "USD"
    },
    {
      "code": "+967",
      "name": "Yemen",
      "currencysymbol": "﷼",
      "currencyname": "Yemeni Rial",
      "currencycode": "YER"
    },
    {
      "code": "+260",
      "name": "Zambia",
      "currencysymbol": "ZK",
      "currencyname": "Zambian Kwacha",
      "currencycode": "ZMW"
    },
    {
      "code": "+263",
      "name": "Zimbabwe",
      "currencysymbol": "$",
      "currencyname": "Zimbabwe Dollar",
      "currencycode": "ZWR"
    }
  ];

  Dateformats = [
    { "id": 1, "dateformat": "DD MM YYYY" },
    { "id": 2, "dateformat": "MM DD YYYY" },
    { "id": 3, "dateformat": "YYYY MM DD" },
    { "id": 4, "dateformat": "DD/MM/YYYY" },
    { "id": 5, "dateformat": "MM/DD/YYYY" },
    { "id": 6, "dateformat": "YYYY/MM/DD" },
    { "id": 7, "dateformat": "DD-MM-YYYY" },
    { "id": 8, "dateformat": "MM-DD-YYYY" },
    { "id": 9, "dateformat": "YYYY-MM-DD" }
  ]

  getdateformats(): any {
    return this.Dateformats;
  }
  SetData() {

  }
  getData(): any {
    return this.Countries;
  }
  setselecteddata(data:any) {
    this.selectedcountry = data;
  }
  getselecteddata() {
    return this.selectedcountry
  }

  setcookiedata(data:any) {
    this.setdata = data
  }
  getcookiedata() {
    return this.setdata;
  }

}

