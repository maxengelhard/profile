// components
import {Description} from './Description'


export function ImageDisplay(props) {

    return (
        <div>
          <Description src={props.src.comp} />
        <img src={props.src.img} alt="Active Item" className="w-full object-cover" />
        </div>
    );
  }
  