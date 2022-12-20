using Event.Business.Interface;
using Event.Business.Models;
using Microsoft.AspNetCore.Mvc;

namespace Event.Client.Controllers
{
    [ApiController]
    [Route("api/v1")]
    public class AuthorController : ControllerBase
    { 
        private readonly ISpeakersRepository speakerRepository;

        private readonly ITalkDetailsRepository talkDetailRepository;
        public AuthorController(ISpeakersRepository repository, ITalkDetailsRepository talkDetailRepository)
        {
            this.speakerRepository = repository;
            this.talkDetailRepository = talkDetailRepository;
        }

        [HttpGet("events/{id}/authors")]
        public List<Speakers> GetAllSpeakerOfSpecificEvent(int id)
        {
            return this.speakerRepository.GetAllSpeakerBySpecificEvent(id);
        }

        [HttpGet("events/{eventId}/authors/{authorId}/talks")]
        public List<TalkDetails> GetTalkConductedBySpeakerForSpecificEvent(int eventId, int authorId)
        {
            return this.speakerRepository.GetTalksConductedBySpeakerOfSpecificEvent(eventId, authorId);
        }

        [HttpGet("events/{eventId}/authors/{authorId}/talks/completed")]
        public List<TalkDetails> GetCompletedTalksBySpecificSpeaker(int eventId, int authorId)
        {
            return this.speakerRepository.GetTalksCompletedBySpecificSpeaker(eventId, authorId);
        }

        //Extra Speaker Method 

        [HttpGet("speaker/{authorId}")]
        public List<Speakers> GetSpeakerById(int authorId)
        {
            return this.speakerRepository.GetSpeakerById(authorId);
        }


        //TalkDetails Method 

        [HttpGet("speaker/{speakerId}/talks")]
        public List<TalkDetails> GetSpeakersTalkDetailsById(int speakerId)
        {
            return this.talkDetailRepository.GetSpeakersTalkDetailsById(speakerId);
        }
    }
}
