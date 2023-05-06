interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string | null;
  officialSite: string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string;
  };
  webChannel: null | {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string;
  };
  dvdCountry: null | string;
  externals: {
    tvrage: null | number;
    thetvdb: null | number;
    imdb: null | string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode: {
      href: string;
    } | null;
    nextepisode: {
      href: string;
    } | null;
  };
}
