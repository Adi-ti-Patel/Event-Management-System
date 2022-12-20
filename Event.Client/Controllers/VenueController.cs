using Event.Business.Interface;
using Event.Business.Models;
using Microsoft.AspNetCore.Mvc;

namespace Event.Client.Controllers
{
    [ApiController]
    [Route("api/v1")]
    public class VenueController : ControllerBase
    {
        private readonly IVenueRepository venueRepository;
        public VenueController(IVenueRepository repository)
        {
            this.venueRepository = repository;
        }

        [HttpGet("events/{id}/venues")]  
        public List<Venue> GetAllVenueOfSpecificEvent(int id)
        {
            return this.venueRepository.GetAllVenueOfSpecificEvent(id);
        }

        [HttpGet("events/{eventId}/venues/{venueId}")]
        public List<Venue> GetSpecificVenueDetails(int eventId, int venueId)
        {
            return this.venueRepository.GetSpecificVenueDetails(eventId, venueId);
        }

        [HttpGet("Venue/{cityId}")]
        public List<Venue> GetVenueByCityId(int cityId)
        {
            return this.venueRepository.GetVenueByCityId(cityId);
        }
    }
}
