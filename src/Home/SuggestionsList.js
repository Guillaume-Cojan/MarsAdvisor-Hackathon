import "./Suggestions.css";
import Suggestion from "./Suggestion";

const suggested = [
  {
    title: "Aurora Borealis",
    image:
      "https://images-ext-1.discordapp.net/external/HkES8uYtCr-lKzMjq_CU-OwUxDgXlUiSi5g9aH5BKIk/https/apod.nasa.gov/apod/image/2102/AuroraTree_Wallace_960.jpg?width=682&height=1023",
  },
  {
    title: "Aurora Borealis",
    image:
      "https://images-ext-1.discordapp.net/external/HkES8uYtCr-lKzMjq_CU-OwUxDgXlUiSi5g9aH5BKIk/https/apod.nasa.gov/apod/image/2102/AuroraTree_Wallace_960.jpg?width=682&height=1023",
  },
  {
    title: "Aurora Borealis",
    image:
      "https://images-ext-1.discordapp.net/external/HkES8uYtCr-lKzMjq_CU-OwUxDgXlUiSi5g9aH5BKIk/https/apod.nasa.gov/apod/image/2102/AuroraTree_Wallace_960.jpg?width=682&height=1023",
  },
  {
    title: "Aurora Borealis",
    image:
      "https://images-ext-1.discordapp.net/external/HkES8uYtCr-lKzMjq_CU-OwUxDgXlUiSi5g9aH5BKIk/https/apod.nasa.gov/apod/image/2102/AuroraTree_Wallace_960.jpg?width=682&height=1023",
  },
];

function SuggestionsList() {
  return (
    <div className="suggestions-container">
      {suggested.map((suggestion) => (
        <Suggestion title={suggestion.title} image={suggestion.image} />
      ))}
    </div>
  );
}

export default SuggestionsList;
