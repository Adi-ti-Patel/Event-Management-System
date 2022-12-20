using Event.Business.Models;
using Event.Bussiness.Models;
using Microsoft.EntityFrameworkCore;

namespace Event.Data.DBContext
{
    public class EventDbContext : DbContext
    {
        public EventDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Cities> Cities { get; set; }

        public DbSet<Events> Event { get; set; }

        public DbSet<Speakers> Speaker { get; set; }

        public DbSet<TalkDetails> TalkDetails { get; set; }

        public DbSet<Venue> Venue { get; set; }

        public DbSet<EventVenueXRef> EventVenueXRef { get; set; }
    }
}
