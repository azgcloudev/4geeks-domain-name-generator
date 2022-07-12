/* eslint-disable */
/*
thegreatjogger.com
thegreatracoon.com
ourgreatjogger.com
ourgreatracoon.com
thebigjogger.com
thebigracoon.com
ourbigjogger.com
ourbigracoon.com
*/

window.addEventListener("DOMContentLoaded", () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let domain = [];

  for (let i of pronoun) {
    for (let y of adj) {
      for (let z of noun) {
        domain.push(i + y + z);
      }
    }
  }

  for (obj of domain) {
    let dns_list = document.getElementById("dns-list");
    let new_li = document.createElement("li");
    new_li.innerText = obj;
    dns_list.appendChild(new_li);
  }
});
