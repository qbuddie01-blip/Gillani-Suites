import React, { useState } from 'react';
import { X, Building2, Calendar, Users, Sparkles, CheckCircle2, ArrowRight, Phone, Mail } from 'lucide-react';
import { EVENT_HALLS, HOTEL_INFO } from '../data/hotelData';

interface EventInquiryModalProps {
  initialHallId?: string;
  onClose: () => void;
}

export const EventInquiryModal: React.FC<EventInquiryModalProps> = ({
  initialHallId,
  onClose
}) => {
  const [selectedHall, setSelectedHall] = useState(initialHallId || 'ashabi-hall');
  const [eventType, setEventType] = useState('Royal Wedding Reception');
  const [eventDate, setEventDate] = useState('');
  const [guestsCount, setGuestsCount] = useState('500');
  const [organizerName, setOrganizerName] = useState('');
  const [organization, setOrganization] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cateringRequired, setCateringRequired] = useState(true);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const hallObj = EVENT_HALLS.find((h) => h.id === selectedHall) || EVENT_HALLS[0];

  const handleWhatsAppInquiry = () => {
    const msg = `*GALLANI SUITES — EVENT / BANQUET PROPOSAL REQUEST*
--------------------------------------------
*Venue:* ${hallObj.title} (Capacity: ${hallObj.capacity} Guests)
*Event Type:* ${eventType}
*Preferred Date:* ${eventDate || 'To be scheduled'}
*Estimated Guests:* ${guestsCount}
*In-House Catering:* ${cateringRequired ? 'Yes' : 'No'}

*Organizer Details:*
*Name:* ${organizerName}
*Organization:* ${organization || 'Private'}
*Phone:* ${phone}
*Email:* ${email}
*Notes/Requirements:* ${additionalNotes || 'Standard setup'}

Please provide quotation, availability, and banquet package details.`;

    const url = `https://wa.me/2347080002022?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setIsSuccess(true);
  };

  const handleEmailInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Event Inquiry: ${eventType} at ${hallObj.title}`;
    const body = `Dear Gallani Suites Events Management,

I would like to request a proposal for an upcoming event:

Venue: ${hallObj.title}
Event Type: ${eventType}
Target Date: ${eventDate}
Estimated Guests: ${guestsCount}
In-House Catering Required: ${cateringRequired ? 'Yes' : 'No'}

Organizer Name: ${organizerName}
Organization: ${organization}
Phone: ${phone}
Email: ${email}
Additional Requirements: ${additionalNotes}

Looking forward to your swift quotation and hall viewing appointment.

Best regards,
${organizerName}`;

    window.location.href = `mailto:${HOTEL_INFO.emailEvents}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-midnight-950/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fade-in-slow">
      <div className="relative w-full max-w-3xl bg-ivory-100 border border-gold-500/30 rounded-sm shadow-2xl overflow-hidden my-6 text-midnight-950 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-midnight-950 text-ivory-100 px-6 py-4 border-b border-gold-500/30 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[10px] uppercase tracking-luxury text-gold-400 font-serif block">
              Banquets &amp; Conventions
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-light text-gold-gradient">
              REQUEST EVENT PROPOSAL
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-ivory-300 hover:text-gold-400 rounded-sm hover:bg-midnight-900 transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        {isSuccess ? (
          <div className="p-8 sm:p-12 text-center space-y-6 flex-1 overflow-y-auto">
            <div className="w-16 h-16 bg-gold-500/20 text-gold-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} />
            </div>
            <div className="space-y-2">
              <h4 className="font-serif text-2xl sm:text-3xl text-midnight-900">
                Proposal Request Received
              </h4>
              <p className="text-xs sm:text-sm text-taupe-700 font-light max-w-md mx-auto">
                Our Banquet &amp; Events Director will contact you within 24 hours to review dates, floor layout options, and custom catering menus.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-3 bg-midnight-950 text-gold-400 hover:bg-gold-500 hover:text-midnight-950 font-bold text-xs tracking-luxury uppercase rounded-sm"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
            <form onSubmit={handleEmailInquiry} className="space-y-6">
              {/* Venue Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-taupe-700 block mb-1 font-medium">
                    Preferred Event Hall
                  </label>
                  <select
                    value={selectedHall}
                    onChange={(e) => setSelectedHall(e.target.value)}
                    className="w-full bg-white border border-taupe-400 text-midnight-950 p-2.5 rounded-sm font-medium"
                  >
                    {EVENT_HALLS.map((h) => (
                      <option key={h.id} value={h.id}>
                        {h.title} (Up to {h.capacity} Guests)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-taupe-700 block mb-1 font-medium">
                    Event Classification
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-white border border-taupe-400 text-midnight-950 p-2.5 rounded-sm"
                  >
                    <option value="Royal Wedding Reception">Royal Wedding Reception</option>
                    <option value="International Conference / Summit">International Conference / Summit</option>
                    <option value="State Banquet / Gala Dinner">State Banquet / Gala Dinner</option>
                    <option value="Corporate Annual General Meeting">Corporate AGM / Seminar</option>
                    <option value="Milestone Birthday Celebration">Milestone Birthday / Anniversary</option>
                    <option value="Exhibition / Product Launch">Exhibition / Product Launch</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-taupe-700 block mb-1 font-medium">
                    Target Date
                  </label>
                  <input
                    type="date"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-white border border-taupe-400 text-midnight-950 p-2.5 rounded-sm"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-taupe-700 block mb-1 font-medium">
                    Estimated Guest Attendance
                  </label>
                  <input
                    type="number"
                    required
                    min="20"
                    max="1500"
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(e.target.value)}
                    className="w-full bg-white border border-taupe-400 text-midnight-950 p-2.5 rounded-sm"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-3 border-t border-taupe-300">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-taupe-700 block mb-1 font-medium">
                    Organizer / Host Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mrs. Folashade Adeleke"
                    value={organizerName}
                    onChange={(e) => setOrganizerName(e.target.value)}
                    className="w-full bg-white border border-taupe-400 text-midnight-950 p-2.5 rounded-sm"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-taupe-700 block mb-1 font-medium">
                    Company / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. West African Bankers Guild"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full bg-white border border-taupe-400 text-midnight-950 p-2.5 rounded-sm"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-taupe-700 block mb-1 font-medium">
                    Direct Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +234 802 345 6789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-taupe-400 text-midnight-950 p-2.5 rounded-sm"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-taupe-700 block mb-1 font-medium">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="events@yourcompany.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-taupe-400 text-midnight-950 p-2.5 rounded-sm"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="text-[11px] uppercase tracking-wider text-taupe-700 block mb-1 font-medium">
                  Event Specifics / Audiovisual / Catering Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Stage lighting required, LED screen display, 3-course buffet lunch for 600 persons..."
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  className="w-full bg-white border border-taupe-400 text-midnight-950 p-2.5 rounded-sm text-xs"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="w-full sm:w-1/2 py-3 bg-emerald-700 hover:bg-emerald-600 text-ivory-100 font-bold text-xs tracking-luxury uppercase rounded-sm flex items-center justify-center gap-2"
                >
                  <Phone size={14} className="text-gold-300" />
                  <span>Send via WhatsApp (+234 708 000 2022)</span>
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-1/2 py-3 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-midnight-950 font-bold text-xs tracking-luxury uppercase rounded-sm shadow-gold-soft flex items-center justify-center gap-2"
                >
                  <Mail size={14} />
                  <span>Submit Email Proposal Request</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
