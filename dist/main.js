(()=>{"use strict";const e=function(){const e=document.querySelector("#main");e.innerText="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const t=document.createElement("img");return t.classList.add("home-img"),t.src="../images/homeImg.jpeg",t.alt="Plated Food",e.appendChild(t),e.appendChild(function(e){const t=document.createElement("p");return t.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",t}()),e}())};function t(e,t){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h2");a.classList.add("food-name"),a.innerText=e;const d=document.createElement("p");d.classList.add("food-description"),d.innerText=t;const c=document.createElement("img");return c.classList.add("food-image"),c.src=`../images/food/${e.toLowerCase()}.jpeg`,c.alt=`${e}`,n.appendChild(c),n.appendChild(a),n.appendChild(d),n}function n(){const n=document.createElement("header");n.classList.add("header");const d=document.createElement("p");return d.classList.add("restaurant-name"),d.innerText="The Kraken",n.appendChild(d),n.appendChild(function(){const n=document.createElement("nav"),d=document.createElement("button");d.classList.add("nav-button"),d.innerText="Home",d.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(d),e())}));const c=document.createElement("button");c.classList.add("nav-button"),c.innerText="Menu",c.addEventListener("click",(e=>{e.target.classList.contains("active")||(a(c),function(){const e=document.querySelector("#main");e.innerText="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(t("Bruschetta","Tomato, Onion and Basil")),e.appendChild(t("Ota Ika","Raw Fish and Chips")),e.appendChild(t("Prawn Salad","Green Papaya Prawns Salad")),e.appendChild(t("Lobster and Salad","Grilled Whole with Garlic Butter")),e.appendChild(t("Fish and Chips","Catch of the Day Fried with Chips")),e.appendChild(t("Chicken Wings","Tossed to Your Heat Preference")),e.appendChild(t("Wahoo and Salad","Cooked in a Cream Lime Butter")),e.appendChild(t("Coffee Cheesecake","Served with a Scoop of Ice Cream")),e}())}())}));const i=document.createElement("button");return i.classList.add("nav-button"),i.innerText="Contact",i.addEventListener("click",(e=>{e.target.classList.contains("active")||(a(i),function(){const e=document.querySelector("#main");e.innerText="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("p");t.classList.add("phone-number"),t.innerText="📞 012-345-6789";const n=document.createElement("p");n.classList.add("address"),n.innerText="🏠 82V9+HGV, Neiafu, Tonga";const a=document.createElement("img");return a.classList.add("location-image"),a.src="../images/restaurantLocation.png",a.alt="The Kraken Restaurant Location",e.appendChild(t),e.appendChild(n),e.appendChild(a),e}())}())})),n.appendChild(d),n.appendChild(c),n.appendChild(i),n}()),n}function a(e){document.querySelectorAll(".nav-button").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const t=document.querySelector("#content");t.appendChild(n()),t.appendChild(function(){const e=document.createElement("main");return e.setAttribute("id","main"),e.classList.add("main"),e}()),t.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");t.classList.add("copyright"),t.innerText=`Copyright © ${(new Date).getFullYear()} BradMJ`;const n=document.createElement("a");return n.classList.add("github-link"),n.href="https://github.com/BradMJ",e.appendChild(t),e.appendChild(n),e}()),a(document.querySelector(".nav-button")),e()}()})();