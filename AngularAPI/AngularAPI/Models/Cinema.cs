using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Cinema
{
    public int CinemaID { get; set; }

    [Required]
    public string CinemaName { get; set; }

    [Required]
    public string CinemaGenre { get; set; }

    [Required]
    public string CityName { get; set; }

    [Required]
    public string Language { get; set; }
}
