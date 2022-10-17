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

                <div className="col-6">
                    <img src={ heroImgUrl } alt={ superhero } className="card-img rounded-4"/>
                </div>

                <div className="col-6">

                    <div className="card-body p-0 pt-3">

                        <h5 className="card-title fw-bold">{ superhero }</h5>
                        <p className="card-text">{ alterEgo }</p>
                        { ( characters !== alterEgo ) && <p>{ characters }</p> } 

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
    </div>
  )
}
