export default {
  mouseenter: function(e) {
    const className = '.' + e.target.classList[1];
    const navBox = $(className);
    const front = $(className + ' .' + 'nav-box-front');
    const back = $(className + ' .' + 'nav-box-back');

    var tl = new TimelineLite();

    tl.add('skew_0', 0)
      .to(front, 0.2, {
        transform: 'skewX(45deg) skewY(7)',
        borderRadius: '50%'
      }, 'skew_0')
      .to(back, 0.2, {
        transform: 'skewX(-45deg) skewY(-15)',
        borderRadius: '50%'
      }, 'skew_0')
      .to(front, 0.2, {
        transform: 'skewX(45deg) skewY(-7)'
      }, 'skew_0+=0.2')
      .to(back, 0.2, {
        transform: 'skewX(-45deg) skewY(15)'
      }, 'skew_0+=0.2');
  },

  mouseleave: function(e) {
    const className = '.' + e.target.classList[1];
    const front = $(className + ' .' + 'nav-box-front');
    const back = $(className + ' .' + 'nav-box-back');

    var tl = new TimelineLite();

    tl.add('skew_0', 0)
      .to(front, 0.2, {
        transform: 'skewX(-45deg) skewY(7)'
      }, 'skew_0')
      .to(back, 0.2, {
        transform: 'skewX(45deg) skewY(-15)'
      }, 'skew_0')
      .to(front, 0.2, {
        transform: 'skewX(0deg) skewY(-7)',
        borderRadius: 0
      }, 'skew_0+=0.2')
      .to(back, 0.2, {
        transform: 'skewX(0deg) skewY(15)',
        borderRadius: 0
      }, 'skew_0+=0.2');
  }
}
