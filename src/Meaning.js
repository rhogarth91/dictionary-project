import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      <p className="font-[400]">{props.meaning.definition}</p>
      <p className="italic">{props.meaning.example}</p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
