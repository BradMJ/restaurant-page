(()=>{"use strict";const e=function(){const e=document.querySelector("#main");e.innerText="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const t=document.createElement("img");return t.src="../images/platingFood.jpeg",t.alt="Plated Food",e.appendChild(function(e){const t=document.createElement("p");return t.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id",t}()),e.appendChild(t),e}())};function t(e,t){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h2");a.classList.add("food-name"),a.innerText=e;const i=document.createElement("p");i.classList.add("food-description"),i.innerText=t;const d=document.createElement("img");return d.classList.add("food-image"),d.src=`../images/food/${e.toLowerCase()}.jpeg`,d.alt=`${e}`,n.appendChild(d),n.appendChild(a),n.appendChild(i),n}function n(e){document.querySelectorAll(".nav-button").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const a=document.querySelector("#content");a.appendChild(function(){const e=document.createElement("header");e.classList.add("header");const t=document.createElement("p");return t.classList.add("restaurant-name"),t.innerText="The Kraken",e.appendChild(t),e}()),a.appendChild(function(){const a=document.createElement("nav"),i=document.createElement("button");i.classList.add("nav-button"),i.innerText="Home",i.addEventListener("click",(t=>{t.target.classList.contains("active")||(n(i),e())}));const d=document.createElement("button");d.classList.add("nav-button"),d.innerText="Menu",d.addEventListener("click",(e=>{e.target.classList.contains("active")||(n(d),function(){const e=document.querySelector("#main");e.innerText="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(t("Bruschetta","Tomato, Onion and Basil")),e.appendChild(t("Ota Ika","Raw Fish and Chips")),e.appendChild(t("Prawn Salad","Green Papaya Prawns Salad")),e.appendChild(t("Lobster and Salad","Grilled Whole with Garlic Butter")),e.appendChild(t("Fish and Chips","Catch of the Day Fried with Chips")),e.appendChild(t("Chicken Wings","Tossed to Your Heat Preference")),e.appendChild(t("Wahoo and Salad","Cooked in a Cream Lime Butter")),e.appendChild(t("Coffee Cheesecake","Served with a Scoop of Ice Cream")),e}())}())}));const c=document.createElement("button");return c.classList.add("nav-button"),c.innerText="Contact",c.addEventListener("click",(e=>{e.target.classList.contains("active")||(n(c),function(){const e=document.querySelector("#main");e.innerText="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("p");t.classList.add("phone-number"),t.innerText="📞 012-345-6789";const n=document.createElement("p");n.classList.add("address"),n.innerText="🏠 82V9+HGV, Neiafu, Tonga";const a=document.createElement("img");return a.classList.add("location-image"),a.src="../images/restaurantLocation.png",a.alt="The Kraken Restaurant Location",e.appendChild(t),e.appendChild(n),e.appendChild(a),e}())}())})),a.appendChild(i),a.appendChild(d),a.appendChild(c),a}()),a.appendChild(function(){const e=document.createElement("main");return e.setAttribute("id","main"),e.classList.add("main"),e}()),a.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");t.innerText=`Copyright © ${(new Date).getFullYear()} BradMJ`;const n=document.createElement("a");return n.href="https://github.com/BradMJ",e.appendChild(t),e.appendChild(n),e}())}()})();