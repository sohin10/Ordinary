let bigImg = document.querySelector('.big-img img');

// let texts = document.querySelector('.right');
// let name = right.querySelector('.pname');




function showImg(pic){
    bigImg.src = pic;
}

function background1(){
    document.querySelector('body').style.background = "url('p1.jpg') center center / cover";
}

function background2(){
    document.querySelector('body').style.background = "url('p2.jpg') center center /cover";
}

function background3(){
    document.querySelector('body').style.background = "url('p3.jpg') center center / cover";
}

function background4(){
    document.querySelector('body').style.background = "url('p4.jpg') center center /  cover";
}


function Glycolic(){
    document.getElementById('zn').innerHTML = 'Glycolic Acid'
    document.getElementById('money').innerHTML = 'PRICE: $35'
    document.getElementById('cription').innerHTML = 'Glycolic Acid 7% Toning Solution is an exfoliant targeted at the surface of the skin. It helps improve skin clarity, balance uneven skin tone, and correct texture over time. This formula contains a Tasmanian Pepperberry derivative of plant origin which varies in colour seasonally and this colour variation may be apparent in the formula from time to time.' 

}


function Niacinamide(){
    document.getElementById('zn').innerHTML = 'Niacinamide'
    document.getElementById('money').innerHTML = 'PRICE: $10'
    document.getElementById('cription').innerHTML = 'Our Niacinamide 10% + Zinc 1% formula is a water-based serum that boosts skin brightness, improves skin smoothness and reinforces the skin barrier over time. It contains a high 10% concentration of Niacinamide (vitamin b3) and zinc PCA.' 

}

function Salicylic(){
    document.getElementById('zn').innerHTML = 'Salicylic Acid'
    document.getElementById('money').innerHTML = 'PRICE: $45'
    document.getElementById('cription').innerHTML = 'Salicylic Acid 2% Masque is a charcoal- and clay-infused formula that targets lacklustre tone and textural irregularities, leaving your skin clean and refreshed. With the help of salicylic acid, a lipophilic BHA known to target pore congestion, this deeply cleansing masque removes dead skin cells and excess oil, which promotes soft and smooth skin. The clay and charcoal absorb facial impurities that would otherwise clog pores, helping to boost radiance.' 

}


function Hyaluronic(){
    document.getElementById('zn').innerHTML = ' Hyaluronic Acid'
    document.getElementById('money').innerHTML = 'PRICE: $15'
    document.getElementById('cription').innerHTML = 'Hyaluronic Acid 2% + B5 is a water-based formula combining low-, medium- and high-molecular-weight hyaluronic acid molecules and a next-generation HA crosspolymer to support hydration to multiple layers of your skin. It also targets the appearance of wrinkles and textural irregularities. Plus, it uses pro-vitamin B5 to enhance hydration at the outer layers, resulting in smoother, plumper skin.' 

}


