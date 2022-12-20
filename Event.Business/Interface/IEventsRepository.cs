using Event.Business.Models;

namespace Event.Business.Interface
{
    public interface IEventsRepository
    {
        Events GetEventById(int id);

        List<Events> GetEventByMonth(int month, int year);

        List<Events> GetAllCompletedEvent();
    }
}
