import "../styles/sidebar.scss";
import { Button } from './Button';
import { GenreResponseProps } from '../App'

interface SideBarProps {
  handleClickButton: any;
  genres: GenreResponseProps[];
  selectedGenreId: number;
}

export function SideBar({ handleClickButton, genres, selectedGenreId }: SideBarProps) {
  
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
