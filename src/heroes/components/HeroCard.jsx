import { Link } from "react-router-dom";


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alterEgo,
    firstAppearance,
    characters
}) => {

    const heroImgUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card rounded-4">

            <div className="row no-gutter">
                <div className="col-5" >
                    <img src={ heroImgUrl } alt={ superhero } className="card-img rounded-4 p-1"/>
                </div>
            </div>

            <div className="col-7">

                <div className="card-body">

                    <h5 className="card-title fw-bold">{ superhero }</h5>
                    <p className="card-text">{ alterEgo }</p>
                    { ( characters !== alterEgo ) && <p className="fw-" >{ characters }</p> } 

                    <p className="card-text">
                        <small className="text-muted">{ firstAppearance }</small>
                    </p>

                    <Link to={`/hero/${id}`}>
                        More
                    </Link>

                </div>

            </div>

        </div>
    </div>
  )
}
