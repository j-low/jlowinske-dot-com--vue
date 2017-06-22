export default {
  mouseenter: mouseenter,
  mouseleave: mouseleave
}

function mouseenter(e) {
    const className = '.' + e.target.classList[1];
    const front = $(className + ' .' + 'nav-box-front');
    const label = $(className + ' .' + 'nav-box-label span');

    $('<div class="hover-strike-thru"></div>').appendTo(front);

    const strike = $('.hover-strike-thru')[0];

    var tl = new TimelineMax();

    tl.add('strike_thru')
    .fromTo(strike, 0.1, {
      left: '0%',
      width: '0%'
    },
    {
      left: '0%',
      width: '100%',
      delay: 0.2
    }, 'strike_thru');

    TweenMax.to(front, 0.2, {
          // height: 100,
          // width: 200,
          background: 'rgba(255, 255, 255, 0.05)',
          borderWidth: 1,
          borderColor: '#ffffff',
          boxShadow: 'inset 0 0 5px #ffffff',
          marginTop: 1,
          marginLeft: 1,
          transform: 'skew(0deg, 0deg)',
          ease: Power2.easeInOut
        });

    TweenMax.to(label, 0.2, {
      color: '#ffffff',
      fontSize: 22,
      textTransform: 'uppercase',
      textShadow: '0 0 0px #ffffff'
    });
}

function mouseleave(e) {
    const className = '.' + e.target.classList[1];
    const front = $(className + ' .' + 'nav-box-front');
    const label = $(className + ' .' + 'nav-box-label span');

    const strike = $('.hover-strike-thru');

    var tl = new TimelineMax();

    tl.add('unstrike_unshift')
      .to(strike, 0.1, {
        width: '0%',
        left: '100%'
      }, 'unstrike_unshift')
      .to(front, 0.2, {
          // height: 75,
          // width: 150,
          background: '#ffffff',
          boxShadow: 'none',
          borderColor: "#ffadad",
          borderWidth: 3,
          marginTop: 0,
          marginLeft: 0,
          // transform: 'skew(0deg, 7deg)',
          ease: Power2.easeInOut
        }, 'unstrike_unshift+=0.2')
        .to(label, 0.2, {
          color: '#555555',
          fontSize: 20,
          textTransform: 'none',
          textShadow: '0 0 0px #ffffff'
        }, 'unstrike_unshift+=0.2')
        tl.add(function() {
          strike.remove();
        }, 'unstrike_unshift+=0.2');
}
