import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";


export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const hero = useMemo( () => getHeroById(id), [id] );

  if ( !hero ) {
    return <Navigate to="/marvel"/>;
  }

  const onNavigateBack = () => {
    id.includes('marvel') ? navigate('/marvel') : navigate('/dc');
  }

  return (
    <div className="row mt-5">

      <div className="col-4">
        <img 
        src={ `/assets/heroes/${id}.jpg` } 
        alt={ hero.superhero } 
        className="img-thumbnail border border-primary rounded-4 border-4 animate__animated animate__fadeInLeft" 
        />
      </div>

      <div className="col-8 animate__animated animate__fadeInUp">
        <h3 className="fw-bold">{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Publisher:</b> { hero.publisher }</li>
          <li className="list-group-item"> <b>Alter ego:</b> { hero.alterEgo }</li>
          <li className="list-group-item"> <b>First appearance</b> { hero.firstAppearance }</li>
        </ul>

        <h5 className="mt-3 fw-bold">Characters</h5>
        <p>{ hero.characters }</p>

        <button 
        className="btn btn-outline-primary"
        onClick={ onNavigateBack }>
          Back
        </button>

      </div>    

    </div>

  )
}
