import homeUtils from 'util/Home/HomeUtils';

export default {
  getHeading: getHeading
}

function getHeading(ctx) {
  const headings = {
    Home: homeUtils.homeHeadingToggler(),
    Blog: 'Blog',
    D3: 'D3.JS',
    About: 'About'
  };
}
