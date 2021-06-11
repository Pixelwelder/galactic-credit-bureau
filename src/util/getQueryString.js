export default () => {
  const params = {};
  const queryString = window.location.hash.substring(1);
  const regex = /([^&=]+)=([^&]*)/g
  let m;
  while (m = regex.exec(queryString)) {
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }
}
