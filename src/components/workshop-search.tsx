"use client";

import { useMemo, useState } from "react";
import { InfoCard } from "@/components/info-card";
import type { Workshop } from "@/lib/workshops";

type WorkshopSearchProps = {
  workshops: Workshop[];
};

type WorkshopFilter = "all" | "past" | "upcoming";

const filters: { id: WorkshopFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "past", label: "Past" },
  { id: "upcoming", label: "Upcoming" },
];

function isPastWorkshop(tag?: string) {
  return tag === "Past";
}

function isUpcomingWorkshop(tag?: string) {
  return tag === "Upcoming" || tag === "Coming Soon";
}

function matchesFilter(workshop: Workshop, filter: WorkshopFilter) {
  if (filter === "past") return isPastWorkshop(workshop.tag);
  if (filter === "upcoming") return isUpcomingWorkshop(workshop.tag);
  return true;
}

function matchesQuery(workshop: Workshop, query: string) {
  const haystack = [
    workshop.title,
    workshop.description,
    workshop.descriptionLong,
    workshop.duration,
    workshop.schedule,
    workshop.meta,
    workshop.tag,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="2" />
      <path d="M13 13L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

export function WorkshopSearch({ workshops }: WorkshopSearchProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<WorkshopFilter>("all");

  const filtered = useMemo(() => {
    const trimmed = query.trim().toLowerCase();

    return workshops.filter((workshop) => {
      if (!matchesFilter(workshop, filter)) return false;
      if (!trimmed) return true;
      return matchesQuery(workshop, trimmed);
    });
  }, [query, filter, workshops]);

  const isSearching = query.trim().length > 0;
  const isFiltering = filter !== "all";

  return (
    <div className="space-y-6">
      <div className="club-search-toolbar">
        <div className="club-search-bar">
          <SearchIcon />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search workshops..."
            className="club-search-input"
            aria-label="Search workshops"
          />
          {isSearching ? (
            <button
              type="button"
              className="club-search-clear"
              onClick={() => setQuery("")}
              aria-label="Clear search"
            >
              Clear
            </button>
          ) : null}
        </div>

        <div className="club-filter-group" role="group" aria-label="Filter workshops">
          {filters.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className={`club-filter-btn${filter === id ? " club-filter-btn-active" : ""}`}
              aria-pressed={filter === id}
              onClick={() => setFilter(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <p
        className="font-mono text-xs uppercase tracking-[0.12em]"
        style={{ color: "var(--club-muted-text)" }}
      >
        {filtered.length} of {workshops.length} workshops
        {isFiltering ? ` · ${filter}` : ""}
        {isSearching ? " · filtered by search" : ""}
      </p>

      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((workshop) => (
            <InfoCard key={workshop.title} {...workshop} />
          ))}
        </div>
      ) : (
        <div className="club-card">
          <p className="text-sm" style={{ color: "var(--club-muted-text)" }}>
            {isSearching
              ? `No workshops match "${query}". Try a different keyword.`
              : filter === "upcoming"
                ? "No upcoming workshops right now. Check back soon."
                : "No workshops found for this filter."}
          </p>
        </div>
      )}
    </div>
  );
}
