export function Description(props) {
    if (props.src === 'about-me') {
      return (
        <div className="flex p-4">
        <div className="w-5/6 pr-2 border-r">
          <h1 className="text-2xl font-bold">About Me</h1>
          <p>
            I am a software engineer with a passion for building scalable and efficient applications. I have experience in a variety of technologies, including Javascript, Python, SQL, AWS, and Azure.

            In my spare time, I enjoy spending time with my family and friends, working out, and traveling. I'm a strong believer in learning through doing and enjoy working on side projects to help me build my engineering skills.
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
            <h1 className="text-2xl font-bold">React Roulette</h1>
                React Roulette is an app I made using react that allows people to play roulette. Information is stored in local storage. It was one of my first applications for learning react. I believe strongly in learning through doing and this gave me a foundation knowledge of react.
                <br/>
                Enjoy if you want!
              </div>
            <div className="w-1/6 flex justify-center items-center pl-1">
            <a
              href="https://roullete-app-487adb.netlify.app/"
              target="_blank" rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Checkout React Roulette
            </a>
            </div>
          </div>
        );
      }
  }