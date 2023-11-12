using System.ComponentModel.DataAnnotations;

namespace AngularAPI.Models
{
    public class Movie
    {
        [Key]
        public int MovieId { get; set; }
        public string Title { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Location { get; set; }
        public string Language { get; set; }
        public string Genre { get; set; }
        public string PosterUrl { get; set; }
    }

}
