import axios from "axios";

export interface Country {
  isocode: string;
  country: string;
}

export interface CountryListResponse {
  count: number;
  results: Country[];
}

export const getRandomIsoCodes = async (): Promise<string[]> => {
  try {
    const { data } = await axios.get<CountryListResponse>(
      "https://apiv3.iucnredlist.org/api/v3/country/list?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee"
    );
    const results = data.results;
    if (!results || results.length === 0) return [];
    for (let i = results.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [results[i], results[j]] = [results[j], results[i]];
    }
    const selected = results.slice(0, 4).map((country :any) => country.isocode);
    return selected;
  } catch (error) {
    console.error("Error fetching country list:", error);
    return [];
  }
};
