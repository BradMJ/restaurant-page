(()=>{"use strict";!function(){const e=document.querySelector("#content");e.appendChild(function(){const e=document.createElement("header");e.classList.add("header");const t=document.createElement("p");return t.classList.add("restaurant-name"),t.innerText="The Kraken",e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("nav"),t=document.createElement("button");t.classList.add("nav-button"),t.innerText="Home";const n=document.createElement("button");n.classList.add("nav-button"),n.innerText="Menu";const a=document.createElement("button");return a.classList.add("nav-button"),a.innerText="Contact",e.appendChild(t),e.appendChild(n),e.appendChild(a),e}()),e.appendChild(function(){const e=document.createElement("main");return e.setAttribute("id","main"),e.classList.add("main"),e}()),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");t.innerText=`Copyright © ${(new Date).getFullYear()} BradMJ`;const n=document.createElement("a");return n.href="https://github.com/BradMJ",e.appendChild(t),e.appendChild(n),e}())}()})();