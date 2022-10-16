

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
                    <h5 className="card-title">{ superhero }</h5>
                </div>
            </div>

        </div>
    </div>
  )
}
