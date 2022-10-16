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
    <div className="col">
        <div className="card">

            <div className="row no-gutter">
                <div className="col-4" >
                    <img src={ heroImgUrl } alt={ superhero } className="card-img"/>
                </div>
            </div>

            <div className="col-8">

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
