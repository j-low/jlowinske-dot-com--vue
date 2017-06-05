var animRunning = false;

const mouseenter = _.throttle(function(e) {
    const className = '.' + e.target.classList[1];
    const front = $(className + ' .' + 'nav-box-front');
    const back = $(className + ' .' + 'nav-box-back');
    const label = $(className + ' .' + 'nav-box-label span');

    if (!animRunning) {
      animRunning = true;

      window.setTimeout(function() {
        animRunning = false;
      }, 500);

      let tl = new TimelineLite();

      // stage I
      tl.add('enter_anim')
      .to(front, 0.2, {
        borderRadius: '50%',
        transform: 'skew(0, 30deg)'
      }, 'enter_anim')
      .to(back, 0.2, {
        transform: 'skew(15deg, -40deg)'
      }, 'enter_anim')

      // stage II
      .to(front, 0.2, {
        transform: 'skew(15deg, -30deg)'
      }, 'enter_anim+=0.2')
      .to(back, 0.2, {
        transform: 'skew(0, 40deg)'
      }, 'enter_anim+=0.2')

      // finish
      .to(front, 0.2, {
        borderRadius: 0,
        transform: 'skew(0, 0deg)',
        marginTop: -7.5,
        marginLeft: -15,
        height: 90,
        width: 180
      }, 'enter_anim+=0.4')
      .to(back, 0.2, {
        height: 0,
        width: 0,
        opacity: 0
      }, 'enter_anim+=0.4')
      .to(label, 0.2, {
        fontSize: 14,
        textTransform: 'uppercase',
      }, 'enter_anim+=0.4');

    }
  }, 750);

const mouseleave = _.throttle(function(e) {
    const className = '.' + e.target.classList[1];
    const front = $(className + ' .' + 'nav-box-front');
    const back = $(className + ' .' + 'nav-box-back');
    const label = $(className + ' .' + 'nav-box-label span');

    if (!animRunning) {
      animRunning = true;

      window.setTimeout(function() {
        animRunning = false;
      }, 500);

      let tl = new TimelineLite();

      tl.add('leave_anim')

      // stage I
      .to(front, 0.2, {
        borderRadius: '50%',
        height: 75,
        width: 150,
        marginTop: 0,
        marginLeft: 0,
        transform: 'skew(15deg, -30deg)'
      }, 'leave_anim')
      .to(back, 0.2, {
        transform: 'skew(0, 40deg)',
        height: 75,
        width: 140,
        opacity: 1
      }, 'leave_anim')
      .to(label, 0.2, {
        fontSize: 12,
        textTransform: 'lowercase',
      }, 'leave_anim')

      // stage II
      .to(front, 0.2, {
        transform: 'skew(0, 30deg)'
      }, 'leave_anim+=0.2')
      .to(back, 0.2, {
        transform: 'skew(15deg, -40deg)',
      }, 'leave_anim+=0.2')

      // finish
      .to(front, 0.2, {
        borderRadius: 0,
        transform: 'skew(0, 7deg)'
      }, 'leave_anim+=0.4')
      .to(back, 0.2, {
        transform: 'skew(0deg, -30deg)',
      }, 'leave_anim+=0.4');
    }
  }, 750);

  export default {
    mouseenter: mouseenter,
    mouseleave: mouseleave
  }
