export type Project = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string;
  title: string;
  /**
   * Project period for display and sorting.
   * Use "MM.YYYY" or "YYYY" format. Omit `end` for ongoing projects;
   * set `end` equal to `start` to show a single date. Omit the whole
   * `period` when no date is known.
   */
  period?: {
    /** Start date (e.g., "05.2025"). */
    start: string;
    /** End date; leave undefined for "Present". */
    end?: string;
  };
  /** Public URL (site, repository, demo, or video). Omit when none exists. */
  link?: string;
  /** Tags/technologies for chips or filtering. */
  skills: string[];
  /** Optional rich description; Markdown and line breaks supported. */
  description?: string;
  /** Screenshot of the live project (path under /public, 1200x592). */
  image?: string;
  /** Logo image URL (absolute or path under /public). */
  logo?: string;
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean;
};
