// theatre.model.ts

export interface Theatre {
    theatreId: number;
    theatreName: string;
    theatreLocation: string;
    movieId: number;
    movie?: any; // You can include additional movie details here if needed
  }
  