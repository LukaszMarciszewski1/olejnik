"use strict";
// koszt arkusza po przeliczeniu z formatów b1 i a1 
//  modifier * (y * size) = price --------->
//  price / modifier = x --> x / 5.61167(b1 / a3) = a --> a / 0.12474 = y 
const productSize = new Array();
productSize['product-1-a1'] = 0.005; //wizytówki
productSize['product-1-a2'] = 0.005; //wizytówki
productSize['product-2-a1'] = 0.0741958254543206; //c4
productSize['product-2-a2'] = 0.0401894054544237; //c5
productSize['product-2-a3'] = 0.0216404490908435; //c6
productSize['product-2-a4'] = 0.0267929369696158; //dl
productSize['product-3-a1'] = 0.12474; //a3
productSize['product-3-a2'] = 0.06237; //a4
productSize['product-3-a3'] = 0.031185; //a5
productSize['product-3-a4'] = 0.0155925; //a6
productSize['product-3-a5'] = 0.02079; //dl
productSize['product-4-a1'] = 0.06237; //a4
productSize['product-4-a2'] = 0.031185; //a5
productSize['product-4-a3'] = 0.0155925; //a6
productSize['product-4-a4'] = 0.02079; //dl
productSize['product-5-a1'] = 0.06237; //a4
productSize['product-5-a2'] = 0.031185; //a5
productSize['product-5-a3'] = 0.044; //b5
productSize['product-5-a4'] = 0.022; //b6
productSize['product-6-a1'] = 0.12474; //a3
productSize['product-6-a2'] = 0.06237; //a4
productSize['product-6-a3'] = 0.031185; //a5
productSize['product-6-a4'] = 0.0155925; //a6
productSize['product-6-a5'] = 0.088; //b4
productSize['product-6-a6'] = 0.044; //b5
productSize['product-7-a1'] = 0.031185; //a5
productSize['product-7-a2'] = 0.0155925; //a6
productSize['product-7-a3'] = 0.00779625 //a7
productSize['product-8-a1'] = 0.12474; //a3;
productSize['product-8-a2'] = 0.12474; //a3;
productSize['product-9-a1'] = 0.06237; //a4
productSize['product-9-a2'] = 0.031185; //a5
productSize['product-9-a3'] = 0.0155925; //a6
productSize['product-9-a4'] = 0.044; //b5
productSize['product-10-a1'] = 0.12474; //a3;
productSize['product-10-a2'] = 0.06237; //a4
productSize['product-11-a1'] = 0.06237; //a4
productSize['product-11-a2'] = 0.031185; //a5
productSize['product-11-a3'] = 0.0155925; //a6
productSize['product-11-a3'] = 0.0155925; //a6
productSize['product-11-a4'] = 0.044; //b5
productSize['product-12-a1'] = 0.06237; //a4
productSize['product-13-a1'] = null;
productSize['product-13-a2'] = 1;
productSize['product-13-a3'] = 2;
productSize['product-13-a4'] = 3;
productSize['product-13-a5'] = 4.5;
productSize['product-14-a1'] = null;
productSize['product-14-a2'] = 1;
productSize['product-14-a3'] = 2;
productSize['product-14-a4'] = 3;
productSize['product-14-a5'] = 4.5;
productSize['product-15-a1'] = null;
productSize['product-16-a1'] = null;
productSize['product-16-a2'] = 1.4; //b0
productSize['product-16-a3'] = 0.7; //b1
productSize['product-16-a4'] = 0.35; //b2
productSize['product-17-a1'] = 11.9952;
productSize['product-17-a2'] = null;
productSize['product-18-a1'] = null;
productSize['product-18-a2'] = 2.16; //b0;
productSize['product-18-a3'] = 0.7; //b1
productSize['product-18-a4'] = 0.35; //b1
productSize['product-19-a1'] = null;
productSize['product-19-a2'] = 1.4; //b0;
productSize['product-19-a3'] = 0.7; //b1
productSize['product-19-a4'] = 0.35; //b2
productSize['product-20-a1'] = null;
productSize['product-21-a1'] = null;
productSize['product-23-a1'] = null;
productSize['product-24-a1'] = 4;
productSize['product-24-a2'] = 9;
productSize['product-24-a3'] = 12;
productSize['product-24-a4'] = 12;
productSize['product-24-a5'] = 12;
productSize['product-24-a6'] = 9;
productSize['product-25-a1'] = 1.7;
productSize['product-25-a2'] = 2;
productSize['product-25-a3'] = 2.4;
productSize['product-25-a4'] = 3;
productSize['product-26-a1'] = 0.7; //b1;
productSize['product-26-a2'] = 0.35; //b2
productSize['product-27-a1'] = 45;
productSize['product-27-a2'] = 47;
productSize['product-27-a3'] = 49;
productSize['product-28-a1'] = null;
productSize['product-31-a1'] = null;

const productMaterial = new Array();
productMaterial['product-1-b1'] = 2.613; //300g kreda SRA3 0,326 0,78gr/ark B1
productMaterial['product-1-b2'] = 3.792; //300g satyna SRA3 0,473
productMaterial['product-1-b3'] = 4.746; //300g DNS SRA3 0,592
productMaterial['product-1-b4'] = 3.094; //350g kreda SRA3
productMaterial['product-1-b5'] = 4.746; //350g satyna SRA3
productMaterial['product-2-b1'] = 1.94081; // z paskiem smp
productMaterial['product-3-b1'] = 0.946; //115g kreda SRA3 0,118 0,28gr/ark B1
productMaterial['product-3-b2'] = 1.066; //130g kreda SRA3 0,133 0,32gr/ark B1
productMaterial['product-3-b3'] = 1.235; //150g kreda SRA3 0,154 0,37gr/ark B1
productMaterial['product-3-b4'] = 1.395; //170g kreda SRA3 0,174 0,42gr/ark B1
productMaterial['product-3-b5'] = 1.643; //200g kreda SRA3 0,205 0,49gr/ark B1
productMaterial['product-3-b6'] = 1.315; //120g satyna SRA3 0,164
productMaterial['product-3-b7'] = 1.756; //160g satyna SRA3 0,219
productMaterial['product-3-b8'] = 2.405; //200g satyna SRA3 0,300
productMaterial['product-4-b1'] = 1.643; //200g kreda SRA3
productMaterial['product-4-b2'] = 2.116; //250g kreda SRA3
productMaterial['product-4-b3'] = 2.613; //300g kreda SRA3
productMaterial['product-4-b4'] = 2.405; //200g satyna SRA3
productMaterial['product-4-b5'] = 3.159; //250g satyna SRA3
productMaterial['product-4-b6'] = 3.792; //300g satyna SRA3 
productMaterial['product-5-b1'] = 0.7698; //100g offset
productMaterial['product-5-b2'] = 0.946; //115g kreda SRA3-0,118
productMaterial['product-5-b3'] = 1.066; //130g kreda SRA3
productMaterial['product-5-b4'] = 1.235; //150g kreda SRA3
productMaterial['product-5-b5'] = 1.395; //170g kreda SRA3
productMaterial['product-5-b6'] = 1.090; //100g satyna SRA3
productMaterial['product-5-b7'] = 1.315; //120g satyna SRA3
productMaterial['product-5-b8'] = 1.756; //160g satyna SRA3
productMaterial['product-6-b1'] = 2.116; //250g kreda
productMaterial['product-6-b2'] = 2.613; //300g kreda 
productMaterial['product-6-b3'] = 3.094; //350g kreda
productMaterial['product-6-b4'] = 3.159; //250g satyna 
productMaterial['product-6-b5'] = 3.792; //300g satyna 
productMaterial['product-6-b6'] = 4.746; //350g satyna
productMaterial['product-7-b1'] = 2.116; //250g kreda
productMaterial['product-7-b2'] = 2.613; //300g kreda
productMaterial['product-7-b3'] = 3.159; //250g satyna
productMaterial['product-7-b4'] = 3.792; //300g satyna
productMaterial['product-8-b1'] = 2.116; //250g kreda
productMaterial['product-8-b2'] = 2.613; //300g kreda
productMaterial['product-8-b3'] = 3.159; //250g satyna
productMaterial['product-8-b4'] = 3.792; //300g satyna
productMaterial['product-9-b1'] = 0.5670; //60g creamy
productMaterial['product-9-b2'] = 0.6612; //70g creamy
productMaterial['product-9-b3'] = 0.7555; //80g creamy
productMaterial['product-9-b4'] = 0.7360; //70g lux cream
productMaterial['product-9-b5'] = 0.8465; //80g lux cream
productMaterial['product-9-b6'] = 0.9501; //90g lux cream
productMaterial['product-9-b7'] = 0.5380; //70g offset
productMaterial['product-9-b8'] = 0.6355; //80g offset
productMaterial['product-9-b9'] = 0.6690; //90g offset
productMaterial['product-9-b10'] = 0.7698; //100g offset
productMaterial['product-9-b11'] = 0.780; //90g kreda
productMaterial['product-9-b12'] = 0.830; //100g kreda
productMaterial['product-9-b13'] = 0.946; //115g kreda
productMaterial['product-9-b14'] = 1.066; //130g kreda
productMaterial['product-9-b15'] = 0.986; //90g satyna
productMaterial['product-9-b16'] = 1.090; //100g satyna
productMaterial['product-9-b17'] = 1.315; //120g satyna
productMaterial['product-10-b1'] = 2.613; //300g kreda
productMaterial['product-10-b2'] = 3.792; //300g satyna
productMaterial['product-10-b3'] = 2.9809; //SRA3 karton gc1 300g
productMaterial['product-11-b1'] = 0.6690; //90g offset
productMaterial['product-11-b2'] = 0.7698; //100g offset
productMaterial['product-12-b1'] = 0.6690; //90g offset
productMaterial['product-12-b2'] = 0.7698; //100g offset
productMaterial['product-13-b1'] = 1.5;
productMaterial['product-13-b2'] = 1.75;
productMaterial['product-13-b3'] = 1.75;
productMaterial['product-14-b1'] = 1.5;
productMaterial['product-15-b1'] = 1.35;
productMaterial['product-15-b2'] = 1.35;
productMaterial['product-15-b3'] = 1.35;
productMaterial['product-15-b4'] = 1.4;
productMaterial['product-16-b1'] = 2;
productMaterial['product-17-b1'] = 1.25;
productMaterial['product-18-b1'] = 1.3;
productMaterial['product-18-b2'] = 1.5;
productMaterial['product-19-b1'] = 1.3;
productMaterial['product-19-b2'] = 3.2;  // * 2 //1.6
productMaterial['product-20-b1'] = 1.75;
productMaterial['product-21-b1'] = 1.35;
productMaterial['product-21-b2'] = 1.35;
productMaterial['product-23-b1'] = 1.5;
productMaterial['product-23-b2'] = 1.35;
productMaterial['product-23-b3'] = 1.35;
productMaterial['product-24-b1'] = 1.35;
productMaterial['product-24-b2'] = 1.35;
productMaterial['product-25-b1'] = 1.6;
productMaterial['product-25-b2'] = 1.75;
productMaterial['product-26-b1'] = 1.3;
productMaterial['product-26-b2'] = 1.5;
productMaterial['product-27-b1'] = 0;
productMaterial['product-27-b2'] = 0;
productMaterial['product-28-b1'] = 50;
productMaterial['product-28-b2'] = 80;
productMaterial['product-28-b3'] = 120;
productMaterial['product-28-b4'] = 160;
productMaterial['product-28-b5'] = 200;
productMaterial['product-31-b1'] = 100;
productMaterial['product-31-b2'] = 140;

const productSides = new Array();
productSides['product-13-c1'] = 0;
productSides['product-13-c2'] = 1;

