"use strict";

const productSize = new Array();
productSize['card-a1'] = 0.0051; //90x50 mm + cut price
productSize['card-a2'] = 0.0051; //85x55 mm + cut price
productSize['envelope-a1'] = 0.125;
productSize['envelope-a2'] = 1.7;
productSize['envelope-a3'] = 1.4;
productSize['envelope-a4'] = 1.3;
productSize['envelope-a5'] = 1.15;
productSize['product-3-a1'] = 0.12474; //a3
productSize['product-3-a2'] = 0.06237; //a4
productSize['product-3-a3'] = 0.03108; //a5
productSize['product-3-a4'] = 0.01554; //a6
productSize['product-3-a5'] = 0.02079; //dl
productSize['product-4-a1'] = 0.12474; //a3
productSize['product-4-a2'] = 0.06237; //a4
productSize['product-4-a3'] = 0.03108; //a5
productSize['product-4-a4'] = 0.01554; //a6
productSize['product-4-a5'] = 0.00777;
productSize['product-4-a6'] = 0.02079;
productSize['product-4-a7'] = null; //custom
productSize['product-5-a1'] = 0.06237; //a4
productSize['product-5-a2'] = 0.03108; //a5
productSize['product-5-a3'] = 0.01554; //a6
productSize['product-6-a1'] = 0.12474; //a3
productSize['product-6-a2'] = 0.06237; //a4
productSize['product-6-a3'] = 0.03108; //a5
productSize['product-6-a4'] = 0.01554; //a6
productSize['product-6-a5'] = 0.0875; //b4
productSize['product-6-a6'] = 0.044; //b5
productSize['product-7-a1'] = 0.03108; //a5
productSize['product-7-a2'] = 0.01554; //a6
productSize['product-7-a3'] = 0.00777; //a7
productSize['product-8-a1'] = 0.12474; //a3;
productSize['product-8-a2'] = 0.12474; //a3;
productSize['product-9-a1'] = 0.06237; //a4
productSize['product-9-a2'] = 0.03108; //a5
productSize['product-9-a3'] = 0.01554; //a6
productSize['product-9-a4'] = 0.03876; //a6
productSize['product-9-a5'] = 0.0799; //a6
productSize['product-10-a1'] = 0.12474; //a3;
productSize['product-10-a2'] = 0.06237; //a4
productSize['product-11-a1'] = 0.06237; //a4
productSize['product-11-a2'] = 0.03108; //a5
productSize['product-11-a3'] = 0.01554; //a6
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
// productSize['product-22-a1'] = null;
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
productSize['product-32-a1'] = null;

const productMaterial = new Array();
productMaterial['card-b1'] = 1.493; //300g
productMaterial['card-b2'] = 1.493; //300g
productMaterial['card-b3'] = 1.493; //300g
productMaterial['product-3-b1'] = 1.199; //120g
productMaterial['product-3-b2'] = 1.248; //150g
productMaterial['product-3-b3'] = 1.346; //200g
productMaterial['product-3-b4'] = 1.395 //250g
productMaterial['product-3-b5'] = 1.199;
productMaterial['product-3-b6'] = 1.248;
productMaterial['product-3-b7'] = 1.346;
productMaterial['product-3-b8'] = 1.395;
productMaterial['product-4-b1'] = 1.346; //200g
productMaterial['product-4-b2'] = 1.395; //250g
productMaterial['product-4-b3'] = 1.493; //300g
productMaterial['product-4-b4'] = 1.346; //200g
productMaterial['product-4-b5'] = 1.395; //250g
productMaterial['product-4-b6'] = 1.493; //300g 
productMaterial['product-5-b1'] = 1.149; //100g 
productMaterial['product-5-b2'] = 1.199; //120g
productMaterial['product-5-b3'] = 1.149; //100g
productMaterial['product-5-b4'] = 1.199; //120g
productMaterial['product-5-b5'] = 1.248; //150g
productMaterial['product-5-b6'] = 1.149; //100g
productMaterial['product-5-b7'] = 1.199; //120g
productMaterial['product-5-b8'] = 1.248; //150g
productMaterial['product-6-b1'] = 1.395; //250g
productMaterial['product-6-b2'] = 1.493; //300g 
productMaterial['product-6-b3'] = 1.395; //250g
productMaterial['product-6-b4'] = 1.493; //300g 
productMaterial['product-7-b1'] = 1.395; //250g
productMaterial['product-7-b2'] = 1.493; //300g
productMaterial['product-7-b3'] = 1.395; //250g
productMaterial['product-7-b4'] = 1.493; //300g
productMaterial['product-8-b1'] = 1.395; //250g
productMaterial['product-8-b2'] = 1.493; //300g
productMaterial['product-8-b3'] = 1.395; //250g
productMaterial['product-8-b4'] = 1.493; //300g
productMaterial['product-9-b1'] = 1.100; //80g
productMaterial['product-9-b2'] = 1.149; //100g
productMaterial['product-9-b3'] = 1.199; //120g
productMaterial['product-10-b1'] = 1.493; //300g
productMaterial['product-10-b2'] = 1.493; //300g
productMaterial['product-10-b3'] = 1.510;
productMaterial['product-11-b1'] = 1.149; //100g
productMaterial['product-11-b2'] = 1.199; //120g
productMaterial['product-12-b1'] = 1.149; //100g
productMaterial['product-12-b2'] = 1.199; //120g
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
// productMaterial['product-22-b1'] = 1.35;
// productMaterial['product-22-b2'] = 1.35;
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
productMaterial['product-32-b1'] = 1.25;
productMaterial['product-32-b2'] = 1.25;
productMaterial['product-32-b3'] = 1.35;
productMaterial['product-32-b4'] = 1.35;
productMaterial['product-32-b5'] = 1.35;
productMaterial['product-32-b6'] = 1.35;


