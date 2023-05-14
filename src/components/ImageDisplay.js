// components
import { Description } from './Description';

export function ImageDisplay(props) {
  return (
    <div className="h-screen flex flex-col">
      <Description src={props.src.comp} />
      <div className="flex-grow">
      <a href={props.src.url} target="_blank" rel="noopener noreferrer">
        <img
          src={props.src.img}
          alt="Active Item"
          className="object-cover max-h-full"
        />
        </a>
      </div>
    </div>
  );
}