const productCover = new Array();
productCover['product-5-h1'] = 1.08098581; //SRA3 karton gc1 250g formaty b1 i a1 * 0.4237
productCover['product-5-h2'] = 1.3799909; //SRA3 karton gc1 300g formaty b1 i a1 * 0.4237
productCover['product-5-h3'] = 1.643; //200g kreda SRA3 0,264
productCover['product-5-h4'] = 2.116; //250g kreda SRA3 0,264
productCover['product-5-h5'] = 2.613; //300g kreda SRA3 0,326
productCover['product-5-h6'] = 3.094; //350g kreda SRA3 0,386
productCover['product-5-h7'] = 2.405; //200g satyna SRA3 0,394
productCover['product-5-h8'] = 3.159; //250g satyna SRA3 0,394
productCover['product-5-h9'] = 3.792; //300g satyna SRA3 0,473
productCover['product-5-h10'] = 4.746; //350g satyna SRA3 0,592
productCover['product-9-h1'] = 1.08098581; //SRA3 karton gc1 250g formaty b1 i a1 * 0.4237
productCover['product-9-h2'] = 1.3799909; //SRA3 karton gc1 300g formaty b1 i a1 * 0.4237
productCover['product-9-h3'] = 1.643; //200g kreda SRA3 0,264
productCover['product-9-h4'] = 2.116; //250g kreda SRA3 0,264
productCover['product-9-h5'] = 2.613; //300g kreda SRA3 0,326
productCover['product-9-h6'] = 3.094; //350g kreda SRA3 0,386
productCover['product-9-h7'] = 2.405; //200g satyna SRA3 0,394
productCover['product-9-h8'] = 3.159; //250g satyna SRA3 0,394
productCover['product-9-h9'] = 3.792; //300g satyna SRA3 0,473
productCover['product-9-h10'] = 4.746; //350g satyna SRA3 0,592
productCover['product-11-h1'] = 1.08098581; //SRA3 karton gc1 250g formaty b1 i a1 * 0.4237
productCover['product-11-h2'] = 1.3799909; //SRA3 karton gc1 300g formaty b1 i a1 * 0.4237
productCover['product-11-h3'] = 1.643; //200g kreda SRA3 0,264
productCover['product-11-h4'] = 2.116; //250g kreda SRA3 0,264
productCover['product-11-h5'] = 2.613; //300g kreda SRA3 0,326
productCover['product-11-h6'] = 3.094; //350g kreda SRA3 0,386
productCover['product-11-h7'] = 2.405; //200g satyna SRA3 0,394
productCover['product-11-h8'] = 3.159; //250g satyna SRA3 0,394
productCover['product-11-h9'] = 3.792; //300g satyna SRA3 0,473
productCover['product-11-h10'] = 4.746; //350g satyna SRA3 0,592

const productOther = new Array();
productOther['product-13-d1'] = 3;
productOther['product-13-d2'] = 1;
productOther['product-13-d3'] = 0;
productOther['product-14-d1'] = 3;
productOther['product-14-d2'] = 1;
productOther['product-14-d3'] = 0;
productOther['product-15-d1'] = 0;
productOther['product-15-d2'] = 15;
productOther['product-15-d3'] = 15;
productOther['product-15-d4'] = 15;
productOther['product-21-d1'] = 15;
productOther['product-21-d2'] = 15;
productOther['product-23-d1'] = 15;
productOther['product-23-d2'] = 15;
productOther['product-24-d1'] = 0;
productOther['product-24-d2'] = 15;
productOther['product-24-d3'] = 15;

const productCrease = new Array();
productCrease['product-3-e1'] = 0;
productCrease['product-3-e2'] = 0.1;
productCrease['product-3-e3'] = 0.2;
productCrease['product-3-e4'] = 0.3;
productCrease['product-3-e5'] = 0.4;
productCrease['product-4-e1'] = 0;
productCrease['product-4-e2'] = 0.1;
productCrease['product-4-e3'] = 0.2;
productCrease['product-4-e4'] = 0.3;
productCrease['product-6-e1'] = 0;
productCrease['product-6-e2'] = 0.1;
productCrease['product-6-e3'] = 0.2;
productCrease['product-6-e4'] = 0.3;
productCrease['product-10-e1'] = 0.1;
productCrease['product-10-e2'] = 0.2;
productCrease['product-28-e1'] = 0;
productCrease['product-28-e2'] = 3;
productCrease['product-28-e3'] = 4;
productCrease['product-28-e4'] = 5;
productCrease['product-28-e5'] = 6;

const productBinding = new Array();
productBinding['product-5-e1'] = 0.3; //zezytowa
productBinding['product-5-e2'] = 0.6; //spiralna
productBinding['product-8-e1'] = 1; 
productBinding['product-8-e2'] = 1.5; 
productBinding['product-9-e1'] = 0.5; //klejona
productBinding['product-11-e1'] = 0.6;//spiralna
productBinding['product-11-e2'] = 0.5;//klejona

const productAccessories = new Array();
productAccessories['product-7-e1'] = 0;
productAccessories['product-7-e2'] = 1;
productAccessories['product-7-e3'] = 1;
productAccessories['product-24-e1'] = 661.10;
productAccessories['product-24-e2'] = 1099;
productAccessories['product-24-e3'] = 1299;
productAccessories['product-24-e4'] = 1099;
productAccessories['product-24-e5'] = 1099;
productAccessories['product-24-e6'] = 999;
productAccessories['product-25-e1'] = 0;
productAccessories['product-25-e2'] = null;
productAccessories['product-25-e3'] = null;
productAccessories['product-26-e1'] = 209;
productAccessories['product-26-e2'] = 159;
productAccessories['product-27-e1'] = 70;
productAccessories['product-27-e2'] = 90;
productAccessories['product-27-e3'] = 110;

const productUnderlay = new Array();
productUnderlay['product-21-e1'] = 30;
productUnderlay['product-21-e2'] = 45;
productUnderlay['product-21-e3'] = 70;

const productSheets = new Array();
productSheets['product-1-f1'] = 1; //SRA3

let theFormProduct = null;

const size = {
  selected: null,
  price: 0,
  sra3: 0.12474,
  a4: 0.06237,
  b4: 0.08825,
};
//digital print cost
const priceDigitalPrint = {
  nonePrint: 0,
  SRA3_colorOneSided: 0.12,
  SRA3_colorAndBlack: 0.192,
  SRA3_colorAndColor: 0.24,
  SRA3_blackOneSided: 0.072,
  SRA3_blackAndBlack: 0.144,
  SRA3_blackOneSidedBlack: 0.02,
  SRA3_blackDubleSideBlack: 0.04,
  A4_blackOneSide:0.01,
  A4_blackDubleSide:0.02
}
//large format print cost
const printingCost = {
  lf: 20,
  cut: 7,
}
const customSize = {
  customDisplay: null,
  countWidth: 0,
  countHeight: 0,
}
const material = {
  selected: null,
  price: 0,
};
const sides = {
  selected: null,
  price: 0,
};
const other = {
  selected: null,
  price: 0,
};
const crease = {
  selected: null,
  price: 0,
};
const accessories = {
  selected: null,
  price: 0,
};
const installation = {
  selected: null,
  price: 0,
}
const underlay = {
  selected: null,
  price: 0,
}
const priceCondition = (count, price) => {
  if(count < 20){
    price *= 12
  }
  else if(count >= 20 && count < 50){
    price *= 8
  }
  else if(count >= 50 && count < 100){
    price *= 6
  }
  else if(count >= 100 && count < 300){
    price *= 5
  }
  else if(count >= 300 && count < 500){
    price *= 4
  }
  else if(count >= 500 && count < 1000){
    price *= 3
  }
  else if(count >= 1000){
    price *= 2.5
  }
  else price = 0

  return price
}

class Foil {
  constructor(product, selectForm, sel1, sel2, sel3, sel4, sel5, sel6, sel7) {
    this.sel1 = sel1
    this.sel2 = sel2
    this.sel3 = sel3
    this.sel4 = sel4
    this.sel5 = sel5
    this.sel6 = sel6
    this.sel7 = sel7
    this.theProductForm = document.forms[product]
    this.selected = this.theProductForm.elements[selectForm]
    this.price = 0.3
  }
  getPriceFoil(countEl, sizeEl) {
    let numberEl = sizeEl / size.sra3
    if (numberEl > 0.5 && numberEl < 1) numberEl = 1  //jeśli został wybrany format b4 to jego wartość jest równa A3
    if(numberEl > 0.25 && numberEl < 0.5) numberEl = 0.5   
    let modifier = Math.ceil(numberEl * countEl)
    let price = 0

    if (this.selected.value === this.sel2 || this.selected.value === this.sel3 || this.selected.value === this.sel4) {
      price = this.price * modifier
    } else if (this.selected.value === this.sel5 || this.selected.value === this.sel6 || this.selected.value === this.sel7) {
      price = (this.price * 2) * modifier
    } else {
      price = 0
    }
    return price
  }
}

class DigitalPrint {
  constructor(product, selectForm, prodC1, prodC2, prodC3, prodC4, prodC5, prodC6, prodC7) {
    this.prodC1 = prodC1 //4 + 0 kolor
    this.prodC2 = prodC2 //4 + 1 kolor
    this.prodC3 = prodC3 //4 + 4 kolor
    this.prodC4 = prodC4 //1 + 0 kolor
    this.prodC5 = prodC5 //1 + 1 kolor
    this.prodC6 = prodC6 //1 + 1 czarno-biały
    this.prodC7 = prodC7 //1 + 1 czarno-biały
    this.theProductForm = document.forms[product]
    this.selected = this.theProductForm.elements[selectForm]
  }
  getPricePrint(countEl, sizeEl) {
    let price = 0
    // let format = (countEl * sizeEl)
    let numberEl = sizeEl / size.sra3
    let modifier = numberEl * countEl
   
    // let selectedSize = theFormProduct1.elements['product-1-size'];
    // let selectedFormat = productSize[selectedSize.value]

    //0.5 jest równe 1 klik do formatu A4
    if (numberEl > 0.5 && numberEl < 1) numberEl = 0.5  //jeśli format jest większy od A4 i mniejszy od A3
    // if (numberEl > 0.5 && numberEl < 1){
    //   numberEl = 0.5
    // }
    modifier = numberEl * countEl
    //color 4 + 0
    if (this.selected.value === this.prodC1) {
      if (numberEl <= 0.5) {
        price = priceDigitalPrint.SRA3_colorOneSided * modifier
      } else if (numberEl > 0.5) {
        price = priceDigitalPrint.SRA3_colorOneSided * countEl
      }
    }
    //color 4 + 1
    else if (this.selected.value === this.prodC2) {
      if (numberEl <= 0.5) {
        price = priceDigitalPrint.SRA3_colorAndBlack * modifier
      } else if (numberEl > 0.5) {
        price = priceDigitalPrint.SRA3_colorAndBlack * countEl
      }
    }
    //color 4 + 4
    else if (this.selected.value === this.prodC3) {
      if (numberEl <= 0.5) {
        price = priceDigitalPrint.SRA3_colorAndColor * modifier
      } else if (numberEl > 0.5) {
        price = priceDigitalPrint.SRA3_colorAndColor * countEl
      }
    }
    //color 1 + 0
    else if (this.selected.value === this.prodC4) {
      if (numberEl <= 0.5) {
        price = priceDigitalPrint.SRA3_blackOneSided * modifier
      } else if (numberEl > 0.5) {
        price = priceDigitalPrint.SRA3_blackOneSided * countEl
      }
    }
    //color 1 + 1
    else if (this.selected.value === this.prodC5) {
      if (numberEl <= 0.5) {
        price = priceDigitalPrint.SRA3_blackAndBlack * modifier
      } else if (numberEl > 0.5) {
        price = priceDigitalPrint.SRA3_blackAndBlack * countEl
      }
    }
    //black 1 + 0 
    else if (this.selected.value === this.prodC6) {
      if (numberEl <= 0.5) {
        price = priceDigitalPrint.SRA3_blackOneSidedBlack * modifier
      } else if (numberEl > 0.5) {
        price = priceDigitalPrint.SRA3_blackOneSidedBlack * countEl
      }
    }
    //black 1 + 1
    else if (this.selected.value === this.prodC7) {
      if (numberEl < 0.5) {
        price = priceDigitalPrint.SRA3_blackDubleSideBlack * modifier
      } else if (numberEl > 0.5) {
        price = priceDigitalPrint.SRA3_blackDubleSideBlack * countEl
      }
    }
     else {
      price = 0
    }
    // console.log(modifier)
    return price
  }

}

