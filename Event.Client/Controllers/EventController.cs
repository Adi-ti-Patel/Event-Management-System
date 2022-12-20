using Event.Business.Interface;
using Event.Business.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Event.Client.Controllers
{
    [EnableCors()]
    [ApiController]
    [Route("api/v1")]
    public class EventController : ControllerBase
    {
        private readonly IEventsRepository eventsRepository;

        public EventController (IEventsRepository repository)
        {
            this.eventsRepository = repository;
        }

        [HttpGet("events/{id}")]
        public Events GetEventById (int id)
        {
            return this.eventsRepository.GetEventById(id);
        }

        [HttpGet("events/{month}/{year}")]
        public List<Events> GetEventsByMonth (int month, int year)
        {
            return this.eventsRepository.GetEventByMonth(month,year);
        }

        [HttpGet("events/completed")]
        public List<Events> GetAllCompletedEvents()
        {
            return this.eventsRepository.GetAllCompletedEvent();
        }

    

    }
}
