var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequired76b;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var a={id:e,exports:{}};return n[e]=a,i.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequired76b=i);var a=i("d96cH");async function o(e){let n=[];for(let t of e)n.push(`https://api.themoviedb.org/3/movie/${t.id}?api_key=bf9c4d58b7779ca7f547438ec065a7d2`);console.log("Movies in this library (URL): ",n);let t=[];for(let e of n){let n=await (await fetch(e)).json(),i=n.genres,a=[];for(let e of i)a.push(e.id);n.genre_ids=a,t.push(n)}console.log("This library:",t),(0,a.renderMovies)(0,t,t[0].genres),r.paginationPlace.innerHTML=""}var r=(i("2nhTy"),i("2nhTy")),a=i("d96cH");const l=document.querySelector(".navigation__item:nth-child(2)"),c=document.querySelector("[loadWatched]"),s=document.querySelector("[loadQueued]"),d=document.querySelector(".film-cards");let u=[JSON.parse(localStorage.getItem("movies-watched"))],v=[JSON.parse(localStorage.getItem("movies-queued"))];function f(){a.gallery.innerHTML="",r.paginationPlace.innerHTML="",g()}async function g(){if(c.classList.add("button--active"),c.classList.remove("button--inactive"),r.paginationPlace.innerHTML="",s.classList.add("button--inactive"),s.classList.remove("button--active"),null==u[0]||0==u.length){r.paginationPlace.innerHTML="",d.innerHTML="<h2>You don't have any watched movies yet!</h2>";return}r.paginationPlace.innerHTML="",o(u[0])}async function h(){s.classList.add("button--active"),s.classList.remove("button--inactive"),c.classList.add("button--inactive"),c.classList.remove("button--active"),d.innerHTML="",null==v[0]||0==v.length?d.innerHTML="<h2>You don't have any queued movies yet!</h2>":o(v[0])}a.gallery.innerHTML="",r.paginationPlace.innerHTML="",setTimeout(()=>{f(),g()},1e3),l.addEventListener("click",f),c.addEventListener("click",g),s.addEventListener("click",h);
//# sourceMappingURL=library.36e10ac7.js.map