class DigitalInnerPrint {
  constructor(product, pages, black, color, empty) {
    this.pages = document.getElementById(pages)
    this.pagesBlack = document.getElementById(black)
    this.pagesColor = document.getElementById(color)
    this.pagesEmpty = document.getElementById(empty)
    this.theProductForm = document.forms[product]
    // this.selected = this.theProductForm.elements[selectForm]
  }

  getProduct_Price(countEl, sizeEl, materialEl) {
    let price
    let count = parseInt(this.pages.value)
    let countColor = parseInt(this.pagesColor.value)
    let countEmpty = parseInt(this.pagesEmpty.value)
    let countBlack = count - countColor - countEmpty
    this.pagesBlack.value = countBlack
    let priceBlack = 0
    let priceColor = 0
    let numberEl = sizeEl / size.a4
    // let format = (count * sizeEl)

    if (numberEl > 0.5 && numberEl < 1) numberEl = 0.5
    if (numberEl > 0 && numberEl < 0.5) numberEl = 0.25

    let modifierBlack = countBlack * numberEl
    let modifierColor = countColor * numberEl

    if (countEl > 0) {
        //warunki druku
        this.pagesEmpty.max = count
        this.pagesColor.max = count

        if (numberEl >= 1) {
          priceBlack = priceDigitalPrint.A4_blackOneSide * countBlack
          priceColor = (priceDigitalPrint.SRA3_colorOneSided / 2) * countColor
        } 
        else if (numberEl < 1) {
          priceBlack = priceDigitalPrint.A4_blackOneSide * modifierBlack
          priceColor = (priceDigitalPrint.SRA3_colorOneSided / 2) * modifierColor
        }

        //warunki ilości
        if(count > 0){
          this.pagesColor.disabled = false
          this.pagesEmpty.disabled = false
          if(countColor >= count){
            this.pagesColor.value = count - countEmpty
            countColor = this.pagesColor.value
            this.pagesEmpty.disabled = true
            this.pagesBlack.value = 0
            countBlack = 0

          }
          else if(countEmpty >= count){
            this.pagesEmpty.value = count - countColor
            countEmpty = this.pagesEmpty.value
            this.pagesColor.disabled = true
            this.pagesBlack.value = 0
            countBlack = 0
          }
          else if(countColor > count || countEmpty > count || countColor + countEmpty > count) return;
          
        }
        else{
          this.pagesColor.disabled = true
          this.pagesEmpty.disabled = true
          this.pagesBlack.value = 0
          this.pagesColor.value = 0
          this.pagesEmpty.value = 0
          priceBlack = 0
          priceColor = 0
        }
    } 
    // modificator(productSheets) * ( y * size) = price
    let sheets = 0.4346
    price =  ((((materialEl * sizeEl) * sheets) / 2) * count) + priceBlack + priceColor
    return price
  }
}

class CardProduct {
  constructor() {
    this.theFormProduct1 = document.forms['product-1'];
    this.print = new DigitalPrint('product-1', 'product-1-print', 'product-1-c1', 'product-1-c2', 'product-1-c3', 'product-1-c4', 'product-1-c5')
    this.foil = new Foil('product-1', 'product-1-foil', 'product-1-d1', 'product-1-d2', 'product-1-d3', 'product-1-d4', 'product-1-d5', 'product-1-d6', 'product-1-d7')
    this.count = document.getElementById('product-1-count').addEventListener('change', this.getProduct_Price.bind(this))
    this.size = document.getElementById('product-1-size').addEventListener('change', this.getProduct_Price.bind(this))
    this.material = document.getElementById('product-1-material').addEventListener('change', this.getProduct_Price.bind(this))
    this.corners = document.getElementById('product-1-corners').addEventListener('click', this.getProduct_Price.bind(this))
    this.printPrice = document.getElementById('product-1-print').addEventListener('change', this.getProduct_Price.bind(this));
    this.foilPrice = document.getElementById('product-1-foil').addEventListener('change', this.getProduct_Price.bind(this));
    this.result = document.querySelector('.product-1-price span')
    this.getProduct_Price()
  }
  getProduct_Count() {
    let count = parseInt(document.getElementById('product-1-count').value);
    return count
  }
  getProduct_Size() {
    let selected = this.theFormProduct1.elements['product-1-size'];
    let price = productSize[selected.value];
    return price
  }
  getProduct_Material() {
    let selected = this.theFormProduct1.elements['product-1-material'];
    let price = productMaterial[selected.value];
    return price
  }

  getCardCorners() {
    let cornersPrice = 0;
    const selectedCorners = this.theFormProduct1.elements["product-1-corners"];
    if (selectedCorners.checked == true) {
      cornersPrice = 0.01;
    } else {
      cornersPrice = 0;
    }
    return cornersPrice;
  }

  getProduct_Price() {
    let count = this.getProduct_Count()
    let sizeProd = this.getProduct_Size()
    let materialProd = this.getProduct_Material()
    let cornersProd = this.getCardCorners()
    let printProd = this.print.getPricePrint(count, sizeProd)
    let foilProd = this.foil.getPriceFoil(count, sizeProd)

    let productPrice = (((sizeProd * materialProd) + cornersProd) * count) + printProd + foilProd;
    if(productPrice){
      let price =  (priceCondition(count, productPrice) * 2) //exception
      this.result.textContent = price.toFixed(2)
    }
  }
}

class Envelope {
  constructor() {
    this.theFormProduct2 = document.forms['product-2'];
    this.print = new DigitalPrint('product-2', 'product-2-print', 'product-2-c1', 'product-2-c2', 'product-2-c3', 'product-2-c4', 'product-2-c5')
    this.count = document.getElementById('product-2-count').addEventListener('change', this.getProduct_Price.bind(this))
    this.size = document.getElementById('product-2-size').addEventListener('change', this.getProduct_Price.bind(this))
    this.material = document.getElementById('product-2-material').addEventListener('change', this.getProduct_Price.bind(this))
    this.printPrice = document.getElementById('product-2-print').addEventListener('change', this.getProduct_Price.bind(this));
    this.result = document.querySelector('.product-2-price span')
    this.getProduct_Price()
  }
  getProduct_Count() {
    let count = parseInt(document.getElementById('product-2-count').value);
    return count
  }
  getProduct_Size() {
    let selected = this.theFormProduct2.elements['product-2-size'];
    let price = productSize[selected.value];
    return price
  }
  getProduct_Material() {
    let selected = this.theFormProduct2.elements['product-2-material'];
    let price = productMaterial[selected.value];
    return price
  }
  getProduct_Price() {
    let count = this.getProduct_Count()
    let sizeProd = this.getProduct_Size()
    let materialProd = this.getProduct_Material()
    let printProd = this.print.getPricePrint(count, sizeProd)

    let productPrice = ((sizeProd * materialProd) * count) + printProd;
    if(productPrice){
      let price =  priceCondition(count, productPrice)
      this.result.textContent = price.toFixed(2)
    }
  }
}

class LeafletProduct {
  constructor() {
    this.theFormProduct3 = document.forms['product-3'];
    this.print = new DigitalPrint('product-3', 'product-3-print', 'product-3-c1', 'product-3-c2', 'product-3-c3', 'product-3-c4', 'product-3-c5')
    this.foil = new Foil('product-3', 'product-3-foil', 'product-3-d1', 'product-3-d2', 'product-3-d3', 'product-3-d4', 'product-3-d5', 'product-3-d6', 'product-3-d7')
    this.count = document.getElementById('product-3-count').addEventListener('change', this.getProduct_Price.bind(this))
    this.size = document.getElementById('product-3-size').addEventListener('change', this.getProduct_Price.bind(this))
    this.material = document.getElementById('product-3-material').addEventListener('change', this.getProduct_Price.bind(this))
    this.crease = document.getElementById('product-3-crease').addEventListener('change', this.getProduct_Price.bind(this))
    this.printPrice = document.getElementById('product-3-print').addEventListener('change', this.getProduct_Price.bind(this));
    this.foilPrice = document.getElementById('product-3-foil').addEventListener('change', this.getProduct_Price.bind(this));
    this.result = document.querySelector('.product-3-price span')
    this.getProduct_Price()
    // this.refreshPage()
  }
  getProduct_Count() {
    let count = parseInt(document.getElementById('product-3-count').value);
    return count
  }
  getProduct_Size() {
    let selected = this.theFormProduct3.elements['product-3-size'];
    let price = productSize[selected.value];
    return price
  }
  getProduct_Material() {
    let selected = this.theFormProduct3.elements['product-3-material'];
    let price = productMaterial[selected.value];
    return price
  }
  getProduct_Crease() {
    let selected = this.theFormProduct3.elements['product-3-crease'];
    let price = productCrease[selected.value];
    return price;
  }
  getProduct_Price() {
    let count = this.getProduct_Count()
    let sizeProd = this.getProduct_Size()
    let materialProd = this.getProduct_Material()
    let creaseProd = this.getProduct_Crease()
    let printProd = this.print.getPricePrint(count, sizeProd)
    let foilProd = this.foil.getPriceFoil(count, sizeProd)
    let productPrice = (((sizeProd * materialProd) + creaseProd) * count) + printProd + foilProd;

    if(productPrice){
      let price =  priceCondition(count, productPrice)
      this.result.textContent = price.toFixed(2)
    }
  }
  refreshPage(){
    let result = 0.104
    const reset = document.querySelectorAll('.reset')
    reset.forEach(res=>res.addEventListener('click', ()=> this.result.textContent = result.toFixed(3)))
  }
}

class Invitation {
  constructor() {
    this.theFormProduct4 = document.forms['product-4'];
    this.print = new DigitalPrint('product-4', 'product-4-print', 'product-4-c1', 'product-4-c2', 'product-4-c3', 'product-4-c4', 'product-4-c5')
    this.foil = new Foil('product-4', 'product-4-foil', 'product-4-d1', 'product-4-d2', 'product-4-d3', 'product-4-d4', 'product-4-d5', 'product-4-d6', 'product-4-d7')
    this.count = document.getElementById('product-4-count').addEventListener('change', this.getProduct_Price.bind(this))
    this.size = document.getElementById('product-4-size').addEventListener('change', this.getProduct_Price.bind(this))
    this.material = document.getElementById('product-4-material').addEventListener('change', this.getProduct_Price.bind(this))
    this.crease = document.getElementById('product-4-crease').addEventListener('change', this.getProduct_Price.bind(this))
    this.printPrice = document.getElementById('product-4-print').addEventListener('change', this.getProduct_Price.bind(this));
    this.foilPrice = document.getElementById('product-4-foil').addEventListener('change', this.getProduct_Price.bind(this));
    this.result = document.querySelector('.product-4-price span')
    this.getProduct_Price()
  }
  getProduct_Count() {
    let count = parseInt(document.getElementById('product-4-count').value);
    return count
  }
  getProduct_Size() {
    let selected = this.theFormProduct4.elements['product-4-size'];
    let price = productSize[selected.value];
    return price
  }
  getProduct_Material() {
    let selected = this.theFormProduct4.elements['product-4-material'];
    let price = productMaterial[selected.value];
    return price
  }
  getProduct_Crease() {
    let selected = this.theFormProduct4.elements['product-4-crease'];
    let price = productCrease[selected.value];
    return price;
  }
  getProduct_Price() {
    let count = this.getProduct_Count()
    let sizeProd = this.getProduct_Size()
    let materialProd = this.getProduct_Material()
    let creaseProd = this.getProduct_Crease()
    let printProd = this.print.getPricePrint(count, sizeProd)
    let foilProd = this.foil.getPriceFoil(count, sizeProd)

    let productPrice = (((sizeProd * materialProd) + creaseProd) * count) + printProd + foilProd;
    if(productPrice){
      let price =  priceCondition(count, productPrice)
      this.result.textContent = price.toFixed(2)
    }
  }
}

