// By CSS class
anime({
    targets: '.txt',
    translateX: 390
});

<!-- Image -->
let props = document.querySelectorAll(".image")
anime({
    targets: props,
    borderRadius: ['0%', '50%'],
    translateX: {
        value: 390,
        duration: 1600,
    },
    rotate: {
        value: 330,
        duration: 2000,
        easing: 'easeInOutSine'
    },
    scale: {
        value: 6,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
    },
    loop: true,
    direction: 'alternate',
    delay: 250 // All properties except 'scale' inherit 250ms delay
});

<!-- Dog -->
let dogs = document.querySelectorAll(".dog")
anime({
    targets: dogs,
    translateX: {
        value: 390,
        duration: 1600,
    },
    keyframes: [
    {translateY: -80},
    {translateX: 1000},
    {translateY: 80},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 10000,
    loop: true,

});
<!-- Puppy -->
let puppy = document.querySelectorAll(".puppy")
anime({
    targets: puppy,
    translateX: {
        value: 390,
        duration: 1600,
    },
    keyframes: [
    {translateY: -80},
    {translateX: 1000},
    {translateY: 80},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 10000,
    loop: true,
    direction: 'reverse',

});

<!-- doggo -->
let doggo = document.querySelectorAll(".doggo")
anime({
    targets: doggo,
    translateX: {
    value: '*=2.5', // 100px * 2.5 = '250px'
    duration: 1000
  },
  width: {
    value: '-=20px', // 28 - 20 = '8px'
    duration: 1800,
    easing: 'easeInOutSine'
  },
  rotate: {
    value: '+=2turn', // 0 + 2 = '2turn'
    duration: 1800,
    easing: 'easeInOutSine'
  },
    loop: true,
  direction: 'alternate',
});
