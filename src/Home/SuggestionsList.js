import "./Suggestions.css";
import Suggestion from "./Suggestion";
import { Link } from "react-router-dom";
const suggested = [
 {
   id: 1,
   title: "Aurora Borealis",
   image:
     "https://images-ext-1.discordapp.net/external/HkES8uYtCr-lKzMjq_CU-OwUxDgXlUiSi5g9aH5BKIk/https/apod.nasa.gov/apod/image/2102/AuroraTree_Wallace_960.jpg?width=682&height=1023",
 },
 {
   id: 2,
   title: "Mars over Duddo Stone Circle",
   image:
     "https://apod.nasa.gov/apod/image/2103/MarsDuddo_Kivlehan_960.jpg",
 },
 {
   id: 3,
   title: "Zodiacal Light and Mars",
   image:
     "https://apod.nasa.gov/apod/image/2103/ZodiacalLightBarn1024.jpg",
 },
 {
   id: 4,
   title: "Aurora Borealis",
   image:
     "https://images-ext-1.discordapp.net/external/HkES8uYtCr-lKzMjq_CU-OwUxDgXlUiSi5g9aH5BKIk/https/apod.nasa.gov/apod/image/2102/AuroraTree_Wallace_960.jpg?width=682&height=1023",
 },
];

function SuggestionsList() {
  return (
    <div className="suggestions-container">
      {suggested.map((suggestion) => (
        <Link to={`/suggestion/${suggestion.id}`}>
          <Suggestion title={suggestion.title} image={suggestion.image} id={suggestion.id} />
        </Link>
      ))}
    </div>
  );
}

export default SuggestionsList;
