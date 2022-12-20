using Event.Business.Models;

namespace Event.Business.Interface
{
    public interface IVenueRepository 
    {
        List<Venue> GetAllVenueOfSpecificEvent(int eventId);

        List<Venue> GetSpecificVenueDetails(int eventId, int venueId);

        List<Venue> GetVenueByCityId(int cityId);
    }
}
