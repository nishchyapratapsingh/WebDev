export default function About(props) {
  const arrowStyle = `
  .accordion-button::after {
    filter: ${props.mode === "dark" ? "invert(1)" : "none"};
    transition: filter 0.3s ease;
  }
`;
  return (
    <>
      <style>{arrowStyle}</style>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#063d69",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              About TextTools
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#0a69b5",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              TextTools is a simple and useful text processing web app built
              using <strong>React JS</strong>. It allows users to perform basic
              text operations quickly and efficiently. This project is part of
              my learning journey in web development and React.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#063d69",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              Features and Functionality
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#0a69b5",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              TextTools offers the following features:
              <ul>
                <li>
                  🔠 <strong>Change Text Case</strong> - Convert text to
                  uppercase, lowercase, sentence case or title case instantly.
                </li>{" "}
                <li>
                  📋 <strong>Copy to Clipboard </strong>– Easily copy your
                  edited text with one click.
                </li>{" "}
                <li>
                  {" "}
                  🔢<strong> Text Summary</strong> – Get quick information like
                  word count, character count, and estimated reading time.
                </li>
              </ul>{" "}
              These tools make it easier to work with plain text, especially for
              students, writers, and developers.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#063d69",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              Why I Built This Project
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#0a69b5",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              I built TextTools as a part of my React JS learning. It helped me
              understand{" "}
              <strong>
                {" "}
                components, props, state, and user interaction in React
              </strong>
              . This project gave me hands-on experience with front-end
              development and improved my problem-solving skills. I look forward
              to building more useful tools as I learn and grow.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
