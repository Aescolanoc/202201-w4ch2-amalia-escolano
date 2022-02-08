import { Button } from './button';

export function Gentleman({ gentleman, deleteGentleman, updateGentleman }) {
  return (
    <>
      <li className={gentleman.selected ? 'gentleman selected' : 'gentleman'}>
        <div className="gentleman__avatar-container">
          <img
            className="gentleman__avatar"
            src={'img/' + gentleman.picture}
            alt={gentleman.alternativeText}
          />
          <span className="gentleman__initial">
            {gentleman.picture[0].toUpperCase()}
          </span>
        </div>
        <div className="gentleman__data-container">
          <h2 className="gentleman__name">{gentleman.name}</h2>
          <ul className="gentleman__data-list">
            <li className="gentleman__data">
              <span className="gentleman__data-label">Profession:</span>
              {gentleman.profession}
            </li>
            <li className="gentleman__data">
              <span className="gentleman__data-label">Status:</span>
              {gentleman.status}
            </li>
            <li className="gentleman__data">
              <span className="gentleman__data-label">Twitter:</span>
              {gentleman.twitter}
            </li>
          </ul>
        </div>

        <Button
          action="delete"
          gentleman={gentleman}
          deleteGentleman={deleteGentleman}
        ></Button>
        <Button
          action="select"
          gentleman={gentleman}
          updateGentleman={updateGentleman}
        ></Button>
      </li>
    </>
  );
}