const productSides = new Array();
productSides['card-c1'] = 0; //one-sided
productSides['card-c2'] = 1; //double-sided
productSides['envelope-b1'] = 1;
productSides['envelope-b2'] = 1.8;
productSides['product-3-c1'] = 0;
productSides['product-3-c2'] = 1;
productSides['product-4-c1'] = 0;
productSides['product-4-c2'] = 1;
productSides['product-6-c1'] = 0;
productSides['product-6-c2'] = 1;
productSides['product-7-c1'] = 0;
productSides['product-7-c2'] = 1;
productSides['product-8-c1'] = 0;
productSides['product-8-c2'] = 1;
productSides['product-10-c1'] = 0;
productSides['product-10-c2'] = 1;
productSides['product-13-c1'] = 0;
productSides['product-13-c2'] = 1;

// productSides['product-13-c2'] = 1.5714;

const productCover = new Array();
productCover['product-5-c1'] = 1.395;
productCover['product-5-c2'] = 2.395;
productCover['product-9-c1'] = 1.395;
productCover['product-9-c2'] = 1.395;
productCover['product-9-c3'] = 1.493;
productCover['product-11-c1'] = 0;
productCover['product-11-c2'] = 1.395;
productCover['product-11-c3'] = 1.493;

const productOther = new Array();
productOther['card-d1'] = 0; //none
productOther['card-d2'] = 4; //one-sided laminate  gloss
productOther['card-d3'] = 4; //one-sided laminate  mat
productOther['card-d4'] = 4; //one-sided laminate  soft-tuch
productOther['card-d5'] = 8; //double-sided laminate
productOther['card-d6'] = 8; //double-sided laminate
productOther['card-d7'] = 8; //double-sided laminate
productOther['product-3-d1'] = 0;
productOther['product-3-d2'] = 4;
productOther['product-3-d3'] = 4;
productOther['product-3-d4'] = 8;
productOther['product-3-d5'] = 8;
productOther['product-3-d6'] = 4;
productOther['product-3-d7'] = 8;
productOther['product-4-d1'] = 0;
productOther['product-4-d2'] = 4;
productOther['product-4-d3'] = 4;
productOther['product-4-d4'] = 4;
productOther['product-4-d5'] = 8;
productOther['product-4-d6'] = 8;
productOther['product-4-d7'] = 8;
productOther['product-5-d1'] = 0;
productOther['product-5-d2'] = 4;
productOther['product-5-d3'] = 4;
productOther['product-5-d4'] = 4;
productOther['product-5-d5'] = 8;
productOther['product-5-d6'] = 8;
productOther['product-5-d7'] = 8;
productOther['product-6-d1'] = 0;
productOther['product-6-d2'] = 4;
productOther['product-6-d3'] = 4;
productOther['product-6-d4'] = 4;
productOther['product-6-d5'] = 8;
productOther['product-6-d6'] = 8;
productOther['product-6-d7'] = 8;
productOther['product-7-d1'] = 0;
productOther['product-7-d2'] = 4;
productOther['product-7-d3'] = 4;
productOther['product-7-d4'] = 4;
productOther['product-7-d5'] = 8;
productOther['product-7-d6'] = 8;
productOther['product-7-d7'] = 8;
productOther['product-8-d1'] = 0;
productOther['product-8-d2'] = 4;
productOther['product-8-d3'] = 4;
productOther['product-8-d4'] = 4;
productOther['product-8-d5'] = 8;
productOther['product-8-d6'] = 8;
productOther['product-8-d7'] = 8;
productOther['product-9-d1'] = 0;
productOther['product-9-d2'] = 4;
productOther['product-9-d3'] = 4;
productOther['product-9-d4'] = 4;
productOther['product-10-d1'] = 0;
productOther['product-10-d2'] = 4;
productOther['product-10-d3'] = 4;
productOther['product-10-d4'] = 4;
productOther['product-10-d5'] = 8;
productOther['product-10-d6'] = 8;
productOther['product-10-d7'] = 8;
productOther['product-11-d1'] = 0;
productOther['product-11-d2'] = 4;
productOther['product-11-d3'] = 4;
productOther['product-11-d4'] = 4;
productOther['product-11-d5'] = 8;
productOther['product-11-d6'] = 8;
productOther['product-11-d7'] = 8;
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
// productOther['product-22-d1'] = 15;
// productOther['product-22-d2'] = 15;
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
productCrease['product-28-e1'] = 0;
productCrease['product-28-e2'] = 3;
productCrease['product-28-e3'] = 4;
productCrease['product-28-e4'] = 5;
productCrease['product-28-e5'] = 6;

const productBinding = new Array();
productBinding['product-5-e1'] = 0.5;
productBinding['product-5-e2'] = 1;
productBinding['product-8-e1'] = 2.1; //2.1
productBinding['product-8-e2'] = 2; //2
productBinding['product-9-e1'] = 1;
productBinding['product-11-e1'] = 2;
productBinding['product-11-e2'] = 1;

const productInner = new Array();
productInner['product-5-f1'] = 1;
productInner['product-5-f2'] = 0.65;
productInner['product-9-f1'] = 0.65;
productInner['product-9-f2'] = 1;
productInner['product-11-f1'] = 0.65;
productInner['product-11-f2'] = 1;

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
// productAccessories['product-28-e1'] = 70;
// productAccessories['product-28-e2'] = 90;
// productAccessories['product-28-e3'] = 110;

const productUnderlay = new Array();
productUnderlay['product-21-e1'] = 30;
productUnderlay['product-21-e2'] = 45;
productUnderlay['product-21-e3'] = 70;
// productUnderlay['product-22-e1'] = 30;
// productUnderlay['product-22-e2'] = 45;
// productUnderlay['product-22-e3'] = 70;

let count = 0;
let theFormProduct = null;
let getPrice = 0;

const printingCost = {
  dp: 8.16, 
  lf: 20,
  cut: 7,
}

