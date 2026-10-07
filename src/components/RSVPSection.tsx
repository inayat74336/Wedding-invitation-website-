import React, { useState, useEffect } from 'react';
import { Heart, CheckCircle2, MessageCircle } from 'lucide-react';
import { RSVPData } from '../types/wedding';
import { GoldHairlineDivider, CornerOrnament } from './OrnamentalMotifs';
import { Reveal } from './Reveal';

export const RSVPSection: React.FC = () => {
  const [formData, setFormData] = useState<RSVPData>({
    fullName: '',
    guestsCount: 2,
    attending: 'yes',
    eventsAttending: ['haldi', 'mehendi', 'wedding', 'reception'],
    dietaryPreferences: 'vegetarian',
    blessingMessage: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('aarav_ananya_rsvp');
      if (saved) {
        setFormData(JSON.parse(saved));
        setIsSubmitted(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      try {
        localStorage.setItem('aarav_ananya_rsvp', JSON.stringify(formData));
      } catch {
        // ignore
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppRSVP = () => {
    const text = `Namaste! RSVP for Aarav & Ananya's Wedding (15 Dec 2026):\n\nGuest Name: ${formData.fullName || 'Guest'}\nAttendance: ${formData.attending === 'yes' ? 'Joyfully Attending' : 'Regretfully Declining'}\nNumber of Guests: ${formData.guestsCount}\nDietary Preference: ${formData.dietaryPreferences}\nWishes: ${formData.blessingMessage || 'Best wishes to the couple!'}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative py-20 px-4 bg-[#F5EFEB] text-[#24060E] overflow-hidden border-t border-[#C5A059]/25">
      {/* Background Indian jaali texture */}
      <div
        className="absolute inset-0 opacity-8 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#8C6D2B 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-md mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <Reveal variant="fade-up" delay={50}>
            <p className="font-cinzel text-[11px] tracking-[0.32em] text-[#8C6D2B] uppercase font-semibold">
              CHAPTER V · R. S. V. P.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={150}>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#3A0D17] italic font-normal mt-1">
              Kindly Respond
            </h2>
          </Reveal>

          <Reveal variant="fade" delay={250}>
            <GoldHairlineDivider className="my-4" variant="lotus" />
          </Reveal>

          <Reveal variant="fade-up" delay={300}>
            <p className="font-serif-luxury text-sm text-[#7A6455] italic">
              Please grace us with your response by 15 November 2026
            </p>
          </Reveal>
        </div>

        {isSubmitted ? (
          /* Confirmation Success Card */
          <Reveal variant="zoom-in" delay={150}>
            <div className="relative bg-[#FAF7F2] rounded-3xl p-8 sm:p-9 border border-[#C5A059]/40 shadow-lg text-center overflow-hidden">
              <CornerOrnament position="top-left" />
              <CornerOrnament position="top-right" />
              <CornerOrnament position="bottom-left" />
              <CornerOrnament position="bottom-right" />

              <div className="w-14 h-14 rounded-full bg-[#68132A]/10 text-[#68132A] mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-7 h-7 text-[#68132A]" />
              </div>

              <p className="font-cinzel text-[10px] tracking-[0.25em] text-[#8C6D2B] uppercase font-semibold">
                ॥ हार्दिक धन्यवाद ॥
              </p>

              <h3 className="font-cinzel text-2xl font-semibold text-[#4A0E1C] my-2">
                Dhanyawaad!
              </h3>

              <p className="font-serif-luxury text-lg text-[#3D2C22] leading-relaxed mb-4">
                Thank you, <span className="font-medium text-[#4A0E1C]">{formData.fullName}</span>.
                <br />
                {formData.attending === 'yes'
                  ? `We eagerly anticipate celebrating our joyous day with you and your party of ${formData.guestsCount} in Jaipur.`
                  : 'Thank you for letting us know. You will be fondly missed in our ceremonies.'}
              </p>

              <div className="my-5 p-4 rounded-xl bg-[#FFFDF9] border border-[#C5A059]/25 text-left text-xs space-y-1.5 font-sans-clean">
                <p className="text-[#7A6455]">
                  <strong className="text-[#3D2C22] font-semibold">Status:</strong>{' '}
                  {formData.attending === 'yes' ? 'Joyfully Attending' : 'Regretfully Declining'}
                </p>
                <p className="text-[#7A6455]">
                  <strong className="text-[#3D2C22] font-semibold">Party Size:</strong>{' '}
                  {formData.guestsCount} {formData.guestsCount === 1 ? 'Guest' : 'Guests'}
                </p>
                {formData.blessingMessage && (
                  <p className="text-[#7A6455]">
                    <strong className="text-[#3D2C22] font-semibold">Your Note:</strong>{' '}
                    &ldquo;{formData.blessingMessage}&rdquo;
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-cinzel tracking-wider text-[#8C6D2B] hover:text-[#4A0E1C] underline uppercase font-semibold"
                >
                  Modify Your Response
                </button>
              </div>
            </div>
          </Reveal>
        ) : (
          /* Bespoke Stationery RSVP Form with Fade-in-up */
          <Reveal variant="fade-up" delay={250} duration={950}>
            <form
              onSubmit={handleSubmit}
              className="relative bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#C5A059]/35 shadow-lg space-y-5 overflow-hidden"
            >
              <CornerOrnament position="top-left" />
              <CornerOrnament position="top-right" />

              {/* Guest Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block font-cinzel text-xs uppercase tracking-wider text-[#4A0E1C] font-semibold mb-1.5"
                >
                  Guest Name / Family Name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Dr. Raghav & Family"
                  className="w-full px-4 py-3 rounded-xl bg-[#FFFDF9] border border-[#C5A059]/35 text-[#2A1E17] placeholder:text-[#A8988B] font-serif-luxury text-base focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all"
                />
              </div>

              {/* Attendance Choice */}
              <div>
                <label className="block font-cinzel text-xs uppercase tracking-wider text-[#4A0E1C] font-semibold mb-2">
                  Will you join our celebrations? *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: 'yes' })}
                    className={`py-3 px-3 rounded-xl border text-center transition-all ${
                      formData.attending === 'yes'
                        ? 'bg-gradient-to-r from-[#5C0D1E] to-[#7A162B] text-[#FAF7F2] border-[#5C0D1E] font-semibold shadow-sm'
                        : 'bg-[#FFFDF9] text-[#5A4538] border-[#C5A059]/35 hover:border-[#C5A059]'
                    }`}
                  >
                    <span className="font-cinzel text-xs uppercase tracking-wider block">
                      Joyfully Accept
                    </span>
                    <span className="font-serif-luxury text-xs italic opacity-85 block mt-0.5">
                      Will be there!
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: 'no' })}
                    className={`py-3 px-3 rounded-xl border text-center transition-all ${
                      formData.attending === 'no'
                        ? 'bg-gradient-to-r from-[#5C0D1E] to-[#7A162B] text-[#FAF7F2] border-[#5C0D1E] font-semibold shadow-sm'
                        : 'bg-[#FFFDF9] text-[#5A4538] border-[#C5A059]/35 hover:border-[#C5A059]'
                    }`}
                  >
                    <span className="font-cinzel text-xs uppercase tracking-wider block">
                      Regretfully Decline
                    </span>
                    <span className="font-serif-luxury text-xs italic opacity-85 block mt-0.5">
                      Sending love
                    </span>
                  </button>
                </div>
              </div>

              {/* Number of Guests & Dietary */}
              {formData.attending === 'yes' && (
                <>
                  <div>
                    <label
                      htmlFor="guestsCount"
                      className="block font-cinzel text-xs uppercase tracking-wider text-[#4A0E1C] font-semibold mb-1.5"
                    >
                      Number of Guests Attending
                    </label>
                    <select
                      id="guestsCount"
                      value={formData.guestsCount}
                      onChange={(e) => setFormData({ ...formData, guestsCount: Number(e.target.value) })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDF9] border border-[#C5A059]/35 text-[#2A1E17] font-serif-luxury text-base focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all"
                    >
                      <option value={1}>1 Guest (Just Me)</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                      <option value={5}>5 or more (Family)</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="dietaryPreferences"
                      className="block font-cinzel text-xs uppercase tracking-wider text-[#4A0E1C] font-semibold mb-1.5"
                    >
                      Dietary Requirements & Hospitality Preferences
                    </label>
                    <select
                      id="dietaryPreferences"
                      value={formData.dietaryPreferences}
                      onChange={(e) => setFormData({ ...formData, dietaryPreferences: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDF9] border border-[#C5A059]/35 text-[#2A1E17] font-serif-luxury text-base focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all"
                    >
                      <option value="vegetarian">Pure Vegetarian / Royal Rajasthani Spread</option>
                      <option value="jain">Jain Vegetarian (Strict No Onion / No Garlic)</option>
                      <option value="regular">All Delicacies (Vegetarian & Non-Vegetarian)</option>
                      <option value="vegan">Vegan / Conscious Dining</option>
                    </select>
                  </div>
                </>
              )}

              {/* Blessing Note */}
              <div>
                <label
                  htmlFor="blessingMessage"
                  className="block font-cinzel text-xs uppercase tracking-wider text-[#4A0E1C] font-semibold mb-1.5"
                >
                  A Blessing or Note for Aarav & Ananya
                </label>
                <textarea
                  id="blessingMessage"
                  rows={3}
                  value={formData.blessingMessage}
                  onChange={(e) => setFormData({ ...formData, blessingMessage: e.target.value })}
                  placeholder="Share your warm thoughts, memories, or song requests..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FFFDF9] border border-[#C5A059]/35 text-[#2A1E17] placeholder:text-[#A8988B] font-serif-luxury text-base focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all resize-none"
                />
              </div>

              {/* Action Buttons: Submit & WhatsApp Option */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#5C0D1E] via-[#7A162B] to-[#5C0D1E] hover:from-[#7A162B] hover:to-[#8C1B2F] active:scale-[0.98] text-[#FAF7F2] font-cinzel text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase transition-all shadow-md hover:shadow-lg border border-[#C5A059] disabled:opacity-60 cursor-pointer"
                >
                  <Heart className="w-4 h-4 text-[#E7D39F]" />
                  <span>{isSubmitting ? 'CONFIRMING RSVP...' : 'CONFIRM RSVP'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppRSVP}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#FFFDF9] hover:bg-[#FAF7F2] text-[#2E5A36] font-cinzel text-[11px] font-semibold tracking-wider uppercase border border-[#2E5A36]/40 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#2E5A36]" />
                  <span>Or RSVP via WhatsApp</span>
                </button>
              </div>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
};
