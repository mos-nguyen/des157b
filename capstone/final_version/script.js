(function () {

    'use strict'
    console.log('reading js');

    const go = document.querySelector('#continue');

    go.addEventListener('click', function() {
        overlay.className='done';
    });
// ----------------------------------------------------------------------------------------
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
    });
// ----------------------------------------------------------------------------------------
    const inventory = document.querySelector('#inventory');
    const close = document.querySelector('#inventory p')

    close.addEventListener('click', function() {
        inventory.classList.remove('.open')
        inventory.className='done';

    })
// ----------------------------------------------------------------------------------------
    const next = document.querySelector('#next');
    const box = document.querySelector('#box');
    const boxText  = document.querySelector('#box #text');
    const finish = document.querySelector('#finish')
    const speak = document.querySelector('#temp')
    const witness = document.querySelector('#witness');

    let textIndex = 0;

    const textBank = {
        newText: [
            '<strong>Talia</strong><br> You can just call me Talia.',
            '<strong>Detective Fennek</strong><br>Alright Ms Talia...what is your relationship with the victim?',
            '<strong>Talia</strong><br>Nothing, I was just passing by thats all. Poor thing, I nearly fainted when I realized what happened.',
            '<strong>Detective Fennek</strong><br>Quite convinient of you to be just passing by. Whats someone like you doing out at such a late hour?',
            '<strong>Talia</strong><br>Now whats that supposed to mean? If you must know, I tend to enjoy a late night walk. Well...not anymore I suppose.',
            '<strong>Detective Fennek</strong><br>I see. Please stay until the investigation is over before you go anywhere else.'
        ]        
    }

    // const textBank = {
    //     newText: [
    //         'Alright Ms Talia...what is your relationship with the victim?',
    //         'Quite convinient of you to be just passing by. Whats someone like you doing out at such a late hour?',
    //         'I see. Please stay until the investigation is over before you go anywhere else.'
    //     ],
    //     newCatText: [
    //         'You can just call me Talia.',
    //         'Nothing, I was just passing by thats all. Poor thing, I nearly fainted when I realized what happened.',
    //         'Now whats that supposed to mean? If you must know, I tend to enjoy a late night walk. Well...not anymore I suppose.'
    //     ]
    // }

    next.addEventListener('click', function() {
        // console.log('testing');
        if (textIndex < textBank.newText.length) {
            boxText.innerHTML = `<p>${textBank.newText[textIndex]}</p>`;
        textIndex ++
        } else {
            next.style.display='none';
            finish.className = 'open';
            // next.innerHTML = '<button id="next">Done</button>'
        }
    })   

    finish.addEventListener('click', function() {
        witness.className = 'done'
        evidence3.classList.remove('.done');
        evidence3.className = 'open';
    })

    speak.addEventListener('click', function() {
        witness.className = 'open'; 
    })
    
// ---------------------------------------------------------------------------------------
    const info = document.querySelector('#info')

    bun.addEventListener('click', function () {
        const bun = document.querySelector('#bun');
        evidence1.classList.remove('.done');
        evidence1.className = 'open';
        bun.classList.add('animate');
    })

    hammer.addEventListener('click', function() {
        const hammer = document.querySelector('#hammer');
        evidence2.classList.remove('.done');
        evidence2.className = 'open';
    })


    evidence1.addEventListener('click', function () {
        const evidence1 = document.querySelector('#evidence1');
        info.classList.remove('done');
        info.className = 'open'
        info.innerHTML = 'The corpse. Its hard to tell what actually happened to the victim with the filter over it. Is it worth it to reveal what actually happened? Maybe I should check on some other evidence first... '
    })

    evidence2.addEventListener('click', function() {
        const evidence2 = document.querySelector('#evidence2')
        info.classList.remove('done');
        info.className = 'open'
        info.innerHTML = '<p>The murder weapon, I presume. its covered in something...blood maybe? I could check but it might lower my reputation.</p>'
    })

    evidence3.addEventListener('click', function() {
        const evidence3 = document.querySelector('#evidence3')
        info.classList.remove('done');
        info.className = 'open'
        info.innerHTML = '<p>Talias witness report. she claims to have nothing to do with the victim.</p>'
    })

})();