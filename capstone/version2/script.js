(function () {

    'use strict'
    console.log('reading js');

    const go = document.querySelector('#continue');
    const overlay = document.querySelector('#overlay');
    const envelope = document.querySelector('.fa-envelope');
    const portal = document.querySelector('.fa-door-closed');
    const text = document.querySelector('#text');
    // const next = document.querySelector('#next');
    const openInventory = document.querySelector('.fa-briefcase');
    const inventory = document.querySelector('#inventory');
    const p = document.querySelector('#inventory p')
    const zero = document.querySelector('#zero');
    const one = document.querySelector('#one');
    const two = document.querySelector('#two');


    go.addEventListener('click', function() {
        // console.log('werk')
        overlay.className='done';
        text.className='open';
    });
    envelope.addEventListener('click', function() {
        overlay.classList.remove('.done')
        overlay.className='open';
    })

    openInventory.addEventListener('click', function() {
        // console.log('werk');
        inventory.classList.remove('.done')
        inventory.className='open';
    });

    p.addEventListener('click', function() {
        inventory.classList.remove('.open')
        inventory.className='done';
    })

    portal.addEventListener('click', function() {
        // console.log('werk')
        window.location.href = 'https://mos-nguyen.github.io/des157b/'
    })

    // next.addEventListener('click', function() {
    //     // console.log('werk')
    //     zero.className='done'
    //     one.classList.remove('.done')
    //     one.className='open'
    // })

//----------------------------
    const next = document.querySelector('#next');

    next.addEventListener('click', function() {
        console.log('werk');

    })


})();