class Brochures {
  constructor() {
    this.theFormProduct5 = document.forms['product-5'];
    this.innerPrint = new DigitalInnerPrint('product-5', 'product-5-pages-count', 'product-5-pages-black', 'product-5-pages-color', 'product-5-pages-empty')
    this.print = new DigitalPrint('product-5', 'product-5-print', 'product-5-c1', 'product-5-c2', 'product-5-c3', 'product-5-c4', 'product-5-c5', 'product-5-c6')
    this.foil = new Foil('product-5', 'product-5-foil', 'product-5-d1', 'product-5-d2', 'product-5-d3', 'product-5-d4', 'product-5-d5', 'product-5-d6', 'product-5-d7')

    this.pages = document.getElementById('product-5-pages-count').addEventListener('change', this.getProduct_Price.bind(this));
    this.pagesBlack = document.getElementById('product-5-pages-black').addEventListener('change', this.getProduct_Price.bind(this));
    this.pagesColor = document.getElementById('product-5-pages-color').addEventListener('change', this.getProduct_Price.bind(this));
    this.pagesEmpty = document.getElementById('product-5-pages-empty').addEventListener('change', this.getProduct_Price.bind(this));

    this.count = document.getElementById('product-5-count').addEventListener('change', this.getProduct_Price.bind(this))
    this.size = document.getElementById('product-5-size').addEventListener('change', this.getProduct_Price.bind(this))
    this.material = document.getElementById('product-5-material').addEventListener('change', this.getProduct_Price.bind(this))
    this.cover = document.getElementById('product-5-cover').addEventListener('change', this.getProduct_Price.bind(this))
    this.printPrice = document.getElementById('product-5-print').addEventListener('change', this.getProduct_Price.bind(this));
    this.foilPrice = document.getElementById('product-5-foil').addEventListener('change', this.getProduct_Price.bind(this))
    this.binding = document.getElementById('product-5-binding').addEventListener('change', this.getProduct_Price.bind(this))

    this.result = document.querySelector('.product-5-price span')
    this.getProduct_Price()
  }
  getProduct_Count() {
    let count = parseInt(document.getElementById('product-5-count').value);
    return count
  }
  getProduct_Size() {
    let selected = this.theFormProduct5.elements['product-5-size'];
    let price = productSize[selected.value];
    console.log()
    return price
  }
  getProduct_Material() {
    let selected = this.theFormProduct5.elements['product-5-material'];
    let price = productMaterial[selected.value];
    return price
  }
  getProduct_Cover() {
    let selected = this.theFormProduct5.elements['product-5-cover'];
    let price = productCover[selected.value];
    return price
  }
  getProduct_Binding() {
    let selected = this.theFormProduct5.elements['product-5-binding'];
    let price = productBinding[selected.value];
    return price
  }

  getProduct_Price() {
    let count = this.getProduct_Count()
    let sizeProd = this.getProduct_Size()
    let materialProd = this.getProduct_Material()
    let coverMaterial = this.getProduct_Cover()
    let binding = this.getProduct_Binding()
    let printCover = this.print.getPricePrint(count, (sizeProd * 2))
    let foilProd = this.foil.getPriceFoil(count, (sizeProd * 2))
    let innerPrint = this.innerPrint.getProduct_Price(count, sizeProd, materialProd)

    let productPrice =((((sizeProd * 2) * coverMaterial) + innerPrint + binding) * count) + foilProd + printCover
    if(productPrice){
      let price =  priceCondition(count, productPrice)
      this.result.textContent = price.toFixed(2)
    }
  }

}

class Menu {
  constructor() {
    this.theFormProduct6 = document.forms['product-6'];
    this.print = new DigitalPrint('product-6', 'product-6-print', 'product-6-c1', 'product-6-c2', 'product-6-c3', 'product-6-c4', 'product-6-c5')
    this.foil = new Foil('product-6', 'product-6-foil', 'product-6-d1', 'product-6-d2', 'product-6-d3', 'product-6-d4', 'product-6-d5', 'product-6-d6', 'product-6-d7')
    this.count = document.getElementById('product-6-count').addEventListener('change', this.getProduct_Price.bind(this))
    this.size = document.getElementById('product-6-size').addEventListener('change', this.getProduct_Price.bind(this))
    this.material = document.getElementById('product-6-material').addEventListener('change', this.getProduct_Price.bind(this))
    this.crease = document.getElementById('product-6-crease').addEventListener('change', this.getProduct_Price.bind(this))
    this.printPrice = document.getElementById('product-6-print').addEventListener('change', this.getProduct_Price.bind(this));
    this.foilPrice = document.getElementById('product-6-foil').addEventListener('change', this.getProduct_Price.bind(this));
    this.result = document.querySelector('.product-6-price span')
    this.getProduct_Price()
  }
  getProduct_Count() {
    let count = parseInt(document.getElementById('product-6-count').value);
    return count
  }
  getProduct_Size() {
    let selected = this.theFormProduct6.elements['product-6-size'];
    let price = productSize[selected.value];
    return price
  }
  getProduct_Material() {
    let selected = this.theFormProduct6.elements['product-6-material'];
    let price = productMaterial[selected.value];
    return price
  }
  getProduct_Crease() {
    let selected = this.theFormProduct6.elements['product-6-crease'];
    let price = productCrease[selected.value];
    return price;
  }
  getProduct_Price() {
    let count = this.getProduct_Count()
    let sizeProd = this.getProduct_Size()
    let materialProd = this.getProduct_Material()
    let creaseProd = this.getProduct_Crease()
    let printProd = this.print.getPricePrint(count, sizeProd)
    let foilProd = this.foil.getPriceFoil(count, sizeProd)

    let productPrice = (((sizeProd * materialProd) + creaseProd) * count) + printProd + foilProd;
    if(productPrice){
      let price =  priceCondition(count, productPrice)
      this.result.textContent = price.toFixed(2)
    }
  }
}

class Identifiers {
  constructor() {
    this.theFormProduct7 = document.forms['product-7'];
    this.print = new DigitalPrint('product-7', 'product-7-print', 'product-7-c1', 'product-7-c2', 'product-7-c3', 'product-7-c4', 'product-7-c5')
    this.foil = new Foil('product-7', 'product-7-foil', 'product-7-d1', 'product-7-d2', 'product-7-d3', 'product-7-d4', 'product-7-d5', 'product-7-d6', 'product-7-d7')
    this.count = document.getElementById('product-7-count').addEventListener('change', this.getProduct_Price.bind(this))
    this.size = document.getElementById('product-7-size').addEventListener('change', this.getProduct_Price.bind(this))
    this.material = document.getElementById('product-7-material').addEventListener('change', this.getProduct_Price.bind(this))
    this.printPrice = document.getElementById('product-7-print').addEventListener('change', this.getProduct_Price.bind(this));
    this.foilPrice = document.getElementById('product-7-foil').addEventListener('change', this.getProduct_Price.bind(this));
    this.leash = document.getElementById('product-7-leash').addEventListener('change', this.getProduct_Price.bind(this));
    this.corners = document.getElementById('product-7-corners').addEventListener('click', this.getProduct_Price.bind(this))
    this.result = document.querySelector('.product-7-price span')
    this.getProduct_Price()
  }
  getProduct_Count() {
    let count = parseInt(document.getElementById('product-7-count').value);
    return count
  }
  getProduct_Size() {
    let selected = this.theFormProduct7.elements['product-7-size'];
    let price = productSize[selected.value];
    return price
  }
  getProduct_Material() {
    let selected = this.theFormProduct7.elements['product-7-material'];
    let price = productMaterial[selected.value];
    return price
  }
  getProduct_Accessories() {
    let selected = this.theFormProduct7.elements['product-7-leash'];
    let price = productAccessories[selected.value];
    return price
  }
  getCardCorners() {
    let cornersPrice = 0;
    const selectedCorners = this.theFormProduct7.elements["product-7-corners"];
    if (selectedCorners.checked == true) {
      cornersPrice = 0.10;
    } else {
      cornersPrice = 0;
    }
    return cornersPrice;
  }
  getProduct_Price() {
    let count = this.getProduct_Count()
    let sizeProd = this.getProduct_Size()
    let materialProd = this.getProduct_Material()
    let leash = this.getProduct_Accessories()
    let cornersProd = this.getCardCorners()
    let printProd = this.print.getPricePrint(count, sizeProd)
    let foilProd = this.foil.getPriceFoil(count, sizeProd)

    let productPrice = (((sizeProd * materialProd) + leash + cornersProd) * count) + printProd + foilProd;
    if(productPrice){
      let price =  priceCondition(count, productPrice)
      this.result.textContent = price.toFixed(2)
    }
  }
}

class Calendars {
  constructor() {
    this.theFormProduct8 = document.forms['product-8'];
    this.print = new DigitalPrint('product-8', 'product-8-print', 'product-8-c1', 'product-8-c2', 'product-8-c3', 'product-8-c4', 'product-8-c5')
    this.foil = new Foil('product-8', 'product-8-foil', 'product-8-d1', 'product-8-d2', 'product-8-d3', 'product-8-d4', 'product-8-d5', 'product-8-d6', 'product-8-d7')
    this.count = document.getElementById('product-8-count').addEventListener('change', this.getProduct_Price.bind(this))
    this.size = document.getElementById('product-8-size').addEventListener('change', this.getProduct_Price.bind(this))
    this.material = document.getElementById('product-8-material').addEventListener('change', this.getProduct_Price.bind(this))
    this.printPrice = document.getElementById('product-8-print').addEventListener('change', this.getProduct_Price.bind(this));
    this.foilPrice = document.getElementById('product-8-foil').addEventListener('change', this.getProduct_Price.bind(this));
    this.pendant = document.getElementById('product-8-binding').addEventListener('change', this.getProduct_Price.bind(this));
    this.result = document.querySelector('.product-8-price span')
    this.getProduct_Price()
  }
  getProduct_Count() {
    let count = parseInt(document.getElementById('product-8-count').value);
    return count
  }
  getProduct_Size() {
    let selected = this.theFormProduct8.elements['product-8-size'];
    let price = productSize[selected.value];
    return price
  }
  getProduct_Material() {
    let selected = this.theFormProduct8.elements['product-8-material'];
    let price = productMaterial[selected.value];
    return price
  }
  getProduct_Accessories() {
    let selected = this.theFormProduct8.elements['product-8-binding'];
    let price = productBinding[selected.value];
    return price
  }

  getProduct_Price() {
    let count = this.getProduct_Count()
    let sizeProd = this.getProduct_Size()
    let materialProd = this.getProduct_Material()
    let pendant = this.getProduct_Accessories()
    let printProd = this.print.getPricePrint(count, sizeProd)
    let foilProd = this.foil.getPriceFoil(count, sizeProd)
    const pages = 12  //pages in calendar * print

    let productPrice = (((sizeProd * materialProd) * pages) * count) + (printProd * pages) + (foilProd * pages) + (pendant * count);
    if(productPrice){
      let price =  priceCondition(count, productPrice)
      this.result.textContent = price.toFixed(2)
    }
  }
}

