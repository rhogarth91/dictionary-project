import Meaning from "./Meaning";

import "./Results.css";
import "./Meanings.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>Word: {props.results.word}</h2>
          <div className="Phonetic-result">
            Phonetic: {props.results.phonetic}
          </div>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
