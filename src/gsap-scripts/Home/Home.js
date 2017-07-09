export default {
  beforeRouteEnter: beforeRouteEnter,
  beforeRouteLeave: beforeRouteLeave
};

function beforeRouteEnter() {
  const name = $('.letter-name');
  const title = $('.letter-job-title');
}

function beforeRouteLeave() {
  return new Promise(function(resolve, reject) {
    resolve(true);
  });
}
