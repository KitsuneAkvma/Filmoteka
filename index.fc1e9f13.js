!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=e.parcelRequired76b;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,i.call(l.exports,l,l.exports),l.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired76b=i),i("ckCCL"),i("jcFG7");var l=i("iGUyU"),o=i("gJQog"),s=i("eizMI");let r={body:document.querySelector("body"),backdropModal:document.querySelector(".backdrop"),modal:document.querySelector(".modal-content")};r.body.addEventListener("click",function(e){e.target.classList.contains("backdrop")&&n();let t=e.target.getAttribute("data-movieId");e.target?.closest("svg")?.classList.contains("modal-close")?n():(document.addEventListener("keydown",c),e.target?.closest("div")?.classList.contains("movie-card")&&(r.backdropModal.classList.remove("is-hidden"),(0,s.displayModalLoader)(),d(t).then(e=>{setTimeout(()=>{(0,l.renderModalMovie)(e)},1e3)})),e.target?.closest("span")?.classList.contains("team-link")&&(r.backdropModal.classList.remove("is-hidden"),function(){let e=`
  <div class="team-details">
    <h2 class="team-details__title"> Mellow Yellow Team </h2>
    <ul class="team-details__list list">
      <li class="team-details__item">
        <figure>
      
          <figcaption>
            <h3 class="team-details__name">Szymon Dymański</h3>
            <p class="team-details_role">Team Leader / Developer</p>
          </figcaption>
        </figure>
      </li>
      <li class="team-details__item">
        <figure>
    
          <figcaption>
            <h3 class="team-details__name">Dorota Domańska</h3>
            <p class="team-details_role">Scrum Master / Developer</p>
          </figcaption>
        </figure>
      </li>
      <li class="team-details__item">
        <figure>
  
          <figcaption>
            <h3 class="team-details__name">Małgorzata Marczyńska</h3>
            <p class="team-details_role">Developer</p>
          </figcaption>
        </figure>
      </li>
      <li class="team-details__item">
        <figure>
    
          <figcaption>
            <h3 class="team-details__name">Marta Domżalska</h3>
            <p class="team-details_role">Developer</p>
          </figcaption>
        </figure>
      </li>
      <li class="team-details__item">
        <figure>
    
          <figcaption>
            <h3 class="team-details__name">Mateusz Martin</h3>
            <p class="team-details_role">Developer</p>
          </figcaption>
        </figure>
      </li>
      <li class="team-details__item">
        <figure>
    
          <figcaption>
            <h3 class="team-details__name">Krzysztof Flisikowski</h3>
            <p class="team-details_role">Developer</p>
          </figcaption>
        </figure>
      </li>
    </ul>
  </div>
     `,t=document.querySelector(".modal-content");t.insertAdjacentHTML("afterbegin",e)}()))});let d=async e=>{let t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=${o.API_KEY}`),a=await t.json();return a};function n(){r.body.style.overflowY="scroll",r.backdropModal.classList.add("is-hidden"),document.removeEventListener("keydown",c),r.modal.innerHTML=""}function c(e){console.log(e.code),"Escape"===e.code&&n()}var m=i("6JpON");let u=document.querySelector(".modal"),f="movies-watched";u.addEventListener("click",e=>{let t=e.target;if("BUTTON"==t.nodeName&&t.classList.contains("button--watched")){let e=u.querySelector("div[data-movieid]").dataset.movieid,t=u.querySelector(".film-details__main-title").innerHTML,a=JSON.parse(localStorage.getItem(f));null==a&&(a=[]);let i=[];if(a.forEach(e=>{i.push(e.id)}),i.includes(e))(0,m.Notify).warning("You already added the movie to watched");else{let i=JSON.parse(localStorage.getItem(g));if(i&&i.length>0){let t=[];i.forEach(e=>{t.push(e.id)}),t.includes(e)&&(i.splice(t.indexOf(e),1),localStorage.setItem(g,JSON.stringify(i)))}a.push({id:e,title:t}),localStorage.setItem(f,JSON.stringify(a))}}});var m=i("6JpON");let p=document.querySelector(".modal"),g="movies-queued";p.addEventListener("click",e=>{let t=e.target;if("BUTTON"==t.nodeName&&t.classList.contains("button--queue")){let e=p.querySelector("div[data-movieid]").dataset.movieid,t=p.querySelector(".film-details__main-title").innerHTML,a=JSON.parse(localStorage.getItem(g));null==a&&(a=[]);let i=[];if(a.forEach(e=>{i.push(e.id)}),i.includes(e))(0,m.Notify).warning("You already added the movie to queued");else{let i=JSON.parse(localStorage.getItem(f));if(i&&i.length>0){let t=[];i.forEach(e=>{t.push(e.id)}),t.includes(e)&&(i.splice(t.indexOf(e),1),localStorage.setItem(f,JSON.stringify(i)))}a.push({id:e,title:t}),localStorage.setItem(g,JSON.stringify(a))}}});let _=document.querySelector(".footer__currentYear"),h=new Date().getFullYear();_.textContent=h}();
//# sourceMappingURL=index.fc1e9f13.js.map
