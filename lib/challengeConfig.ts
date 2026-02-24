/**
 * Central configuration for The Emotional Freedom Challenge.
 * Update these values here when running the next challenge — no hunting through pages.
 */
export const CHALLENGE = {
  dateRange: 'March 16–20, 2026',
  dateRangeShort: 'March 16–20',
  startDate: 'March 16',
  startDateFull: 'Monday, March 16',
  endDateFull: 'Friday, March 20',
  sessionTime: '12:00 Noon Eastern',
  year: '2026',
  // UTC equivalents of 12:00 Noon Eastern (UTC-5) for calendar links
  calendarStartISO: '20260316T170000Z',
  calendarEndISO: '20260316T180000Z',
  // Replay page: day 1 = March 16, so offset = 15 (15 + day = date in March)
  startDayOffset: 15,
  facebookGroupUrl: 'https://www.facebook.com/groups/emotionalfreedomchallengemarch2026',
} as const;
