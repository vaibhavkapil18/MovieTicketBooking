using AngularAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularAPI.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Location> Locations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("users");

            modelBuilder.Entity<Movie>()
             .HasOne(m => m.Location)
             .WithMany()
             .HasForeignKey(m => m.LocationId)
             .OnDelete(DeleteBehavior.SetNull); // Set the foreign key to null on delete

        }
    }
}
