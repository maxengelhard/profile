export function Description(props) {
    if (props.src === 'about-me') {
      return (
        <div className="flex p-4">
        <div className="w-5/6 pr-2 border-r">
          <h1 className="text-2xl font-bold">About Me</h1>
          <p>
            I am a software engineer with a passion for building scalable and efficient applications. I have experience in a variety of technologies, including Javascript, Python, React, and AWS. I am also AWS cloud and data analytics certified.

            I am a highly motivated and results-oriented individual with a strong work ethic. I am also a team player and I am always willing to help others. I am confident that I have the skills and experience necessary to be successful in any software engineering role.

            In my spare time, I enjoy spending time with my family and friends, playing sports, and traveling. I am also an avid reader and I enjoy learning new things.

            I am always looking for new challenges and opportunities to learn and grow. I am confident that I can make a significant contribution to any team.
          </p>
          </div>
          <div className="w-1/6 flex justify-center items-center pl-1">
          <a
            href="https://github.com/maxengelhard"
            target="_blank" rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Checkout my Github
          </a>
          </div>
        </div>
      );
    } else if (props.src === 'easy-layers') {
      return (
        <div className="flex p-4">
        <div className="w-5/6 pr-2 border-r">
          <h1 className="text-2xl font-bold">Easy Layers</h1>
            Easy Layers is a public website that allows people to create Lambda Layers with Python packages, just like pip install. With Easy Layers, you create layers that keep your Lambda functions smaller and easier to manage by externalizing dependencies that can be shared across multiple functions.
            <br/>
            <h3 className="text-1xl font-bold">Getting Started</h3>
            To use Lambda Layers Creator, simply navigate to the website in your browser at https://easylayers.dev/
            <br/>
            Creating a Lambda Layer
            To create a Lambda Layer, follow these steps:
            <br/>
            <ul>
            <li>1. Enter the AWS Region, Python version, and architecture you want.</li>
            <li>2. Enter the name of the Python package you want to include in your layer (e.g. requests, pandas, numpy, etc.).</li>
            <li>3. Enter the version of the Python package (optional).</li>
            <li>4. Click the "Submit" button to create a layer.</li>
            </ul>
            </div>
          <div className="w-1/6 flex justify-center items-center pl-1">
          <a
            href="https://easylayers.dev/"
            target="_blank" rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Checkout Easy Layers
          </a>
          </div>
        </div>
      );
    } else if (props.src === 'react-roulette') {
        return (
          <div className="flex p-4">
          <div className="w-5/6 pr-2 border-r">
            <h1 className="text-2xl font-bold">Easy Layers</h1>
              Easy Layers is a public website that allows people to create Lambda Layers with Python packages, just like pip install. With Easy Layers, you create layers that keep your Lambda functions smaller and easier to manage by externalizing dependencies that can be shared across multiple functions.
              <br/>
              <h3 className="text-1xl font-bold">Getting Started</h3>
              To use Lambda Layers Creator, simply navigate to the website in your browser at https://easylayers.dev/
              <br/>
              Creating a Lambda Layer
              To create a Lambda Layer, follow these steps:
              <br/>
              <ul>
              <li>1. Enter the AWS Region, Python version, and architecture you want.</li>
              <li>2. Enter the name of the Python package you want to include in your layer (e.g. requests, pandas, numpy, etc.).</li>
              <li>3. Enter the version of the Python package (optional).</li>
              <li>4. Click the "Submit" button to create a layer.</li>
              </ul>
              </div>
            <div className="w-1/6 flex justify-center items-center pl-1">
            <a
              href="https://easylayers.dev/"
              target="_blank" rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Checkout Easy Layers
            </a>
            </div>
          </div>
        );
      }
  }