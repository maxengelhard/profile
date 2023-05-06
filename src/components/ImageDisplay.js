export function ImageDisplay(props) {
    return (
      <div className="flex-1">
        {props.src && <img src={props.src} alt="Active Item" className="w-full h-full object-cover" />}
      </div>
    );
  }
  