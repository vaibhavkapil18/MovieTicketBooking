using System.ComponentModel.DataAnnotations.Schema;

namespace AngularAPI.Models
{
    public class Movie
    {
        public int MovieID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Genre { get; set; }
        public int DurationMinutes { get; set; }
        public string PosterURL { get; set; }
        [ForeignKey("LocationId")]
        public int LocationId { get; set; }

        public Location Location { get; set; }
    }
}