class Books {
  constructor() {
    this.theFormProduct9 = document.forms['product-9'];
    this.innerPrint = new DigitalInnerPrint('product-9', 'product-9-pages-count', 'product-9-pages-black', 'product-9-pages-color', 'product-9-pages-empty')
    this.print = new DigitalPrint('product-9', 'product-9-print', 'product-9-c1', 'product-9-c2', 'product-9-c3', 'product-9-c4', 'product-9-c5', 'product-9-c6')
    this.foil = new Foil('product-9', 'product-9-foil', 'product-9-d1', 'product-9-d2', 'product-9-d3', 'product-9-d4')

    this.pages = document.getElementById('product-9-pages-count').addEventListener('change', this.getProduct_Price.bind(this));
    this.pagesBlack = document.getElementById('product-9-pages-black').addEventListener('change', this.getProduct_Price.bind(this));
    this.pagesColor = document.getElementById('product-9-pages-color').addEventListener('change', this.getProduct_Price.bind(this));
    this.pagesEmpty = document.getElementById('product-9-pages-empty').addEventListener('change', this.getProduct_Price.bind(this));

    this.count = document.getElementById('product-9-count').addEventListener('change', this.getProduct_Price.bind(this))
    this.size = document.getElementById('product-9-size').addEventListener('change', this.getProduct_Price.bind(this))
    this.material = document.getElementById('product-9-material').addEventListener('change', this.getProduct_Price.bind(this))
    this.cover = document.getElementById('product-9-cover').addEventListener('change', this.getProduct_Price.bind(this))
    this.printPrice = document.getElementById('product-9-print').addEventListener('change', this.getProduct_Price.bind(this));
    this.foilPrice = document.getElementById('product-9-foil').addEventListener('change', this.getProduct_Price.bind(this))
    this.binding = document.getElementById('product-9-binding').addEventListener('change', this.getProduct_Price.bind(this))
    this.wings = document.getElementById('product-9-wings').addEventListener('click', this.getProduct_Price.bind(this))
    this.result = document.querySelector('.product-9-price span')
    this.getProduct_Price()
  }
  getProduct_Count() {
    let count = parseInt(document.getElementById('product-9-count').value);
    return count
  }
  getProduct_Size() {
    let selected = this.theFormProduct9.elements['product-9-size'];
    let price = productSize[selected.value];
    return price
  }
  getProduct_Material() {
    let selected = this.theFormProduct9.elements['product-9-material'];
    let price = productMaterial[selected.value];
    return price
  }
  getProduct_Cover() {
    let selected = this.theFormProduct9.elements['product-9-cover'];
    let price = productCover[selected.value];
    return price
  }
  getProduct_Binding() {
    let selected = this.theFormProduct9.elements['product-9-binding'];
    let price = productBinding[selected.value];
    return price
  }
  getProductWings(count, size, material, print, foil) {
    let price = 0;
    let selected = this.theFormProduct9.elements['product-9-wings'];
    if (selected.checked == true && this.getProduct_Cover() > 0) {
      price = ((size * material) * count ) + print + foil
    } else {
      price = 0;
    }
    return price;
  }

  getProduct_Price() {
    let count = this.getProduct_Count()
    let sizeProd = this.getProduct_Size()
    let materialProd = this.getProduct_Material()
    let coverMaterial = this.getProduct_Cover()
    let binding = this.getProduct_Binding()
    let printCover = this.print.getPricePrint(count, (sizeProd * 2))
    let foilProd = this.foil.getPriceFoil(count, (sizeProd * 2))
    let innerPrint = this.innerPrint.getProduct_Price(count, sizeProd, materialProd)
    let wings = this.getProductWings(count, sizeProd, coverMaterial, (printCover / 2), (foilProd / 2))

    let productPrice =((((sizeProd * 2) * coverMaterial) + innerPrint + binding) * count) + foilProd + printCover + wings
    if(productPrice){
      let price =  priceCondition(count, productPrice)
      this.result.textContent = price.toFixed(2)
    }
  }
}

class Folder {
  constructor() {
    this.theFormProduct10 = document.forms['product-10'];
    this.print = new DigitalPrint('product-10', 'product-10-print', 'product-10-c1', 'product-10-c2', 'product-10-c3', 'product-10-c4', 'product-10-c5')
    this.foil = new Foil('product-10', 'product-10-foil', 'product-10-d1', 'product-10-d2', 'product-10-d3', 'product-10-d4', 'product-10-d5', 'product-10-d6', 'product-10-d7')
    this.count = document.getElementById('product-10-count').addEventListener('change', this.getProduct_Price.bind(this))
    this.size = document.getElementById('product-10-size').addEventListener('change', this.getProduct_Price.bind(this))
    this.material = document.getElementById('product-10-material').addEventListener('change', this.getProduct_Price.bind(this))
    this.crease = document.getElementById('product-10-crease').addEventListener('change', this.getProduct_Price.bind(this))
    this.printPrice = document.getElementById('product-10-print').addEventListener('change', this.getProduct_Price.bind(this));
    this.foilPrice = document.getElementById('product-10-foil').addEventListener('change', this.getProduct_Price.bind(this));
    this.result = document.querySelector('.product-10-price span')
    this.getProduct_Price()
  }
  getProduct_Count() {
    let count = parseInt(document.getElementById('product-10-count').value);
    return count
  }
  getProduct_Size() {
    let selected = this.theFormProduct10.elements['product-10-size'];
    let price = productSize[selected.value];
    return price
  }
  getProduct_Material() {
    let selected = this.theFormProduct10.elements['product-10-material'];
    let price = productMaterial[selected.value];
    return price
  }
  getProduct_Crease() {
    let selected = this.theFormProduct10.elements['product-10-crease'];
    let price = productCrease[selected.value];
    return price;
  }
  getProduct_Price() {
    let count = this.getProduct_Count()
    let sizeProd = this.getProduct_Size()
    let materialProd = this.getProduct_Material()
    let creaseProd = this.getProduct_Crease()
    let printProd = this.print.getPricePrint(count, sizeProd)
    let foilProd = this.foil.getPriceFoil(count, sizeProd)

    let productPrice = (((sizeProd * materialProd) + creaseProd) * count) + printProd + foilProd;
    if(productPrice){
      let price =  priceCondition(count, productPrice)
      this.result.textContent = price.toFixed(2)
    }
  }
}

class Notebooks {
  constructor() {
    this.theFormProduct11 = document.forms['product-11'];
    this.innerPrint = new DigitalInnerPrint('product-11', 'product-11-pages-count', 'product-11-pages-black', 'product-11-pages-color', 'product-11-pages-empty')
    this.print = new DigitalPrint('product-11', 'product-11-print', 'product-11-c1', 'product-11-c2', 'product-11-c3', 'product-11-c4', 'product-11-c5', 'product-11-c6')
    this.foil = new Foil('product-11', 'product-11-foil', 'product-11-d1', 'product-11-d2', 'product-11-d3', 'product-11-d4')

    this.pages = document.getElementById('product-11-pages-count').addEventListener('change', this.getProduct_Price.bind(this));
    this.pagesBlack = document.getElementById('product-11-pages-black').addEventListener('change', this.getProduct_Price.bind(this));
    this.pagesColor = document.getElementById('product-11-pages-color').addEventListener('change', this.getProduct_Price.bind(this));
    this.pagesEmpty = document.getElementById('product-11-pages-empty').addEventListener('change', this.getProduct_Price.bind(this));

    this.count = document.getElementById('product-11-count').addEventListener('change', this.getProduct_Price.bind(this))
    this.size = document.getElementById('product-11-size').addEventListener('change', this.getProduct_Price.bind(this))
    this.material = document.getElementById('product-11-material').addEventListener('change', this.getProduct_Price.bind(this))
    this.cover = document.getElementById('product-11-cover').addEventListener('change', this.getProduct_Price.bind(this))
    this.printPrice = document.getElementById('product-11-print').addEventListener('change', this.getProduct_Price.bind(this));
    this.foilPrice = document.getElementById('product-11-foil').addEventListener('change', this.getProduct_Price.bind(this))
    this.binding = document.getElementById('product-11-binding').addEventListener('change', this.getProduct_Price.bind(this))
    this.result = document.querySelector('.product-11-price span')
    this.getProduct_Price()
  }
  getProduct_Count() {
    let count = parseInt(document.getElementById('product-11-count').value);
    return count
  }
  getProduct_Size() {
    let selected = this.theFormProduct11.elements['product-11-size'];
    let price = productSize[selected.value];
    return price
  }
  getProduct_Material() {
    let selected = this.theFormProduct11.elements['product-11-material'];
    let price = productMaterial[selected.value];
    return price
  }
  getProduct_Cover() {
    let selected = this.theFormProduct11.elements['product-11-cover'];
    let price = productCover[selected.value];
    return price
  }
  getProduct_Binding() {
    let selected = this.theFormProduct11.elements['product-11-binding'];
    let price = productBinding[selected.value];
    return price
  }

  getProduct_Price() {
    let count = this.getProduct_Count()
    let sizeProd = this.getProduct_Size()
    let materialProd = this.getProduct_Material()
    let coverMaterial = this.getProduct_Cover()
    let binding = this.getProduct_Binding()
    let printCover = this.print.getPricePrint(count, (sizeProd * 2))
    let foilProd = this.foil.getPriceFoil(count, (sizeProd * 2))
    let innerPrint = this.innerPrint.getProduct_Price(count, sizeProd, materialProd)

    let productPrice =((((sizeProd * 2) * coverMaterial) + innerPrint + binding) * count) + foilProd + printCover
    if(productPrice){
      let price =  priceCondition(count, productPrice)
      this.result.textContent = price.toFixed(2)
    }
  }
}

class Letterhead {
  constructor() {
    this.theFormProduct12 = document.forms['product-12'];
    this.print = new DigitalPrint('product-12', 'product-12-print', 'product-12-c1', 'product-12-c2', 'product-12-c3', 'product-12-c4', 'product-12-c5')
    this.count = document.getElementById('product-12-count').addEventListener('change', this.getProduct_Price.bind(this))
    this.size = document.getElementById('product-12-size').addEventListener('change', this.getProduct_Price.bind(this))
    this.material = document.getElementById('product-12-material').addEventListener('change', this.getProduct_Price.bind(this))
    this.printPrice = document.getElementById('product-12-print').addEventListener('change', this.getProduct_Price.bind(this));
    this.result = document.querySelector('.product-12-price span')
    this.getProduct_Price()
    // this.refreshPage()
  }
  getProduct_Count() {
    let count = parseInt(document.getElementById('product-12-count').value);
    return count
  }
  getProduct_Size() {
    let selected = this.theFormProduct12.elements['product-12-size'];
    let price = productSize[selected.value];
    return price
  }
  getProduct_Material() {
    let selected = this.theFormProduct12.elements['product-12-material'];
    let price = productMaterial[selected.value];
    return price
  }

  getProduct_Price() {
    let count = this.getProduct_Count()
    let sizeProd = this.getProduct_Size()
    let materialProd = this.getProduct_Material()
    let printProd = this.print.getPricePrint(count, sizeProd)

    let productPrice = ((sizeProd * materialProd) * count) + printProd;
    if(productPrice){
      let price =  priceCondition(count, productPrice)
      this.result.textContent = price.toFixed(2)
    }
  }
}

export const calculateDp = () => {
  const cardProduct = new CardProduct()
  const envelope = new Envelope()
  const leafletProduct = new LeafletProduct()
  const invitation = new Invitation()
  const brochures = new Brochures()
  const menu = new Menu()
  const identifiers = new Identifiers()
  const calendars = new Calendars()
  const books = new Books()
  const folder = new Folder()
  const notebooks = new Notebooks()
  const letterhead = new Letterhead()
}

