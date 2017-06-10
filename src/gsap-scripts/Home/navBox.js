export default {
  mouseenter: mouseenter,
  mouseleave: mouseleave
}

function mouseenter(e) {
    const className = '.' + e.target.classList[1];
    const front = $(className + ' .' + 'nav-box-front');
    const label = $(className + ' .' + 'nav-box-label span');

    var tl = new TimelineLite();

    tl.add('enter_anim')
        .to(front, 0.2, {
            height: 100,
            width: 100,
            marginTop: -12,
            marginLeft: -12,
            transform: 'skew(0deg, 0deg)'
        }, 'enter_anim');
}

function mouseleave(e) {
    const className = '.' + e.target.classList[1];
    const front = $(className + ' .' + 'nav-box-front');
    const label = $(className + ' .' + 'nav-box-label span');

    var tl = new TimelineLite();

    tl.add('leave_anim')
        .to(front, 0.2, {
            height: 75,
            width: 75,
            marginTop: 0,
            marginLeft: 0
        }, 'leave_anim');
}
