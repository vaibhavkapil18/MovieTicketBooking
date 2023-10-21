namespace AngularAPI.Models
{
    public class Location
    {
        public int LocationId { get; set; }
        public string LocationName { get; set; }
        public ICollection<Movie> Movies { get; set; }
    }
}