//BANERY
function product13_Price() {
  const theFormProduct = document.forms['product-13'];

  function getProduct13_Count() {
    let count = parseInt(document.getElementById('product-13-count').value);
    document.getElementById('product-13-count').addEventListener('change', product13_Price)
    return count
  }

  function getProduct13_Size() {
    size.selected = theFormProduct.elements['product-13-size'];
    size.price = productSize[size.selected.value];
    customSize.customDisplay = [...document.querySelectorAll('.product-13-custom-size')];
    customSize.countWidth = parseInt(document.getElementById('product-13-custom-width').value);
    customSize.countHeight = parseInt(document.getElementById('product-13-custom-height').value);
    document.getElementById('product-13-size').addEventListener('change', product13_Price)
    document.getElementById('product-13-custom-width').addEventListener('change', product13_Price)
    document.getElementById('product-13-custom-height').addEventListener('change', product13_Price)

    function getCustomSize() {

      let customPrice = (customSize.countWidth * customSize.countHeight) / 10000 //cm
      return customPrice
    }
    if (size.selected.value === 'product-13-a1') {
      customSize.customDisplay.forEach(item => item.style.display = 'block')
    } else {
      customSize.customDisplay.forEach(item => item.style.display = 'none')
    }

    if (size.selected.value === 'product-13-a1') {
      return getCustomSize()
    } else {
      return size.price
    }
  }

  function getProduct13_Material() {
    material.selected = theFormProduct.elements['product-13-material'];
    material.price = productMaterial[material.selected.value];
    const doubleSide = document.querySelector('.dubleSide')
    document.getElementById('product-13-material').addEventListener('change', product13_Price)
    if (material.selected.value === 'product-13-b3') {
      doubleSide.style.display = 'block'
    } else {
      doubleSide.style.display = 'none'
    }
    return material.price
  }

  function getProduct13_Sides() {
    sides.selected = theFormProduct.elements['product-13-sides'];
    sides.price = productSides[sides.selected.value];
    document.getElementById('product-13-sides').addEventListener('change', product13_Price)
    let sidesPrice = ((getProduct13_Size() * sides.price) * printingCost.lf)
    if (material.selected.value !== 'product-13-b3') {
      sidesPrice = 0
    }
    return sidesPrice;
  }

  function getProduct13_Other() {
    other.selected = theFormProduct.elements['product-13-other'];
    other.price = productOther[other.selected.value];
    document.getElementById('product-13-other').addEventListener('change', product13_Price)
    return other.price
  }

  function getProduct13_Price() {
    let productPrice = (((((getProduct13_Size() * getProduct13_Material()) * printingCost.lf) + getProduct13_Sides()) * getProduct13_Count()) +
      ((getProduct13_Other() * getProduct13_Size()) * getProduct13_Count())) * 1.23

      let count = getProduct13_Count()
      if(count){

        if (count >= 5 ) {
          productPrice = productPrice + 10
          productPrice*= 0.95
        }
        if (count >= 10 ) {
          productPrice = productPrice + 30
          productPrice*= 0.93
        }
      }
    document.querySelector('.product-13-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct13_Price()
}

//SIATTKI
function product14_Price() {
  const theFormProduct = document.forms['product-14'];

  function getProduct14_Count() {
    let count = parseInt(document.getElementById('product-14-count').value);
    document.getElementById('product-14-count').addEventListener('change', product14_Price)
    return count
  }

  function getProduct14_Size() {
    size.selected = theFormProduct.elements['product-14-size'];
    size.price = productSize[size.selected.value];
    customSize.customDisplay = [...document.querySelectorAll('.product-14-custom-size')];
    customSize.countWidth = parseInt(document.getElementById('product-14-custom-width').value);
    customSize.countHeight = parseInt(document.getElementById('product-14-custom-height').value);
    document.getElementById('product-14-size').addEventListener('change', product14_Price)
    document.getElementById('product-14-custom-width').addEventListener('change', product14_Price)
    document.getElementById('product-14-custom-height').addEventListener('change', product14_Price)

    function getCustomSize() {

      let customPrice = (customSize.countWidth * customSize.countHeight) / 10000 //cm
      return customPrice
    }
    if (size.selected.value === 'product-14-a1') {
      customSize.customDisplay.forEach(item => item.style.display = 'block')
    } else {
      customSize.customDisplay.forEach(item => item.style.display = 'none')
    }

    if (size.selected.value === 'product-14-a1') {
      return getCustomSize()
    } else {
      return size.price
    }
  }

  function getProduct14_Material() {
    material.selected = theFormProduct.elements['product-14-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-14-material').addEventListener('change', product14_Price)
    return material.price
  }

  function getProduct14_Other() {
    other.selected = theFormProduct.elements['product-14-other'];
    other.price = productOther[other.selected.value];
    document.getElementById('product-14-other').addEventListener('change', product14_Price)
    return other.price
  }

  function getProduct14_Price() {
    const productPrice = ((((getProduct14_Size() * getProduct14_Material()) * printingCost.lf) * getProduct14_Count()) +
      ((getProduct14_Other() * getProduct14_Size()) * getProduct14_Count())) * 1.23
      let count = getProduct14_Count()
      if(count){

        if (count >= 5 ) {
          productPrice = productPrice + 10
          productPrice*= 0.95
        }
        if (count >= 10 ) {
          productPrice = productPrice + 30
          productPrice*= 0.93
        }
      }
    document.querySelector('.product-14-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct14_Price()
}

//FOLIA SAMOPRZYLEPNA
function product15_Price() {
  const theFormProduct = document.forms['product-15'];

  function getProduct15_Count() {
    let count = parseInt(document.getElementById('product-15-count').value);
    document.getElementById('product-15-count').addEventListener('change', product15_Price)
    return count
  }

  function getProduct15_Size() {
    size.selected = theFormProduct.elements['product-15-size'];
    size.price = productSize[size.selected.value];
    customSize.customDisplay = document.querySelector('.product-15-custom-size');
    customSize.countWidth = parseInt(document.getElementById('product-15-custom-width').value);
    customSize.countHeight = parseInt(document.getElementById('product-15-custom-height').value);
    document.getElementById('product-15-size').addEventListener('change', product15_Price)
    document.getElementById('product-15-custom-width').addEventListener('change', product15_Price)
    document.getElementById('product-15-custom-height').addEventListener('change', product15_Price)

    function getCustomSize() {

      let customPrice = (customSize.countWidth * customSize.countHeight) / 10000 //cm
      return customPrice
    }
    if (size.selected.value === 'product-15-a1') {
      customSize.customDisplay.style.display = 'block'
    } else {
      customSize.customDisplay.style.display = 'none'
    }

    if (size.selected.value === 'product-15-a1') {
      return getCustomSize()
    } else {
      return size.price
    }

  }

  function getProduct15_Material() {
    material.selected = theFormProduct.elements['product-15-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-15-material').addEventListener('change', product15_Price)
    return material.price
  }

  function getProduct15_Other() {
    other.selected = theFormProduct.elements['product-15-other'];
    other.price = productOther[other.selected.value];
    document.getElementById('product-15-other').addEventListener('change', product15_Price)
    return other.price
  }

  function getProduct15_Cut() {
    let cutPrice = 0;
    const selectedProduct = theFormProduct.elements["product-15-cut-by-contour"];
    document.getElementById('product-15-cut-by-contour').addEventListener('click', product15_Price)
    if (selectedProduct.checked == true) {
      cutPrice = 5;
    } else {
      cutPrice = 0;
    }
    return cutPrice;
  }

  function getProduct15_Price() {
    let productPrice = ((((getProduct15_Size() * getProduct15_Material()) * printingCost.lf) * getProduct15_Count()) +
      ((getProduct15_Other() * getProduct15_Size()) * getProduct15_Count()) +
      ((getProduct15_Size() * getProduct15_Cut()) * getProduct15_Count())) * 1.23
      let count = getProduct15_Count()
      if(count){

        if (count >= 5 ) {
          productPrice = productPrice + 10
          productPrice*= 0.95
        }
        if (count >= 10 ) {
          productPrice = productPrice + 30
          productPrice*= 0.93
        }
      }
    document.querySelector('.product-15-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct15_Price()
}

//FOTO OBRAZY
function product16_Price() {
  const theFormProduct = document.forms['product-16'];

  function getProduct16_Count() {
    let count = parseInt(document.getElementById('product-16-count').value);
    document.getElementById('product-16-count').addEventListener('change', product16_Price)
    return count
  }

  function getProduct16_Size() {
    size.selected = theFormProduct.elements['product-16-size'];
    size.price = productSize[size.selected.value];
    customSize.customDisplay = [...document.querySelectorAll('.product-16-custom-size')];
    customSize.countWidth = parseInt(document.getElementById('product-16-custom-width').value);
    customSize.countHeight = parseInt(document.getElementById('product-16-custom-height').value);
    document.getElementById('product-16-size').addEventListener('change', product16_Price);
    document.getElementById('product-16-custom-width').addEventListener('change', product16_Price);
    document.getElementById('product-16-custom-height').addEventListener('change', product16_Price);

    function getCustomSize() {
      let customPrice = (customSize.countWidth * customSize.countHeight) / 10000 //cm
      return customPrice
    }

    if (size.selected.value === 'product-16-a1') {
      customSize.customDisplay.forEach(item => item.style.display = 'block')
    } else {
      customSize.customDisplay.forEach(item => item.style.display = 'none')
    }

    if (size.selected.value === 'product-16-a1') {
      return getCustomSize()
    } else {
      return size.price
    }

  }

  function getProduct16_Material() {
    material.selected = theFormProduct.elements['product-16-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-16-material').addEventListener('change', product16_Price);
    return material.price
  }


  function getProduct16_Price() {
    let productPrice = ((((getProduct16_Size() * getProduct16_Material()) * printingCost.lf) * getProduct16_Count())) * 1.23
    let count = getProduct16_Count()
    if(count){

      if (count >= 5 ) {
        productPrice = productPrice + 10
        productPrice*= 0.95
      }
      if (count >= 10 ) {
        productPrice = productPrice + 30
        productPrice*= 0.93
      }
    }
    document.querySelector('.product-16-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct16_Price()
}

//BILBOARDY
function product17_Price() {
  const theFormProduct = document.forms['product-17'];

  function getProduct17_Count() {
    let count = parseInt(document.getElementById('product-17-count').value);
    document.getElementById('product-17-count').addEventListener('change', product17_Price);
    return count
  }

  function getProduct17_Size() {
    size.selected = theFormProduct.elements['product-17-size'];
    size.price = productSize[size.selected.value];
    customSize.customDisplay = [...document.querySelectorAll('.product-17-custom-size')];
    customSize.countWidth = parseInt(document.getElementById('product-17-custom-width').value);
    customSize.countHeight = parseInt(document.getElementById('product-17-custom-height').value);
    document.getElementById('product-17-size').addEventListener('change', product17_Price);
    document.getElementById('product-17-custom-width').addEventListener('change', product17_Price);
    document.getElementById('product-17-custom-height').addEventListener('change', product17_Price);

    function getCustomSize() {

      let customPrice = (customSize.countWidth * customSize.countHeight) / 10000 //cm
      return customPrice
    }
    if (size.selected.value === 'product-17-a2') {
      customSize.customDisplay.forEach(item => item.style.display = 'block')
    } else {
      customSize.customDisplay.forEach(item => item.style.display = 'none')
    }

    if (size.selected.value === 'product-17-a2') {
      return getCustomSize()
    } else {
      return size.price
    }
  }

  function getProduct17_Material() {
    material.selected = theFormProduct.elements['product-17-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-17-material').addEventListener('change', product17_Price);
    return material.price
  }

  function getProduct17_Installation() {
    installation.selected = theFormProduct.elements["product-17-installation"];
    document.getElementById('product-17-installation').addEventListener('click', product17_Price);

    if (installation.selected.checked == true) {
      installation.price = 30;
    } else {
      installation.price = 0;
    }
    return installation.price
  }

  function getProduct17_Price() {
    let productPrice = ((((getProduct17_Size() * getProduct17_Material()) * printingCost.lf) * getProduct17_Count()) +
      ((getProduct17_Installation() * getProduct17_Size()) * getProduct17_Count())) * 1.23
      let count = getProduct17_Count()
      if(count){
  
        if (count >= 5 ) {
          productPrice = productPrice + 10
          productPrice*= 0.95
        }
        if (count >= 10 ) {
          productPrice = productPrice + 30
          productPrice*= 0.93
        }
      }
    document.querySelector('.product-17-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct17_Price()
}

//PLAKATY
function product18_Price() {
  const theFormProduct = document.forms['product-18'];

  function getProduct18_Count() {
    let count = parseInt(document.getElementById('product-18-count').value);
    document.getElementById('product-18-count').addEventListener('change', product18_Price);
    return count
  }

  function getProduct18_Size() {
    size.selected = theFormProduct.elements['product-18-size'];
    size.price = productSize[size.selected.value];
    customSize.customDisplay = [...document.querySelectorAll('.product-18-custom-size')];
    customSize.countWidth = parseInt(document.getElementById('product-18-custom-width').value);
    customSize.countHeight = parseInt(document.getElementById('product-18-custom-height').value);
    document.getElementById('product-18-size').addEventListener('change', product18_Price);
    document.getElementById('product-18-custom-width').addEventListener('change', product18_Price);
    document.getElementById('product-18-custom-height').addEventListener('change', product18_Price);

    function getCustomSize() {
      let customPrice = (customSize.countWidth * customSize.countHeight) / 10000 //cm
      return customPrice
    }
    if (size.selected.value === 'product-18-a1') {
      customSize.customDisplay.forEach(item => item.style.display = 'block')
    } else {
      customSize.customDisplay.forEach(item => item.style.display = 'none')
    }

    if (size.selected.value === 'product-18-a1') {
      return getCustomSize()
    } else {
      return size.price
    }

  }

  function getProduct18_Material() {
    material.selected = theFormProduct.elements['product-18-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-18-material').addEventListener('change', product18_Price);
    return material.price
  }


  function getProduct18_Price() {
    let productPrice = (((getProduct18_Size() * getProduct18_Material()) * printingCost.lf) * getProduct18_Count()) * 1.23
    let count = getProduct18_Count()
    if(count){
      if(count){

        if (count >= 5 ) {
          productPrice = productPrice + 7
          productPrice*= 0.94
        }
        if (count >= 10 ) {
          productPrice = productPrice + 23
          productPrice*= 0.92
        }
        if (count >= 50 ) {
          productPrice = productPrice + 157
          productPrice*= 0.90
        }
      }
    }
    document.querySelector('.product-18-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct18_Price()
}

//CITYLIGHT
function product19_Price() {
  const theFormProduct = document.forms['product-19'];

  function getProduct19_Count() {
    let count = parseInt(document.getElementById('product-19-count').value);
    document.getElementById('product-19-count').addEventListener('change', product19_Price);
    return count
  }

  function getProduct19_Size() {
    size.selected = theFormProduct.elements['product-19-size'];
    size.price = productSize[size.selected.value];
    customSize.customDisplay = [...document.querySelectorAll('.product-19-custom-size')];
    customSize.countWidth = parseInt(document.getElementById('product-19-custom-width').value);
    customSize.countHeight = parseInt(document.getElementById('product-19-custom-height').value);
    document.getElementById('product-19-size').addEventListener('change', product19_Price);
    document.getElementById('product-19-custom-width').addEventListener('change', product19_Price);
    document.getElementById('product-19-custom-height').addEventListener('change', product19_Price);

    function getCustomSize() {

      let customPrice = (customSize.countWidth * customSize.countHeight) / 10000 //cm
      return customPrice
    }
    if (size.selected.value === 'product-19-a1') {
      customSize.customDisplay.forEach(item => item.style.display = 'block')
    } else {
      customSize.customDisplay.forEach(item => item.style.display = 'none')
    }

    if (size.selected.value === 'product-19-a1') {
      return getCustomSize()
    } else {
      return size.price
    }

  }

  function getProduct19_Material() {
    material.selected = theFormProduct.elements['product-19-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-19-material').addEventListener('change', product19_Price);
    return material.price
  }

  function getProduct19_Price() {

    let productPrice = (((getProduct19_Size() * getProduct19_Material()) * printingCost.lf) * getProduct19_Count()) * 1.23
    let count = getProduct19_Count()
    if(count){
      if(count){

        if (count >= 5 ) {
          productPrice = productPrice + 7
          productPrice*= 0.94
        }
        if (count >= 10 ) {
          productPrice = productPrice + 21
          productPrice*= 0.92
        }
        if (count >= 50 ) {
          productPrice = productPrice + 157
          productPrice*= 0.90
        }
      }
    }
    document.querySelector('.product-19-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct19_Price()
}

//FOTOTAPETY
function product20_Price() {
  const theFormProduct = document.forms['product-20'];

  function getProduct20_Count() {
    let count = parseInt(document.getElementById('product-20-count').value);
    document.getElementById('product-20-count').addEventListener('change', product20_Price)
    return count
  }

  function getProduct20_Size() {
    size.selected = theFormProduct.elements['product-20-size'];
    size.price = productSize[size.selected.value];
    customSize.customDisplay = [...document.querySelectorAll('.product-20-custom-size')];
    customSize.countWidth = parseInt(document.getElementById('product-20-custom-width').value);
    customSize.countHeight = parseInt(document.getElementById('product-20-custom-height').value);
    document.getElementById('product-20-size').addEventListener('change', product20_Price);
    document.getElementById('product-20-custom-width').addEventListener('change', product20_Price);
    document.getElementById('product-20-custom-height').addEventListener('change', product20_Price);

    function getcustomSize() {
      let customPrice = (customSize.countWidth * customSize.countHeight) / 10000 //cm
      return customPrice
    }

    if (size.selected.value === 'product-20-a1') {
      customSize.customDisplay.forEach(item => item.style.display = 'block')
    } else {
      customSize.customDisplay.forEach(item => item.style.display = 'none')
    }

    if (size.selected.value === 'product-20-a1') {
      return getcustomSize()
    } else {
      return size.price
    }

  }

  function getProduct20_Material() {
    material.selected = theFormProduct.elements['product-20-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-20-material').addEventListener('change', product20_Price);
    return material.price
  }

  function getProduct20_Installation() {
    installation.selected = theFormProduct.elements["product-20-installation"];
    document.getElementById('product-20-installation').addEventListener('click', product20_Price);

    if (installation.selected.checked == true) {
      installation.price = 30;
    } else {
      installation.price = 0;
    }
    return installation.price
  }

  function getProduct20_Price() {
    let productPrice = ((((getProduct20_Size() * getProduct20_Material()) * printingCost.lf) * getProduct20_Count()) +
      ((getProduct20_Installation() * getProduct20_Size()) * getProduct20_Count())) * 1.23
      let count = getProduct20_Count()
      if(count){
        if (count >= 5 ) {
          productPrice = productPrice + 10
          productPrice*= 0.95
        }
        if (count >= 10 ) {
          productPrice = productPrice + 30
          productPrice*= 0.93
        }
      }
    document.querySelector('.product-20-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct20_Price()
}

//TABLICE
function product21_Price() {
  const theFormProduct = document.forms['product-21'];

  function getProduct21_Count() {
    let count = parseInt(document.getElementById('product-21-count').value);
    document.getElementById('product-21-count').addEventListener('change', product21_Price)
    return count
  }

  function getProduct21_Size() {
    size.selected = theFormProduct.elements['product-21-size'];
    size.price = productSize[size.selected.value];
    customSize.customDisplay = [...document.querySelectorAll('.product-21-custom-size')];
    customSize.countWidth = parseInt(document.getElementById('product-21-custom-width').value);
    customSize.countHeight = parseInt(document.getElementById('product-21-custom-height').value);
    document.getElementById('product-21-size').addEventListener('change', product21_Price);
    document.getElementById('product-21-custom-width').addEventListener('change', product21_Price);
    document.getElementById('product-21-custom-height').addEventListener('change', product21_Price);

    function getcustomSize() {

      let customPrice = (customSize.countWidth * customSize.countHeight) / 10000 //cm
      return customPrice
    }
    if (size.selected.value === 'product-21-a1') {
      customSize.customDisplay.forEach(item => item.style.display = 'block')
    } else {
      customSize.customDisplay.forEach(item => item.style.display = 'none')
    }

    if (size.selected.value === 'product-21-a1') {
      return getcustomSize()
    } else {
      return size.price
    }

  }

  function getProduct21_Material() {
    material.selected = theFormProduct.elements['product-21-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-21-material').addEventListener('change', product21_Price);
    return material.price
  }

  function getProduct21_Other() {
    other.selected = theFormProduct.elements['product-21-other'];
    other.price = productOther[other.selected.value];
    document.getElementById('product-21-other').addEventListener('change', product21_Price);
    return other.price
  }

  function getProduct21_Underlay() {
    underlay.selected = theFormProduct.elements['product-21-underlay'];
    underlay.price = productUnderlay[underlay.selected.value];
    document.getElementById('product-21-underlay').addEventListener('change', product21_Price);
    return underlay.price
  }

  function getProduct21_Price() {
    let productPrice = ((((getProduct21_Size() * getProduct21_Material()) * printingCost.lf) * getProduct21_Count()) +
      ((getProduct21_Other() * getProduct21_Size()) * getProduct21_Count()) +
      ((getProduct21_Underlay() * getProduct21_Size()) * getProduct21_Count())) * 1.23
      let count = getProduct21_Count()
      if(count){
  
        if (count >= 5 ) {
          productPrice = productPrice + 10
          productPrice*= 0.95
        }
        if (count >= 10 ) {
          productPrice = productPrice + 30
          productPrice*= 0.93
        }
      }

    document.querySelector('.product-21-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct21_Price()
}

//SZYLDY
function product23_Price() {
  const theFormProduct = document.forms['product-23'];

  function getProduct23_Count() {
    let count = parseInt(document.getElementById('product-23-count').value);
    document.getElementById('product-23-count').addEventListener('change', product23_Price);
    return count
  }

  function getProduct23_Size() {
    size.selected = theFormProduct.elements['product-23-size'];
    size.price = productSize[size.selected.value];
    customSize.customDisplay = [...document.querySelectorAll('.product-23-custom-size')];
    customSize.countWidth = parseInt(document.getElementById('product-23-custom-width').value);
    customSize.countHeight = parseInt(document.getElementById('product-23-custom-height').value);
    document.getElementById('product-23-size').addEventListener('change', product23_Price);
    document.getElementById('product-23-custom-width').addEventListener('change', product23_Price);
    document.getElementById('product-23-custom-height').addEventListener('change', product23_Price);

    function getCustomSize() {

      let customPrice = (customSize.countWidth * customSize.countHeight) / 10000 //cm
      return customPrice
    }
    if (size.selected.value === 'product-23-a1') {
      customSize.customDisplay.forEach(item => item.style.display = 'block')
    } else {
      customSize.customDisplay.forEach(item => item.style.display = 'none')
    }

    if (size.selected.value === 'product-23-a1') {
      return getCustomSize()
    } else {
      return size.price
    }
  }

  function getProduct23_Material() {
    material.selected = theFormProduct.elements['product-23-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-23-material').addEventListener('change', product23_Price);
    return material.price
  }

  function getProduct23_Other() {
    other.selected = theFormProduct.elements['product-23-other'];
    other.price = productOther[other.selected.value];
    document.getElementById('product-23-other').addEventListener('change', product23_Price);
    return other.price
  }

  function getProduct23_Installation() {
    installation.selected = theFormProduct.elements["product-23-installation"];
    document.getElementById('product-23-installation').addEventListener('click', product23_Price);

    if (installation.selected.checked == true) {
      installation.price = 30;
    } else {
      installation.price = 0;
    }
    return installation.price
  }

  function getProduct23_Price() {
    let productPrice = ((((getProduct23_Size() * getProduct23_Material()) * printingCost.lf) * getProduct23_Count()) +
      ((getProduct23_Other() * getProduct23_Size()) * getProduct23_Count()) +
      ((getProduct23_Installation() * getProduct23_Size()) * getProduct23_Count())) * 1.23
      let count = getProduct23_Count()
      if(count){
  
        if (count >= 5 ) {
          productPrice = productPrice + 10
          productPrice*= 0.95
        }
        if (count >= 10 ) {
          productPrice = productPrice + 30
          productPrice*= 0.93
        }
      }

    document.querySelector('.product-23-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct23_Price()
}

//SCIANKI REKLAMOWE
function product24_Price() {
  const theFormProduct = document.forms['product-24'];

  function getProduct24_Count() {
    let count = parseInt(document.getElementById('product-24-count').value);
    document.getElementById('product-24-count').addEventListener('change', product24_Price);
    return count
  }

  function getProduct24_Size() {
    size.selected = theFormProduct.elements['product-24-size'];
    size.price = productSize[size.selected.value];
    document.getElementById('product-24-size').addEventListener('change', product24_Price);
    return size.price
  }

  function getProduct24_Material() {
    material.selected = theFormProduct.elements['product-24-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-24-material').addEventListener('change', product24_Price);
    return material.price
  }

  function getProduct24_Other() {
    other.selected = theFormProduct.elements['product-24-other'];
    other.price = productOther[other.selected.value];
    document.getElementById('product-24-other').addEventListener('change', product24_Price);
    return other.price
  }

  function getProduct24_Accessories() {
    accessories.selected = theFormProduct.elements['product-24-size'];
    document.getElementById('product-24-size').addEventListener('change', product24_Price);
    if (accessories.selected.value === 'product-24-a1') {
      accessories.price = productAccessories['product-24-e1']
    }
    if (accessories.selected.value === 'product-24-a2') {
      accessories.price = productAccessories['product-24-e2']
    }
    if (accessories.selected.value === 'product-24-a3') {
      accessories.price = productAccessories['product-24-e3']
    }
    if (accessories.selected.value === 'product-24-a4') {
      accessories.price = productAccessories['product-24-e4']
    }
    if (accessories.selected.value === 'product-24-a5') {
      accessories.price = productAccessories['product-24-e5']
    }
    if (accessories.selected.value === 'product-24-a6') {
      accessories.price = productAccessories['product-24-e6']
    }
    return accessories.price
  }

  function getProduct24_Price() {
    let productPrice = (((((getProduct24_Size() * getProduct24_Material()) * printingCost.lf) * getProduct24_Count()) +
      ((getProduct24_Other() * getProduct24_Size()) * getProduct24_Count())) + (getProduct24_Accessories() * getProduct24_Count())) * 1.55
      let count = getProduct24_Count()
      if(count){
  
        if (count >= 5 ) {
          productPrice = productPrice + 10
          productPrice*= 0.95
        }
        if (count >= 10 ) {
          productPrice = productPrice + 30
          productPrice*= 0.93
        }
      }
    document.querySelector('.product-24-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct24_Price()
}

//ROLL-UPY
function product25_Price() {
  const theFormProduct = document.forms['product-25'];

  function getProduct25_Count() {
    let count = parseInt(document.getElementById('product-25-count').value);
    document.getElementById('product-25-count').addEventListener('change', product25_Price);
    return count
  }

  function getProduct25_Size() {
    size.selected = theFormProduct.elements['product-25-size'];
    size.price = productSize[size.selected.value];
    document.getElementById('product-25-size').addEventListener('change', product25_Price);
    return size.price
  }

  function getProduct25_Material() {
    material.selected = theFormProduct.elements['product-25-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-25-material').addEventListener('change', product25_Price);
    return material.price
  }

  function getProduct25_Accessories() {
    accessories.selected = theFormProduct.elements['product-25-mechanism'];
    accessories.price = 0
    size.selected = theFormProduct.elements['product-25-size'];
    document.getElementById('product-25-mechanism').addEventListener('change', product25_Price);
    if (accessories.selected.value === 'product-25-e2' && size.selected.value === 'product-25-a1') {
      accessories.price = 65.60
    }
    if (accessories.selected.value === 'product-25-e3' && size.selected.value === 'product-25-a1') {
      accessories.price = 165.60
    }
    if (accessories.selected.value === 'product-25-e2' && size.selected.value === 'product-25-a2') {
      accessories.price = 86
    }
    if (accessories.selected.value === 'product-25-e3' && size.selected.value === 'product-25-a2') {
      accessories.price = 196
    }
    if (accessories.selected.value === 'product-25-e2' && size.selected.value === 'product-25-a3') {
      accessories.price = 118.20
    }
    if (size.selected.value === 'product-25-a3') {
      document.getElementById('exclusive').disabled = true
    }
    if (accessories.selected.value === 'product-25-e2' && size.selected.value === 'product-25-a4') {
      accessories.price = 164
    }
    if (size.selected.value === 'product-25-a4') {
      document.getElementById('exclusive').disabled = true
    }

    return accessories.price
  }

  function getProduct25_Price() {
    let productPrice = ((((getProduct25_Size() * getProduct25_Material()) * printingCost.lf) * getProduct25_Count()) +
      (getProduct25_Accessories() * getProduct25_Count())) * 1.23
      let count = getProduct25_Count()
      if(count){
  
        if (count >= 5 ) {
          productPrice = productPrice + 10
          productPrice*= 0.95
        }
      }
    document.querySelector('.product-25-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct25_Price()
}

//POTYKACZE
function product26_Price() {
  const theFormProduct = document.forms['product-26'];

  function getProduct26_Count() {
    let count = parseInt(document.getElementById('product-26-count').value);
    document.getElementById('product-26-count').addEventListener('change', product26_Price);
    return count
  }

  function getProduct26_Size() {
    size.selected = theFormProduct.elements['product-26-size'];
    size.price = productSize[size.selected.value];
    document.getElementById('product-26-size').addEventListener('change', product26_Price);
    return size.price
  }

  function getProduct26_Material() {
    material.selected = theFormProduct.elements['product-26-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-26-material').addEventListener('change', product26_Price);
    return material.price
  }

  function getProduct26_Accessories() {
    accessories.selected = theFormProduct.elements['product-26-size'];
    accessories.price = 0
    if (accessories.selected.value === 'product-26-a1') {
      accessories.price = productAccessories['product-26-e1']
    }
    if (accessories.selected.value === 'product-26-a2') {
      accessories.price = productAccessories['product-26-e2']
    }

    return accessories.price
  }

  function getProduct26_Price() {
    let productPrice = ((((getProduct26_Size() * getProduct26_Material()) * printingCost.lf) * getProduct26_Count()) +
      (getProduct26_Accessories() * getProduct26_Count())) * 1.23
      let count = getProduct26_Count()
      if(count){
  
        if (count >= 5 ) {
          productPrice = productPrice + 10
          productPrice*= 0.95
        }
      }
    document.querySelector('.product-26-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct26_Price()
}

//FLAGI
function product27_Price() {
  const theFormProduct = document.forms['product-27'];

  function getProduct27_Count() {
    let count = parseInt(document.getElementById('product-27-count').value);
    document.getElementById('product-27-count').addEventListener('change', product27_Price);
    return count
  }

  function getProduct27_Size() {
    size.selected = theFormProduct.elements['product-27-size'];
    size.price = productSize[size.selected.value];
    document.getElementById('product-27-size').addEventListener('change', product27_Price);
    return size.price
  }

  function getProduct27_Material() {
    material.selected = theFormProduct.elements['product-27-material'];
    material.price = productMaterial[material.selected.value];
    size.selected = theFormProduct.elements['product-27-size'];
    material.price = 0
    document.getElementById('product-27-material').addEventListener('change', product27_Price);
    if (size.selected.value === 'product-27-a1' && material.selected.value === 'product-27-b1') {
      material.price = 104
    }
    if (size.selected.value === 'product-27-a1' && material.selected.value === 'product-27-b2') {
      material.price = 193
    }
    if (size.selected.value === 'product-27-a2' && material.selected.value === 'product-27-b1') {
      material.price = 140
    }
    if (size.selected.value === 'product-27-a2' && material.selected.value === 'product-27-b2') {
      material.price = 245
    }
    if (size.selected.value === 'product-27-a3' && material.selected.value === 'product-27-b1') {
      material.price = 185
    }
    if (size.selected.value === 'product-27-a3' && material.selected.value === 'product-27-b2') {
      material.price = 297
    }
    return material.price
  }

  function getProduct27_Price() {
    let productPrice = (((getProduct27_Size() + getProduct27_Material())) * getProduct27_Count()) * 1.5
    let count = getProduct27_Count()
    if(count){

      if (count >= 5 ) {
        productPrice = productPrice + 30
        productPrice*= 0.95
      }
    }
    document.querySelector('.product-27-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct27_Price()
}

//WYROBY Z PLEXI
function product28_Price() {
  const theFormProduct = document.forms['product-28'];

  function getProduct28_Count() {
    let count = parseInt(document.getElementById('product-28-count').value);
    document.getElementById('product-28-count').addEventListener('change', product28_Price);
    return count
  }

  function getProduct28_Size() {
    size.selected = theFormProduct.elements['product-28-size'];
    size.price = productSize[size.selected.value];
    customSize.customDisplay = [...document.querySelectorAll('.product-28-custom-size')];
    customSize.countWidth = parseInt(document.getElementById('product-28-custom-width').value);
    customSize.countHeight = parseInt(document.getElementById('product-28-custom-height').value);
    document.getElementById('product-28-size').addEventListener('change', product28_Price);
    document.getElementById('product-28-custom-width').addEventListener('change', product28_Price);
    document.getElementById('product-28-custom-height').addEventListener('change', product28_Price);

    function getCustomSize() {
      let customPrice = (customSize.countWidth * customSize.countHeight) / 1000000 //cm
      return customPrice
    }

    if (size.selected.value === 'product-28-a1') {
      customSize.customDisplay.forEach(item => item.style.display = 'block')
    } else {
      customSize.customDisplay.forEach(item => item.style.display = 'none')
    }

    if (size.selected.value === 'product-28-a1') {
      return getCustomSize()
    } else {
      return size.price
    }

  }

  function getProduct28_Material() {
    material.selected = theFormProduct.elements['product-28-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-28-material').addEventListener('change', product28_Price);
    return material.price
  }

  function getProduct28_Crease() {
    crease.selected = theFormProduct.elements['product-28-crease'];
    crease.price = productCrease[crease.selected.value];
    document.getElementById('product-28-crease').addEventListener('change', product28_Price);
    return crease.price
  }


  function getProduct28_Engraver() {
    let engraverPrice = 0;
    const selectedProduct = theFormProduct.elements["product-28-engraver"];
    document.getElementById('product-28-engraver').addEventListener('click', product28_Price);

    if (selectedProduct.checked == true) {
      engraverPrice = 650;
    } else {
      engraverPrice = 0;
    }
    return engraverPrice;
  }

  function getProduct28_Price() {
    let productPrice = (((getProduct28_Size() * getProduct28_Material()) * getProduct28_Count()) +
      (getProduct28_Crease() * getProduct28_Count()) + ((getProduct28_Size() * getProduct28_Engraver()) * getProduct28_Count())) * 1.23
      let count = getProduct28_Count()
      if(count){
  
        if (count >= 5 ) {
          productPrice = productPrice + 10
          productPrice*= 0.95
        }
      }

    document.querySelector('.product-28-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct28_Price()
}

//TABLICZKI GRAWEROWANE
function product31_Price() {
  const theFormProduct = document.forms['product-31'];

  function getProduct31_Count() {
    let count = parseInt(document.getElementById('product-31-count').value);
    document.getElementById('product-31-count').addEventListener('change', product31_Price);
    return count
  }

  function getProduct31_Size() {
    size.selected = theFormProduct.elements['product-31-size'];
    size.price = productSize[size.selected.value];
    customSize.customDisplay = [...document.querySelectorAll('.product-31-custom-size')];
    customSize.countWidth = parseInt(document.getElementById('product-31-custom-width').value);
    customSize.countHeight = parseInt(document.getElementById('product-31-custom-height').value);
    document.getElementById('product-31-size').addEventListener('change', product31_Price);
    document.getElementById('product-31-custom-width').addEventListener('change', product31_Price);
    document.getElementById('product-31-custom-height').addEventListener('change', product31_Price);

    function getCustomSize() {
      let customPrice = (customSize.countWidth * customSize.countHeight) / 1000000 //cm
      return customPrice
    }

    if (size.selected.value === 'product-31-a1') {
      customSize.customDisplay.forEach(item => item.style.display = 'block')
    } else {
      customSize.customDisplay.forEach(item => item.style.display = 'none')
    }

    if (size.selected.value === 'product-31-a1') {
      return getCustomSize()
    } else {
      return size.price
    }

  }

  function getProduct31_Material() {
    material.selected = theFormProduct.elements['product-31-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-31-material').addEventListener('change', product31_Price);
    return material.price
  }

  function getProduct31_Engraver() {
    let engraverPrice = 0;
    const selectedProduct = theFormProduct.elements["product-31-engraver"];
    document.getElementById('product-31-engraver').addEventListener('click', product31_Price);
    if (selectedProduct.checked == true) {
      engraverPrice = 650;
    } else {
      engraverPrice = 0;
    }
    return engraverPrice;
  }

  function getProduct31_Price() {
    let productPrice = (((getProduct31_Size() * getProduct31_Material()) * getProduct31_Count()) +
      ((getProduct31_Engraver() * getProduct31_Size()) * getProduct31_Count())) * 1.23
      let count = getProduct31_Count()
      if(count){
  
        if (count >= 5 ) {
          productPrice = productPrice + 35
          productPrice*= 0.95
        }
      }
    document.querySelector('.product-31-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct31_Price()
}

export const calculateLf = () => {
    product13_Price();
    product14_Price();
    product15_Price();
    product16_Price();
    product17_Price();
    product18_Price();
    product19_Price();
    product20_Price();
    product21_Price();
    product23_Price();
}

export const calculateEs = () => {
    product24_Price();
    product25_Price();
    product26_Price();
    product27_Price();
}

export const calculateSp = () => {
    product28_Price();
    product31_Price();
}

