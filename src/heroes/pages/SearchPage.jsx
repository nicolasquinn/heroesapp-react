import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { HeroCard } from "../components";
import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../helpers";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );
  const heroes = getHeroByName( q );

  const { searchText, onInputChange } = useForm({ searchText : q });

  const onFormSubmit = (e) => {

    e.preventDefault();
    if ( searchText.trim().length <= 1 ) return;

    navigate(`?q=${ searchText }`);
    
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">

          <h4>Searching</h4>
          <hr />

          <form onSubmit={ onFormSubmit }>
              <input 
                type="text"
                placeholder="Search a hero!"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }
              />

              <button className="btn btn-outline-primary mt-2">
                Search
              </button>
          </form>

        </div>

        <div className="col-7">

          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">
            Search a hero!
          </div>

          <div className="alert alert-danger">
            We couldn't find the hero <b>{ q }</b>, try with another one.
          </div>

          {
            heroes.map( (hero) => (
              <HeroCard 
              key={ hero.id }  
              {...hero}
              />
            ))
          }

        </div>

      </div>
    </>
  )
}
