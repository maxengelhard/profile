export function Description(props) {
    if (props.src === 'about-me') {
      return (
        <div>
          <h1 className="text-2xl font-bold">About Me</h1>
          <p>
            I'm a software/data engineer passionate about technology and how it can solve problems.
          </p>
          <br />
          <a
            href="https://github.com/maxengelhard"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Checkout my Github
          </a>
        </div>
      );
    } else if (props.src === 'easy-layers') {
      return (
        <div>
          <h1 className="text-2xl font-bold">Easy Layers</h1>
          <p>
            Description for the Easy Layers feature goes here.
          </p>
        </div>
      );
    }
  }