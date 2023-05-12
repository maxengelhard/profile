// components
import { Description } from './Description';

export function ImageDisplay(props) {
  return (
    <div className="h-screen flex flex-col">
      <Description src={props.src.comp} />
      <div className="flex-grow">
        <img
          src={props.src.img}
          alt="Active Item"
          className="object-cover max-h-full"
        />
      </div>
    </div>
  );
}