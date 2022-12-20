using Event.Business.Interface;
using Event.Business.Models;
using Event.Data.DBContext;

namespace Event.Data.Repository
{
    public class EventsRepository : IEventsRepository
    {
        private readonly EventDbContext dbContext;
        public EventsRepository(EventDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public List<Events> GetAllCompletedEvent()
        {
            return this.dbContext.Event.Where(x => x.IsCompleted == true).ToList();
        }

        public List<Events> GetAllEvents()
        {
            return this.dbContext.Event.ToList();
        }

        public Events GetEventById(int id)
        {
            return dbContext.Event.FirstOrDefault(x => x.Id == id);
        }

        public List<Events> GetEventByMonth(int month, int year)
        {
            return this.dbContext.Event.Where( x => x.StartDate.Month == month && x.StartDate.Year == year).ToList();
        }
    }
}
