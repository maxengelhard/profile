export function Description(props) {
    if (props.src === 'about-me') {
      return (
        <div>
          <h1 className="text-2xl font-bold">About Me</h1>
          <p>
            I am a software engineer with a passion for building scalable and efficient applications. I have experience in a variety of technologies, including Javascript, Python, React, and AWS. I am also AWS cloud and data analytics certified.

            I am a highly motivated and results-oriented individual with a strong work ethic. I am also a team player and I am always willing to help others. I am confident that I have the skills and experience necessary to be successful in any software engineering role.

            In my spare time, I enjoy spending time with my family and friends, playing sports, and traveling. I am also an avid reader and I enjoy learning new things.

            I am always looking for new challenges and opportunities to learn and grow. I am confident that I can make a significant contribution to any team.
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