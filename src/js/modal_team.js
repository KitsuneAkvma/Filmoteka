

export function modalTeam() {
  const teamMarkup = `
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
     `;
  const modalContent = document.querySelector('.modal-content');
  modalContent.insertAdjacentHTML('afterbegin', teamMarkup);
}
