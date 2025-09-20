import Synonyms from "./Synonyms";

import "./Results.css";
import "./Meanings.css";
import "./Synonyms.css";

export default function Meaning(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="Definition-result">{props.meaning.definition}</div>
      <div className="Meaning-example">{props.meaning.example}</div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
