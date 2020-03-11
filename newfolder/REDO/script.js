let myPaths=document.querySelectorAll('circle')
 
function setup() {
    anime({
        targets: '.st0',
        translateY: -600,
        translateX: 50,
        duration: 9000,
        direction: 'alternate',
        loop: true,
        easing: 'easeOutElastic'
    })
        anime({
        targets: '.st1',
        translateY: -300,
        translateX: -50,
        duration: 9000,
        direction: 'alternate',
        loop: true,
    })
        anime({
        targets: '.st2',
        translateY: -400,
        translateX: 25,
        duration: 9000,
        direction: 'alternate',
        loop: true,
    })
        anime({
        targets: '.st3',
        translateY: -100,
        translateX: -25,
        duration: 9000,
        direction: 'alternate',
        loop: true,
    })
        anime({
        targets: '.st4',
        translateY: -150,
        translateX: 50,
        duration: 9000,
        direction: 'alternate',
        loop: true,
    })
        anime({
        targets: '.st5',
        translateY: -300,
        translateX: -50,
        duration: 9000,
        direction: 'alternate',
        loop: true,
    })
}


  
 