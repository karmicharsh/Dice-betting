(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}})();function d(){const n=document.createElement("nav");n.className="navbar",n.innerHTML=`
      <div class="nav-brand">90's Dice Betting</div>
      <div class="nav-links">
        <a href="index.html">Add Money</a>
        <a href="login.html">Login</a>
      </div>
    `,document.body.insertBefore(n,document.body.firstChild)}function m(n,r){return n>r?"1":r>n?"2":"D"}function f(n,r){return n.toUpperCase().trim()===r}function y(n,r){return n>r?"🚩 Player 1 Wins!":r>n?"Player 2 Wins! 🚩":"Draw!"}function h(){let n=0;const r=5;function c(){const e=document.createElement("button");e.textContent="Play Again",e.className="play-again-btn",e.onclick=i,document.querySelector(".container").appendChild(e)}function i(){const e=Math.floor(Math.random()*6)+1,o=Math.floor(Math.random()*6)+1;document.querySelector(".img1").setAttribute("src",`images/dice${e}.png`),document.querySelector(".img2").setAttribute("src",`images/dice${o}.png`);const s=m(e,o),u=y(e,o),a=prompt("Which Player are you betting on? (Enter 1 for Player 1, 2 for Player 2, or D for Draw)");if(a===null){document.querySelector("h1").innerHTML="Game cancelled!";return}const l=f(a,s)?"🎉 You won the bet!":"😢 Better luck next time!";document.querySelector("h1").innerHTML=`${u}<br><span class="feedback">${l}</span>`,document.querySelector(".play-again-btn")||c(),n++,n===r&&t()}function t(){const e=document.createElement("div");e.className="enjoyment-banner",e.innerHTML=`
      <div class="banner-content">
        <h3>Are you enjoying the game?</h3>
        <button onclick="handleEnjoyment(true)">Yes</button>
        <button onclick="handleEnjoyment(false)">No</button>
      </div>
    `,document.body.appendChild(e)}window.handleEnjoyment=function(e){e||alert("It's not like you don't have to sign up!"),window.location.href="login.html"},document.querySelector("#playButton").addEventListener("click",i)}d();h();
