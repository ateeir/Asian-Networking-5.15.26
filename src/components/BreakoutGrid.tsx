import React from 'react';
import { BrutalCard } from './BrutalCard';
import { Users, Globe, Smile, Zap, MapPin, Heart } from 'lucide-react';
import { motion } from 'motion/react';

const BREAKOUT_THEMES = [
  {
    id: 'signin',
    title: 'Signing In',
    icon: '✍️',
    description: 'Welcome! Grab your name tag and start chatting.',
    details: 'The official kickoff. Use this time to meet the organizers and find your orientation.',
    groups: ['First Event', 'Returning', 'Referral', 'Social Media'],
    subtopics: ['Name Tags', 'Agenda Check', 'Event Vibe'],
    color: 'bg-brand-yellow',
    tag: '6:00 PM START'
  },
  {
    id: 'scavenger',
    title: 'Scavenger Hunt',
    icon: '🔍',
    description: 'Match by name tag color or marker color!',
    details: 'Colors are your guide. Find a match for your name tag color or the marker you used. Great way to meet everyone!',
    groups: ['Red Match', 'Blue Match', 'Green Match', 'Yellow Match'],
    subtopics: ['Color Theory', 'Quick Intros', 'Seek & Find'],
    color: 'bg-brand-orange text-black',
    tag: '6:30 PM HUNT'
  },
  {
    id: 'interests',
    title: 'Foodies / Travelers',
    icon: '✈️',
    description: 'Favorite hobby or interest breakout groups.',
    details: 'Whether you live for the next meal or the next flight, find your adventure partners here.',
    groups: ['Global Foodies', 'Backpackers', 'Luxury Travel', 'Home Cooks'],
    subtopics: ['Secret NYC Eats', 'Solo Travel', 'Street Food'],
    color: 'bg-brand-mint',
    tag: '6:45 PM KICKOFF'
  },
  {
    id: 'years',
    title: 'Career Stages',
    icon: '⏳',
    description: 'Under 5, 6-10, or 10+ years professional groups.',
    details: 'Find your cohort or seek mentorship from a different experience bracket.',
    groups: ['Under 5 Years', '6-10 Years', '10+ Veterans', 'Peer Match'],
    subtopics: ['Salary Negos', 'Mentorship', 'Growth Tips'],
    color: 'bg-brand-blue',
    tag: '7:00 PM CAREER'
  },
  {
    id: 'industry',
    title: 'Industry Focus',
    icon: '💼',
    description: 'Marketing, Tech, Creative, or Finance?',
    details: 'Deep dive into your specific field. Share insights, trends, and cross-industry collaborations.',
    groups: ['Tech & Eng', 'Marketing & PR', 'Creative Arts', 'Finance & Accounting'],
    subtopics: ['AI Impact', 'Creator Economy', 'Market Trends'],
    color: 'bg-brand-lime',
    tag: '7:15 PM DEPTH'
  },
  {
    id: 'grouppic',
    title: 'Group Photo',
    icon: '📸',
    description: "Gather around and let's take a picture! Tag us @asian.networking.nyc",
    details: 'Time to capture the memory of 5/15! Please head to the main backdrop for our group shot. Remember to tag us in your stories for a repost!',
    groups: ['Group Selfie', 'Silly Poses', 'Main Stage', 'Candid Zone'],
    subtopics: ['Smile!', 'Main Stage', 'Legacy shot'],
    color: 'bg-brand-coral',
    tag: '7:30 PM SNAP'
  },
  {
    id: 'emoji',
    title: 'Emoji Match',
    icon: '🦄',
    description: "Find someone who sent the same last emoji!",
    details: 'Visual communication challenge. Also a great time to give feedback on the night.',
    groups: ['Emoji Match', 'Event Feedback', 'Sticker Share', 'Visual Story'],
    subtopics: ['Digital Tone', 'Emoji Stories', 'Feedback Hub'],
    color: 'bg-white',
    tag: '7:45 PM VIBES'
  },
  {
    id: 'heritage',
    title: 'Asian Heritage',
    icon: '🌏',
    description: 'Heritage and language breakout groups.',
    details: 'A space to share experiences and connect through shared heritage and languages.',
    groups: ['Chinese', 'Korean', 'Filipino', 'Indian', 'Vietnamese', 'Taiwanese', 'Japanese', 'Cantonese'],
    subtopics: ['Dual Identity', 'Language Flow', 'Heritage Pride'],
    color: 'bg-brand-pink',
    tag: '8:00 PM ROOTS'
  },
  {
    id: 'mbti',
    title: 'MBTI Hub',
    icon: '🧠',
    description: 'Are you an introvert or extrovert? Match your type.',
    details: 'Discover how your MBTI personality type influences your professional networking style.',
    groups: ['ENFJ', 'ENFP', 'ENTJ', 'ESFP', 'INFJ', 'INFP', 'INTJ'],
    subtopics: ['Social Battery', 'First Impressions', 'Trait Match'],
    color: 'bg-brand-orange text-black',
    tag: '8:15 PM PERSONALITY'
  },
  {
    id: 'commuter',
    title: 'Commuter Hub',
    icon: '📍',
    description: 'Queens, Brooklyn, NJ, or office locations.',
    details: 'Find locals from your neighborhood or coworkers from your office hub.',
    groups: ['Queens', 'Brooklyn', 'NJ', 'LI', 'SI', 'JC', 'Manhattan'],
    subtopics: ['Commute Hacks', 'Office Life', 'Local Gems'],
    color: 'bg-brand-mint text-black',
    tag: '8:30 PM LOCAL'
  },
  {
    id: 'wrapup',
    title: 'Wrap Up',
    icon: '🏁',
    description: 'Keep the conversations going and join our LinkedIn group!',
    details: 'The official session ends, but the networking continues. Exchange contacts and join our LinkedIn community!',
    groups: ['LinkedIn Group', 'Contact Swap', 'Final Drinks', 'Post-Event Hub'],
    subtopics: ['Community Hub', 'Next Meetup', 'Feedback'],
    color: 'bg-brand-yellow text-black',
    tag: '8:45 PM FINAL'
  },
  {
    id: 'weekendclub',
    title: 'The Weekend Club',
    icon: '✨',
    description: 'Continue the conversation! meet up in the future.',
    details: 'The conversation doesn\'t have to end here. The Weekend Club app is launching in New York on 5/30. Join to keep meeting awesome people!',
    groups: ['NYC Launch 5/30', 'Join the Club', 'Future Meetups', 'Weekend Vibes'],
    subtopics: ['May 30 Launch', 'Member Access', 'Community'],
    color: 'bg-white text-black',
    tag: '5/30 APP LAUNCH'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function BreakoutGrid() {
  const [expandedTheme, setExpandedTheme] = React.useState<string | null>(null);
  const [isHostMode, setIsHostMode] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(() => {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
  });

  // Update time every minute
  React.useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.getHours() * 60 + now.getMinutes());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const getSessionMinutes = (tag: string) => {
    const timeMatch = tag.match(/(\d+:\d+\s+[AP]M)/i);
    return timeMatch ? parseTimeToMinutes(timeMatch[0]) : 0;
  };

  return (
    <div className="flex flex-col gap-8" id="breakout-grid-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-display text-5xl font-black tracking-tighter uppercase italic text-brand-orange">Breakout Zones</h2>
          <div className="flex items-center gap-3">
            <p className="text-black/60 font-black text-sm tracking-wide uppercase">
              Interact with the community hubs below
            </p>
            <div 
              onClick={() => setIsHostMode(prev => !prev)}
              className={`flex items-center gap-2 px-3 py-1 ${isHostMode ? 'bg-brand-orange text-black' : 'bg-black text-white'} rounded-full text-[10px] font-black uppercase brutal-shadow-sm cursor-pointer hover:scale-105 transition-transform active:scale-95`}
              title="Toggle Host Mode"
            >
              <span className={`w-2 h-2 ${isHostMode ? 'bg-black' : 'bg-green-400'} rounded-full animate-pulse`} />
              {isHostMode ? 'Host Override Active' : 'Live Sync Active'}
            </div>
          </div>
        </div>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10"
      >
        {BREAKOUT_THEMES.map((theme) => {
          const isExpanded = expandedTheme === theme.id;
          const sessionMinutes = getSessionMinutes(theme.tag);
          
          // Force reveal logic for the demo/event
          // If the current time is before the FIRST event (6:00 PM / 1080 mins), we show them all dimmed but revealed
          // Otherwise, we hide them until their time
          const eventStartTime = 1080; // 6:00 PM
          const isStarted = currentTime >= sessionMinutes;
          const isLocked = isHostMode ? false : (currentTime < eventStartTime ? false : !isStarted);
          const isCurrent = isStarted && (currentTime < (sessionMinutes + 15)); // Active for the first 15 mins
          
          return (
            <motion.div variants={item} key={theme.id} className="h-full relative group">
              <BrutalCard 
                className={`${theme.color} h-full !p-0 relative transition-all duration-500 ${isLocked ? 'grayscale opacity-40 blur-[2px]' : ''} ${isCurrent ? 'ring-8 ring-black ring-offset-4' : ''}`} 
                id={`theme-card-${theme.id}`}
              >
                <div className="p-8 flex flex-col h-full min-h-[520px]">
                  {isCurrent && (
                    <div className="absolute -top-4 -right-4 z-20 bg-black text-white px-6 py-2 border-4 border-black font-black text-xs uppercase tracking-widest rotate-6 brutal-shadow-sm">
                      CURRENTLY LIVE
                    </div>
                  )}

                  <div className={`inline-block ${isCurrent ? 'bg-black text-white animate-bounce' : 'bg-brand-orange text-black'} px-4 py-2 border-4 border-black font-black text-xs uppercase tracking-[0.2em] self-start mb-6 -rotate-1 brutal-shadow-sm rounded-xl`}>
                    {theme.tag}
                  </div>

                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-white border-4 border-black rounded-full flex items-center justify-center brutal-shadow text-3xl">
                      {isLocked ? '🔒' : theme.icon}
                    </div>
                    {!isLocked && (
                      <button 
                        onClick={() => setExpandedTheme(isExpanded ? null : theme.id)}
                        className="bg-black text-white p-2 rounded-xl border-4 border-black hover:bg-white hover:text-black transition-all brutal-shadow"
                      >
                        {isExpanded ? 'CLOSE' : 'INFO'}
                      </button>
                    )}
                  </div>
                  
                  <motion.h3 
                    className="text-3xl font-black uppercase mb-2 tracking-tight origin-left"
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {isLocked ? '???' : theme.title}
                  </motion.h3>
                  
                  <motion.div
                    animate={{ opacity: 1 }}
                    className="flex-1 flex flex-col"
                  >
                    {isLocked ? (
                      <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
                        <p className="font-black uppercase text-sm opacity-50 mb-2">Unlocks at</p>
                        <p className="text-4xl font-black italic">{theme.tag.split(' ')[0]} {theme.tag.split(' ')[1]}</p>
                      </div>
                    ) : (
                      <>
                        {isExpanded ? (
                          <div className="flex flex-col gap-6">
                            <p className="text-lg font-bold leading-tight bg-white/40 p-4 border-4 border-black rounded-2xl italic">
                              "{theme.details}"
                            </p>
                            <div>
                              <p className="text-[10px] font-black uppercase mb-2 opacity-50 tracking-widest">Pop-up Sub-topics:</p>
                              <div className="flex flex-wrap gap-2">
                                {theme.subtopics.map((s, i) => (
                                  <span key={i} className="bg-white border-2 border-black px-3 py-1 rounded-full text-[10px] font-black uppercase">
                                    {s}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <>
                            <p className="text-lg font-bold leading-tight opacity-70 mb-6">{theme.description}</p>
                            
                            <div className="mt-auto flex flex-col gap-6">
                              {theme.groups.length > 0 ? (
                                <div className="grid grid-cols-2 gap-2">
                                  {theme.groups.map((group, i) => (
                                    <div 
                                      key={i} 
                                      className="px-1 py-2 text-[9px] font-black text-center border-2 border-black bg-white/40 hover:bg-black hover:text-white transition-all cursor-pointer rounded-xl uppercase tracking-tighter leading-[1] min-h-[40px] flex items-center justify-center"
                                      title={group}
                                    >
                                      <span>{group}</span>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <div className="flex items-center justify-center py-6 border-4 border-black border-dashed rounded-2xl bg-white/20">
                                  <p className="text-[10px] font-black uppercase opacity-60">No breakout groups</p>
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </motion.div>
                </div>
              </BrutalCard>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

// Helper to parse time string
function parseTimeToMinutes(timeStr: string) {
  const match = timeStr.match(/(\d+):(\d+)\s+(AM|PM)/i);
  if (!match) return 0;
  let h = parseInt(match[1]);
  const m = parseInt(match[2]);
  const period = match[3].toUpperCase();
  if (period === 'PM' && h < 12) h += 12;
  if (period === 'AM' && h === 12) h = 0;
  return h * 60 + m;
}
