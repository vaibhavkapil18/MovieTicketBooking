using AngularAPI.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Theatre
{
    [Key]
    public int TheatreId { get; set; } // Renamed from Id to TheatreId
    public string TheatreName { get; set; }
    public string TheatreLocation { get; set; }

    // Define a foreign key relationship with the Movie
    [ForeignKey("MovieId")]
    public int MovieId { get; set; } 
    public Movie Movie { get; set; }
}
