export default function getLists() {
  return fetch(
    "https://kerra-proxy.cyclic.app/get?url=https://frontend-take-home.fetchrewards.com/form"
  ).then((res) => res.json());
}