const size = {
  selected: null,
  price: 0,
};

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
const binding = {
  selected: null,
  price: 0,
};
const inner = {
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
const cover = {
  selected: null,
  price: 0,
}

function cardPrice() {
  theFormProduct = document.forms['product-card'];
  function getCardCount() {
    count = parseInt(document.getElementById('card-count').value);
    document.getElementById('card-count').addEventListener('change', cardPrice)
    return count
  }

  function getCardSize() {
    size.selected = theFormProduct.elements['card-size'];
    size.price = productSize[size.selected.value];
    document.getElementById('card-size').addEventListener('change', cardPrice)
    return size.price
  }

  function getCardMaterial() {
    material.selected = theFormProduct.elements['card-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('card-material').addEventListener('change', cardPrice)
    return material.price
  }

  function getCardSides() {
    sides.selected = theFormProduct.elements['card-sides'];
    sides.price = productSides[sides.selected.value];
    let sidesPrice = ((getCardSize() * sides.price) * printingCost.dp)
    document.getElementById('card-sides').addEventListener('change', cardPrice)
    return sidesPrice;
  }

  function getCardOther() {
    other.selected = theFormProduct.elements['card-other'];
    other.price = productOther[other.selected.value];
    document.getElementById('card-other').addEventListener('change', cardPrice)
    return other.price;
  }

  function getCardCorners() {
    let cornersPrice = 0;
    const selectedCorners = theFormProduct.elements["card-corners"];
    if (selectedCorners.checked == true) {
      cornersPrice = 1;
    } else {
      cornersPrice = 0;
    }
    document.getElementById('card-corners').addEventListener('click', cardPrice)
    return cornersPrice;
  }

  function getPriceCard() {
    let productPrice = (((((getCardSize() * getCardMaterial()) * (printingCost.dp * 2)) + getCardSides()) * getCardCount()) +
      ((getCardSize() * getCardOther()) * getCardCount()) + (getCardCorners() * getCardCount() / 24)) * 3.5

      let count = getCardCount()
      if(count){
        if (count >= 1 ) {
          productPrice = productPrice + 10
          productPrice*= 0.55
        }
      }

    document.querySelector('.card-price span').textContent = productPrice.toFixed(2)
  }
  return getPriceCard()
}

function envelopePrice() {
  theFormProduct = document.forms['product-envelope'];

  function getEnvelopeCount() {
    count = parseInt(document.getElementById('envelope-count').value);
    document.getElementById('envelope-count').addEventListener('change', envelopePrice)
    return count
  }

  function getEnvelopeSize() {
    size.selected = theFormProduct.elements['envelope-size'];
    size.price = productSize[size.selected.value];
    document.getElementById('envelope-size').addEventListener('change', envelopePrice)
    return size.price
  }

  function getEnvelopeSides() {
    sides.selected = theFormProduct.elements['envelope-sides'];
    sides.price = productSides[sides.selected.value];
    document.getElementById('envelope-sides').addEventListener('change', envelopePrice)
    return sides.price
  }

  function getEnvelopePersonalize() {
    let productPrice = 0;
    const selectedPersonalize = theFormProduct.elements["envelope-personalize"];

    if (selectedPersonalize.checked == true) {
      productPrice = 7;
    } else {
      productPrice = 0;
    }
    document.getElementById('envelope-personalize').addEventListener('change', envelopePrice)
    return productPrice;
  }

  function getPriceEnvelope() {
    getPrice = Math.round((getEnvelopeSize() * getEnvelopeCount()) + (getEnvelopeSides() * getEnvelopeCount()) + getEnvelopePersonalize())
    document.querySelector('.envelope-price span').textContent = getPrice.toFixed(2)
  }
  return getPriceEnvelope()
}

function product3_Price() {
  theFormProduct = document.forms['product-3'];

  function getProduct3_Count() {
    count = parseInt(document.getElementById('product-3-count').value);
    document.getElementById('product-3-count').addEventListener('change', product3_Price)
    return count
  }

  function getProduct3_Size() {
    size.selected = theFormProduct.elements['product-3-size'];
    size.price = productSize[size.selected.value];
    document.getElementById('product-3-size').addEventListener('change', product3_Price)
    return size.price
  }

  function getProduct3_Material() {
    material.selected = theFormProduct.elements['product-3-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-3-material').addEventListener('change', product3_Price)
    return material.price
  }

  function getProduct3_Sides() {
    sides.selected = theFormProduct.elements['product-3-sides'];
    sides.price = productSides[sides.selected.value];
    let sidesPrice = ((getProduct3_Size() * sides.price) * printingCost.dp)
    document.getElementById('product-3-sides').addEventListener('change', product3_Price)
    return sidesPrice;
  }

  function getProduct3_Other() {
    other.selected = theFormProduct.elements['product-3-other'];
    other.price = productOther[other.selected.value];
    document.getElementById('product-3-other').addEventListener('change', product3_Price)
    return other.price;
  }

  function getProduct3_Crease() {
    crease.selected = theFormProduct.elements['product-3-crease'];
    crease.price = productCrease[crease.selected.value];
    document.getElementById('product-3-crease').addEventListener('change', product3_Price)
    return crease.price;
  }

  function getProduct3_Price() {
    let productPrice = ((((((getProduct3_Size() * getProduct3_Material()) * printingCost.dp) + getProduct3_Sides()) * getProduct3_Count()) +
      ((getProduct3_Size() * getProduct3_Other()) * getProduct3_Count()) + (getProduct3_Crease() * getProduct3_Count()))) * 3.5

    let count = getProduct3_Count()
    if(count){
      if (count >= 1 ) {
        productPrice = productPrice + 10
        productPrice*= 0.60
      }
    }
    document.querySelector('.product-3-price span').textContent = productPrice.toFixed(2)

  }

  return getProduct3_Price()
}

function product4_Price() {
  theFormProduct = document.forms['product-4'];

  function getProduct4_Count() {
    count = parseInt(document.getElementById('product-4-count').value);
    document.getElementById('product-4-count').addEventListener('change', product4_Price)
    return count
  }

  function getProduct4_Size() {
    size.selected = theFormProduct.elements['product-4-size'];
    size.price = productSize[size.selected.value];
    customSize.customDisplay = [...document.querySelectorAll('.product-4-custom-size')];
    customSize.countWidth = parseInt(document.getElementById('product-4-custom-width').value);
    customSize.countHeight = parseInt(document.getElementById('product-4-custom-height').value);
    document.getElementById('product-4-size').addEventListener('change', product4_Price)
    document.getElementById('product-4-custom-width').addEventListener('change', product4_Price)
    document.getElementById('product-4-custom-height').addEventListener('change', product4_Price)
    function getCustomSize() {
      let customPrice = (customSize.countWidth * customSize.countHeight) / 1000000 //mm
      return customPrice
    }
    if (size.selected.value === 'product-4-a7') {
      customSize.customDisplay.forEach(item => item.style.display = 'block')
    } else {
      customSize.customDisplay.forEach(item => item.style.display = 'none')
    }

    if (size.selected.value === 'product-4-a7') {
      return getCustomSize()
    } else {
      return size.price
    }
   
  }

  function getProduct4_Material() {
    material.selected = theFormProduct.elements['product-4-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-4-material').addEventListener('change', product4_Price)
    return material.price
  }

  function getProduct4_Sides() {
    sides.selected = theFormProduct.elements['product-4-sides'];
    sides.price = productSides[sides.selected.value];
    let sidesPrice = ((getProduct4_Size() * sides.price) * printingCost.dp)
    document.getElementById('product-4-sides').addEventListener('change', product4_Price)
    return sidesPrice;
  }

  function getProduct4_Other() {
    other.selected = theFormProduct.elements['product-4-other'];
    other.price = productOther[other.selected.value];
    document.getElementById('product-4-other').addEventListener('change', product4_Price)
    return other.price;
  }

  function getProduct4_Crease() {
    crease.selected = theFormProduct.elements['product-4-crease'];
    crease.price = productCrease[crease.selected.value];
    document.getElementById('product-4-crease').addEventListener('change', product4_Price)
    return crease.price;
  }

  function getProduct4_Price() {
    let productPrice = (((((getProduct4_Size() * getProduct4_Material()) * printingCost.dp) + getProduct4_Sides()) * getProduct4_Count()) +
      ((getProduct4_Size() * getProduct4_Other()) * getProduct4_Count()) + (getProduct4_Crease() * getProduct4_Count())) * 3.5

      let count = getProduct4_Count()
      if(count){
        if (count >= 1 ) {
          productPrice = productPrice + 10
          productPrice*= 0.60
        }
      }

    document.querySelector('.product-4-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct4_Price()
}

function product5_Price() {
  theFormProduct = document.forms['product-5'];

  function getProduct5_Count() {
    count = parseInt(document.getElementById('product-5-count').value);
    document.getElementById('product-5-count').addEventListener('change', product5_Price)
    return count
  }

  function getProduct5_Pages() {
    material.selected = theFormProduct.elements['product-5-material'];
    // material.price = productMaterial[material.selected.value];
    document.getElementById('product-5-pages').addEventListener('change', product5_Price)
    count = parseInt(document.getElementById('product-5-pages').value);
    if (count % 4 != 0) {
      return
    }
    let pagePrice = (((getProduct5_Size() * getProduct5_Material() * getProduct5_Inner()) * printingCost.dp) * count) -
      ((getProduct5_Size() * (getProduct5_Material() / 2) * getProduct5_Inner()) * count)
    return pagePrice
  }

  function getProduct5_Size() {
    size.selected = theFormProduct.elements['product-5-size'];
    size.price = productSize[size.selected.value];
    document.getElementById('product-5-size').addEventListener('change', product5_Price)
    return size.price
  }

  function getProduct5_Material() {
    material.selected = theFormProduct.elements['product-5-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-5-material').addEventListener('change', product5_Price)
    return material.price
  }

  function getProduct5_Cover() {
    cover.selected = theFormProduct.elements['product-5-cover'];
    cover.price = productCover[cover.selected.value];
    document.getElementById('product-5-cover').addEventListener('change', product5_Price)
    return cover.price * 2;
  }

  function getProduct5_Other() {
    other.selected = theFormProduct.elements['product-5-other'];
    other.price = productOther[other.selected.value];
    document.getElementById('product-5-other').addEventListener('change', product5_Price)
    return other.price * 2;
  }

  function getProduct5_Binding() {
    binding.selected = theFormProduct.elements['product-5-binding'];
    binding.price = productBinding[binding.selected.value];
    document.getElementById('product-5-binding').addEventListener('change', product5_Price)
    return binding.price;
  }

  function getProduct5_Inner() {
    inner.selected = theFormProduct.elements['product-5-inner'];
    inner.price = productInner[inner.selected.value];
    document.getElementById('product-5-inner').addEventListener('change', product5_Price)
    return inner.price;
  }

  function getProduct5_Price() {
    let productPrice = ((((((getProduct5_Size() * getProduct5_Material() * getProduct5_Inner()) * printingCost.dp) + (getProduct5_Pages() / 1.4)) +
        ((getProduct5_Cover() * getProduct5_Size()) * printingCost.dp) + (getProduct5_Other() * getProduct5_Size())) * getProduct5_Count()) +
      (getProduct5_Binding() * getProduct5_Count())) * 3

      let count = getProduct5_Count()
      if(count){
        if (count >= 1 ) {
          productPrice = productPrice + 10
          productPrice*= 0.50
        }
      }
    document.querySelector('.product-5-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct5_Price()
}

function product6_Price() {
  theFormProduct = document.forms['product-6'];

  function getProduct6_Count() {
    count = parseInt(document.getElementById('product-6-count').value);
    document.getElementById('product-6-count').addEventListener('change', product6_Price)
    return count
  }

  function getProduct6_Size() {
    size.selected = theFormProduct.elements['product-6-size'];
    size.price = productSize[size.selected.value];
    document.getElementById('product-6-size').addEventListener('change', product6_Price)
    return size.price
  }

  function getProduct6_Material() {
    material.selected = theFormProduct.elements['product-6-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-6-material').addEventListener('change', product6_Price)
    return material.price
  }

  function getProduct6_Sides() {
    sides.selected = theFormProduct.elements['product-6-sides'];
    sides.price = productSides[sides.selected.value];
    let sidesPrice = ((getProduct6_Size() * sides.price) * printingCost.dp)
    document.getElementById('product-6-sides').addEventListener('change', product6_Price)
    return sidesPrice;
  }

  function getProduct6_Other() {
    other.selected = theFormProduct.elements['product-6-other'];
    other.price = productOther[other.selected.value];
    document.getElementById('product-6-other').addEventListener('change', product6_Price)
    return other.price;
  }

  function getProduct6_Crease() {
    crease.selected = theFormProduct.elements['product-6-crease'];
    crease.price = productCrease[crease.selected.value];
    document.getElementById('product-6-crease').addEventListener('change', product6_Price)
    return crease.price;
  }

  function getProduct6_Price() {
    let productPrice = (((((getProduct6_Size() * getProduct6_Material()) * printingCost.dp) + getProduct6_Sides()) * getProduct6_Count()) +
      ((getProduct6_Size() * getProduct6_Other()) * getProduct6_Count()) + (getProduct6_Crease() * getProduct6_Count())) * 3.5

      let count = getProduct6_Count()
      if(count){
        if (count >= 1 ) {
          productPrice = productPrice + 10
          productPrice*= 0.60
        }
      }

    document.querySelector('.product-6-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct6_Price()
}

function product7_Price() {
  theFormProduct = document.forms['product-7'];

  function getProduct7_Count() {
    count = parseInt(document.getElementById('product-7-count').value);
    document.getElementById('product-7-count').addEventListener('change', product7_Price)
    return count
  }

  function getProduct7_Size() {
    size.selected = theFormProduct.elements['product-7-size'];
    size.price = productSize[size.selected.value];
    document.getElementById('product-7-size').addEventListener('change', product7_Price)
    return size.price
  }

  function getProduct7_Material() {
    material.selected = theFormProduct.elements['product-7-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-7-material').addEventListener('change', product7_Price)
    return material.price
  }

  function getProduct7_Sides() {
    sides.selected = theFormProduct.elements['product-7-sides'];
    sides.price = productSides[sides.selected.value];
    let sidesPrice = ((getProduct7_Size() * sides.price) * printingCost.dp)
    document.getElementById('product-7-sides').addEventListener('change', product7_Price)
    return sidesPrice;
  }

  function getProduct7_Other() {
    other.selected = theFormProduct.elements['product-7-other'];
    other.price = productOther[other.selected.value];
    document.getElementById('product-7-other').addEventListener('change', product7_Price)
    return other.price;
  }

  function getProduct7_Accessories() {
    accessories.selected = theFormProduct.elements['product-7-leash'];
    accessories.price = productAccessories[accessories.selected.value];
    document.getElementById('product-7-leash').addEventListener('change', product7_Price)
    return accessories.price
  }

  function getProductCorners() {
    let cornersPrice = 0;
    const selectedProduct = theFormProduct.elements["product-7-corners"];
    document.getElementById('product-7-corners').addEventListener('click', product7_Price)
    if (selectedProduct.checked == true) {
      cornersPrice = 0.2;
    } else {
      cornersPrice = 0;
    }
    return cornersPrice;
  }

  function getProduct7_Price() {
    let productPrice = (((((getProduct7_Size() * getProduct7_Material()) *
        printingCost.dp) + getProduct7_Sides()) * getProduct7_Count()) +
      ((getProduct7_Size() * getProduct7_Other()) * getProduct7_Count()) +
      (getProduct7_Accessories() * getProduct7_Count()) + (getProductCorners() * getProduct7_Count())) * 3.5

      let count = getProduct7_Count()
      if(count){
        if (count >= 1 ) {
          productPrice = productPrice + 10
          productPrice*= 0.60
        }
      }
    document.querySelector('.product-7-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct7_Price()

}

function product8_Price() {
  theFormProduct = document.forms['product-8'];

  function getProduct8_Count() {
    count = parseInt(document.getElementById('product-8-count').value);
    document.getElementById('product-8-count').addEventListener('change', product8_Price)
    return count
  }

  function getProduct8_Size() {
    size.selected = theFormProduct.elements['product-8-size'];
    size.price = productSize[size.selected.value];
    document.getElementById('product-8-size').addEventListener('change', product8_Price)
    return size.price
  }

  function getProduct8_Material() {
    material.selected = theFormProduct.elements['product-8-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-8-material').addEventListener('change', product8_Price)
    return material.price
  }

  function getProduct8_Sides() {
    sides.selected = theFormProduct.elements['product-8-sides'];
    sides.price = productSides[sides.selected.value];
    let sidesPrice = ((getProduct8_Size() * sides.price) * printingCost.dp)
    document.getElementById('product-8-sides').addEventListener('change', product8_Price)
    return sidesPrice;
  }

  function getProduct8_Other() {
    other.selected = theFormProduct.elements['product-8-other'];
    other.price = productOther[other.selected.value];
    document.getElementById('product-8-other').addEventListener('change', product8_Price)
    return other.price;
  }

  function getProduct8_Binding() {
    binding.selected = theFormProduct.elements['product-8-binding'];
    binding.price = productBinding[binding.selected.value];
    document.getElementById('product-8-binding').addEventListener('change', product8_Price)
    return binding.price;
  }

  function getProduct8_Price() {
    const pages = 8  //pages in calendar * print
    let productPrice = ((((((getProduct8_Size() * getProduct8_Material()) * printingCost.dp) + getProduct8_Sides()) + pages) * getProduct8_Count()) +
      ((getProduct8_Size() * getProduct8_Other()) * getProduct8_Count()) + (getProduct8_Binding() * getProduct8_Count())) * 3.5

      let count = getProduct8_Count()
      if(count){
        if (count >= 1 ) {
          productPrice = productPrice + 10
          productPrice*= 0.60
        }
      }
    document.querySelector('.product-8-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct8_Price()

}

function product9_Price() {
  theFormProduct = document.forms['product-9'];

  function getProduct9_Count() {
    count = parseInt(document.getElementById('product-9-count').value);
    document.getElementById('product-9-count').addEventListener('change', product9_Price)
    return count
  }

  function getProduct9_Pages() {
    count = parseInt(document.getElementById('product-9-pages').value);
    document.getElementById('product-9-pages').addEventListener('change', product9_Price)
    return (((getProduct9_Size() * getProduct9_Material() * getProduct9_Inner()) * printingCost.dp) * count) -
      ((getProduct9_Size() * (getProduct9_Material() / 2) * getProduct9_Inner()) * count)
  }

  function getProduct9_Size() {
    size.selected = theFormProduct.elements['product-9-size'];
    size.price = productSize[size.selected.value];
    document.getElementById('product-9-size').addEventListener('change', product9_Price)
    return size.price
  }

  function getProduct9_Material() {
    material.selected = theFormProduct.elements['product-9-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-9-material').addEventListener('change', product9_Price)
    return material.price
  }

  function getProduct9_Cover() {
    cover.selected = theFormProduct.elements['product-9-cover'];
    cover.price = productCover[cover.selected.value];
    document.getElementById('product-9-cover').addEventListener('change', product9_Price)
    return cover.price * 2
  }

  function getProduct9_Other() {
    other.selected = theFormProduct.elements['product-9-other'];
    other.price = productOther[other.selected.value];
    document.getElementById('product-9-other').addEventListener('change', product9_Price)
    return other.price * 2
  }

  function getProduct9_Binding() {
    binding.selected = theFormProduct.elements['product-9-binding'];
    binding.price = productBinding[binding.selected.value];
    document.getElementById('product-9-binding').addEventListener('change', product9_Price)
    return binding.price
  }

  function getProduct9_Inner() {
    inner.selected = theFormProduct.elements['product-9-inner'];
    inner.price = productInner[inner.selected.value];
    document.getElementById('product-9-inner').addEventListener('change', product9_Price)
    return inner.price
  }

  function getProduct9_Price() {
    let productPrice = ((((((getProduct9_Size() * getProduct9_Material() * getProduct9_Inner()) * printingCost.dp) + (getProduct9_Pages() / 1.4)) +
        ((getProduct9_Cover() * getProduct9_Size()) * printingCost.dp) + (getProduct9_Other() * getProduct9_Size())) * getProduct9_Count()) +
      (getProduct9_Binding() * getProduct9_Count())) * 1.73

      let count = getProduct9_Count()
      if(count){
        if (count >= 1 ) {
          productPrice = productPrice + 10
          productPrice*= 0.60
        }
      }
    document.querySelector('.product-9-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct9_Price()
}

function product10_Price() {
  theFormProduct = document.forms['product-10'];

  function getProduct10_Count() {
    count = parseInt(document.getElementById('product-10-count').value);
    document.getElementById('product-10-count').addEventListener('change', product10_Price)
    return count
  }

  function getProduct10_Size() {
    size.selected = theFormProduct.elements['product-10-size'];
    size.price = productSize[size.selected.value];
    document.getElementById('product-10-size').addEventListener('change', product10_Price)
    return size.price
  }

  function getProduct10_Material() {
    material.selected = theFormProduct.elements['product-10-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-10-material').addEventListener('change', product10_Price)
    return material.price
  }

  function getProduct10_Sides() {
    sides.selected = theFormProduct.elements['product-10-sides'];
    sides.price = productSides[sides.selected.value];
    let sidesPrice = ((getProduct10_Size() * sides.price) * printingCost.dp)
    document.getElementById('product-10-sides').addEventListener('change', product10_Price)
    return sidesPrice;
  }

  function getProduct10_Other() {
    other.selected = theFormProduct.elements['product-10-other'];
    other.price = productOther[other.selected.value];
    document.getElementById('product-10-other').addEventListener('change', product10_Price)
    return other.price
  }

  function getProduct10_Price() {
    let productPrice = (((((getProduct10_Size() * getProduct10_Material()) *
        printingCost.dp) + getProduct10_Sides()) * getProduct10_Count()) +
      ((getProduct10_Size() * getProduct10_Other()) * getProduct10_Count())) * 3.5

      let count = getProduct10_Count()
      if(count){
        if (count >= 1 ) {
          productPrice = productPrice + 10
          productPrice*= 0.60
        }
      }
    document.querySelector('.product-10-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct10_Price()
}

function product11_Price() {
  theFormProduct = document.forms['product-11'];

  function getProduct11_Count() {
    count = parseInt(document.getElementById('product-11-count').value);
    document.getElementById('product-11-count').addEventListener('change', product11_Price)
    return count
  }

  function getProduct11_Pages() {
    count = parseInt(document.getElementById('product-11-pages').value);
    document.getElementById('product-11-pages').addEventListener('change', product11_Price)
    return (((getProduct11_Size() * getProduct11_Material() * getProduct11_Inner()) * printingCost.dp) * count) -
      ((getProduct11_Size() * (getProduct11_Material() / 2) * getProduct11_Inner()) * count)
  }

  function getProduct11_Size() {
    size.selected = theFormProduct.elements['product-11-size'];
    size.price = productSize[size.selected.value];
    document.getElementById('product-11-size').addEventListener('change', product11_Price)
    return size.price
  }

  function getProduct11_Material() {
    material.selected = theFormProduct.elements['product-11-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-11-material').addEventListener('change', product11_Price)
    return material.price
  }

  function getProduct11_Cover() {
    cover.selected = theFormProduct.elements['product-11-cover'];
    cover.price = productCover[cover.selected.value];
    document.getElementById('product-11-cover').addEventListener('change', product11_Price)
    return cover.price * 2
  }

  function getProduct11_Other() {
    other.selected = theFormProduct.elements['product-11-other'];
    other.price = productOther[other.selected.value];
    document.getElementById('product-11-other').addEventListener('change', product11_Price)
    return other.price * 2
  }

  function getProduct11_Binding() {
    binding.selected = theFormProduct.elements['product-11-binding'];
    binding.price = productBinding[binding.selected.value];
    document.getElementById('product-11-binding').addEventListener('change', product11_Price)
    return binding.price
  }

  function getProduct11_Inner() {
    inner.selected = theFormProduct.elements['product-11-inner'];
    inner.price = productInner[inner.selected.value];
    document.getElementById('product-11-inner').addEventListener('change', product11_Price)
    return inner.price
  }

  function getProduct11_Price() {
    let productPrice = ((((((getProduct11_Size() * getProduct11_Material() * getProduct11_Inner()) * printingCost.dp) + (getProduct11_Pages() / 1.4)) +
        ((getProduct11_Cover() * getProduct11_Size()) * printingCost.dp) + (getProduct11_Other() * getProduct11_Size())) * getProduct11_Count()) +
      (getProduct11_Binding() * getProduct11_Count())) * 1.23

      let count = getProduct11_Count()
      if(count){
        if (count >= 1 ) {
          productPrice = productPrice + 10
          productPrice*= 0.60
        }
      }
    document.querySelector('.product-11-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct11_Price()
}

function product12_Price() {
  theFormProduct = document.forms['product-12'];

  function getProduct12_Count() {
    count = parseInt(document.getElementById('product-12-count').value);
    document.getElementById('product-12-count').addEventListener('change', product12_Price)
    return count
  }

  function getProduct12_Size() {
    size.selected = theFormProduct.elements['product-12-size'];
    size.price = productSize[size.selected.value];
    document.getElementById('product-12-size').addEventListener('change', product12_Price)
    return size.price
  }

  function getProduct12_Material() {
    material.selected = theFormProduct.elements['product-12-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-12-material').addEventListener('change', product12_Price)
    return material.price
  }

  function getProduct12_Price() {
    let productPrice = (((getProduct12_Size() * getProduct12_Material()) *
      (printingCost.dp)) * getProduct12_Count())
      let count = getProduct12_Count()
      if(count){

        if (count >= 50 ) {
          productPrice = productPrice + 29
          productPrice*= 0.5 
        }
      }

    document.querySelector('.product-12-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct12_Price()
}

function product13_Price() {
  theFormProduct = document.forms['product-13'];

  function getProduct13_Count() {
    count = parseInt(document.getElementById('product-13-count').value);
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

function product14_Price() {
  theFormProduct = document.forms['product-14'];

  function getProduct14_Count() {
    count = parseInt(document.getElementById('product-14-count').value);
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

function product15_Price() {
  theFormProduct = document.forms['product-15'];

  function getProduct15_Count() {
    count = parseInt(document.getElementById('product-15-count').value);
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

function product16_Price() {
  theFormProduct = document.forms['product-16'];

  function getProduct16_Count() {
    count = parseInt(document.getElementById('product-16-count').value);
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

function product17_Price() {
  theFormProduct = document.forms['product-17'];

  function getProduct17_Count() {
    count = parseInt(document.getElementById('product-17-count').value);
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

function product18_Price() {
  theFormProduct = document.forms['product-18'];

  function getProduct18_Count() {
    count = parseInt(document.getElementById('product-18-count').value);
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

function product19_Price() {
  theFormProduct = document.forms['product-19'];

  function getProduct19_Count() {
    count = parseInt(document.getElementById('product-19-count').value);
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

function product20_Price() {
  theFormProduct = document.forms['product-20'];

  function getProduct20_Count() {
    count = parseInt(document.getElementById('product-20-count').value);
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

function product21_Price() {
  theFormProduct = document.forms['product-21'];

  function getProduct21_Count() {
    count = parseInt(document.getElementById('product-21-count').value);
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

// function product22_Price() {
//   theFormProduct = document.forms['product-22'];

//   function getProduct22_Count() {
//     count = parseInt(document.getElementById('product-22-count').value);
//     document.getElementById('product-22-count').addEventListener('change', product22_Price);
//     return count
//   }

//   function getProduct22_Size() {
//     size.selected = theFormProduct.elements['product-22-size'];
//     size.price = productSize[size.selected.value];
//     customSize.customDisplay = [...document.querySelectorAll('.product-22-custom-size')];
//     customSize.countWidth = parseInt(document.getElementById('product-22-custom-width').value);
//     customSize.countHeight = parseInt(document.getElementById('product-22-custom-height').value);
//     document.getElementById('product-22-size').addEventListener('change', product22_Price);
//     document.getElementById('product-22-custom-width').addEventListener('change', product22_Price);
//     document.getElementById('product-22-custom-height').addEventListener('change', product22_Price);

//     function getCustomSize() {

//       let customPrice = (customSize.countWidth * customSize.countHeight) / 10000 //cm
//       return customPrice
//     }
//     if (size.selected.value === 'product-22-a1') {
//       customSize.customDisplay.forEach(item => item.style.display = 'block')
//     } else {
//       customSize.customDisplay.forEach(item => item.style.display = 'none')
//     }

//     if (size.selected.value === 'product-22-a1') {
//       return getCustomSize()
//     } else {
//       return size.price
//     }

//   }

//   function getProduct22_Material() {
//     material.selected = theFormProduct.elements['product-22-material'];
//     material.price = productMaterial[material.selected.value];
//     document.getElementById('product-22-material').addEventListener('change', product22_Price);
//     return material.price
//   }

//   function getProduct22_Other() {
//     other.selected = theFormProduct.elements['product-22-other'];
//     other.selected = productOther[other.selected.value];
//     document.getElementById('product-22-other').addEventListener('change', product22_Price);
//     return other.price
//   }

//   function getProduct22_Underlay() {
//     underlay.selected = theFormProduct.elements['product-22-underlay'];
//     underlay.price = productUnderlay[underlay.selected.value];
//     document.getElementById('product-22-underlay').addEventListener('change', product22_Price);
//     return underlay.price
//   }

//   function getProduct22_Price() {
//     let productPrice = ((((getProduct22_Size() * getProduct22_Material()) * printingCost.lf) * getProduct22_Count()) +
//       ((getProduct22_Other() * getProduct22_Size()) * getProduct22_Count()) +
//       ((getProduct22_Underlay() * getProduct22_Size()) * getProduct22_Count())) * 1.23
//       let count = getProduct22_Count()
//       if(count){
  
//         if (count >= 5 ) {
//           productPrice = productPrice + 10
//           productPrice*= 0.95
//         }
//         if (count >= 10 ) {
//           productPrice = productPrice + 30
//           productPrice*= 0.93
//         }
//       }

//     document.querySelector('.product-22-price span').textContent = productPrice.toFixed(2)
//   }
//   return getProduct22_Price()
// }

function product23_Price() {
  theFormProduct = document.forms['product-23'];

  function getProduct23_Count() {
    count = parseInt(document.getElementById('product-23-count').value);
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

function product24_Price() {
  theFormProduct = document.forms['product-24'];

  function getProduct24_Count() {
    count = parseInt(document.getElementById('product-24-count').value);
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

function product25_Price() {
  theFormProduct = document.forms['product-25'];

  function getProduct25_Count() {
    count = parseInt(document.getElementById('product-25-count').value);
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

function product26_Price() {
  theFormProduct = document.forms['product-26'];

  function getProduct26_Count() {
    count = parseInt(document.getElementById('product-26-count').value);
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

function product27_Price() {
  theFormProduct = document.forms['product-27'];

  function getProduct27_Count() {
    count = parseInt(document.getElementById('product-27-count').value);
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

function product28_Price() {
  theFormProduct = document.forms['product-28'];

  function getProduct28_Count() {
    count = parseInt(document.getElementById('product-28-count').value);
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

function product31_Price() {
  theFormProduct = document.forms['product-31'];

  function getProduct31_Count() {
    count = parseInt(document.getElementById('product-31-count').value);
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

function product32_Price() {
  theFormProduct = document.forms['product-32'];

  function getProduct32_Count() {
    count = parseInt(document.getElementById('product-32-count').value);
    document.getElementById('product-32-count').addEventListener('change', product32_Price)
    return count
  }

  function getProduct32_Size() {
    size.selected = theFormProduct.elements['product-32-size'];
    size.price = productSize[size.selected.value];
    customSize.customDisplay = document.querySelector('.product-32-custom-size');
    customSize.countWidth = parseInt(document.getElementById('product-32-custom-width').value);
    customSize.countHeight = parseInt(document.getElementById('product-32-custom-height').value);
    document.getElementById('product-32-size').addEventListener('change', product32_Price)
    document.getElementById('product-32-custom-width').addEventListener('change', product32_Price)
    document.getElementById('product-32-custom-height').addEventListener('change', product32_Price)

    function getCustomSize() {

      let customPrice = (customSize.countWidth * customSize.countHeight) /  10000 //cm
      return customPrice
    }
    if (size.selected.value === 'product-32-a1') {
      customSize.customDisplay.style.display = 'block'
    } else {
      customSize.customDisplay.style.display = 'none'
    }

    if (size.selected.value === 'product-32-a1') {
      return getCustomSize()
    } else {
      return size.price
    }

  }

  function getProduct32_Material() {
    material.selected = theFormProduct.elements['product-32-material'];
    material.price = productMaterial[material.selected.value];
    document.getElementById('product-32-material').addEventListener('change', product32_Price)
    return material.price
  }
  function getProduct32_Cut() {
    let cutPrice = 0;
    const selectedProduct = theFormProduct.elements["product-32-cut-by-contour"];
    document.getElementById('product-32-cut-by-contour').addEventListener('click', product32_Price)
    if (selectedProduct.checked == true) {
      cutPrice = 5;
    } else {
      cutPrice = 0;
    }
    return cutPrice;
  }
  // function getProduct32_Other() {
  //   other.selected = theFormProduct.elements['product-32-other'];
  //   other.price = productOther[other.selected.value];
  //   document.getElementById('product-32-other').addEventListener('change', product32_Price)
  //   return other.price
  // }

  // function getProduct15_Cut() {
  //   let cutPrice = 0;
  //   const selectedProduct = theFormProduct.elements["product-15-cut-by-contour"];
  //   document.getElementById('product-15-cut-by-contour').addEventListener('click', product15_Price)
  //   if (selectedProduct.checked == true) {
  //     cutPrice = 5;
  //   } else {
  //     cutPrice = 0;
  //   }
  //   return cutPrice;
  // }

  function getProduct32_Price() {
    let productPrice = (((getProduct32_Size() * getProduct32_Material()) * printingCost.lf) * getProduct32_Count())  + 
    (getProduct32_Size() * getProduct32_Cut()) * getProduct32_Count() * 3.23
      let count = getProduct32_Count()
      if(count){
        if (count >= 1 ) {
          productPrice = productPrice + 10

        }
        if (count >= 1 ) {
          productPrice = productPrice + 30
          productPrice*= 0.60
        }
      }
    document.querySelector('.product-32-price span').textContent = productPrice.toFixed(2)
  }
  return getProduct32_Price()
}

export const calculateDp = () => {
    cardPrice();
    envelopePrice();
    product3_Price();
    product4_Price();
    product5_Price();
    product6_Price();
    product7_Price();
    product8_Price();
    product9_Price();
    product10_Price();
    product11_Price();
    product12_Price();
    product32_Price();
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
    // product22_Price();
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

