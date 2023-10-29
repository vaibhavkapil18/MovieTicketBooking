namespace AngularAPI.Models
{
    public class Film
    {
        public int FilmId { get; set; }
        public string FilmName { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Location { get; set; }
        public string Language { get; set; }
        public string Genre { get; set; }
        public string PosterURL { get; set; }
    }
}
