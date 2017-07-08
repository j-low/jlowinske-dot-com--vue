export default {
  mouseenter: mouseenter,
  mouseleave: mouseleave
}

function mouseenter(e) {
  const navBox = $(e.target);
  const front = $('.' + e.target.classList[0] + ' .nav-box-front');
  const back = $('.' + e.target.classList[0] + ' .nav-box-back');
  // debugger;
}

function mouseleave(e) {
  const navBox = $(e.target);
  const front = $('.' + e.target.classList[0] + ' .nav-box-front');
  const back = $('.' + e.target.classList[0] + ' .nav-box-back');
  // debugger;
}
