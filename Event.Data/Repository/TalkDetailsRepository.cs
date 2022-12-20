using Event.Business.Interface;
using Event.Business.Models;
using Event.Data.DBContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Event.Data.Repository
{
    public class TalkDetailsRepository : ITalkDetailsRepository
    {
        private readonly EventDbContext dbContext;
        public TalkDetailsRepository(EventDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public List<TalkDetails> GetSpeakersTalkDetailsById(int speakerId)
        {
            return this.dbContext.TalkDetails.Where( x => x.SpeakerId == speakerId).ToList();
        }
    }
}
