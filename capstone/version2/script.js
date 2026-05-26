(function () {

    'use strict'
    console.log('reading js');

    const go = document.querySelector('#continue');

    go.addEventListener('click', function() {
        // console.log('werk')
        overlay.className='done';
        // text.className='open';
    });

    const envelope = document.querySelector('.fa-envelope');
    const portal = document.querySelector('.fa-door-closed');
    const openInventory = document.querySelector('.fa-briefcase');

    envelope.addEventListener('click', function() {
        overlay.classList.remove('.done')
        overlay.className='open';
    })

    portal.addEventListener('click', function() {
        // console.log('werk')
        window.location.href = 'https://mos-nguyen.github.io/des157b/'
    })

    openInventory.addEventListener('click', function() {
        // console.log('werk');
        inventory.classList.remove('.done')
        inventory.className='open';
        box.className='done';
    });

    const inventory = document.querySelector('#inventory');
    const close = document.querySelector('#inventory p')

    close.addEventListener('click', function() {
        inventory.classList.remove('.open')
        inventory.className='done';
        box.classList.remove('.done');
        box.className='open';

    })

    const next = document.querySelector('#next');
    const box = document.querySelector('#box')
    const boxText  = document.querySelector('#box p');
    const textBank = {
        newText: [
            'does this work?',
            'How about this one?',
            'This is another one.'
        ]
    }

    next.addEventListener('click', function() {
        console.log('testing');
        box.innerHTML = `<p>${textBank.newText[0]}</p>`
    }) 

})();