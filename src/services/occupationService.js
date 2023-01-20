export default function getOccupationList() {
  return fetch(
    "https://gtfo-cors--timmy_i_chen.repl.co/get?url=https://frontend-take-home.fetchrewards.com/form"
  ).then((res) => res.json());
}
