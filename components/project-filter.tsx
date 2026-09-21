"use client";
import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { projects, type ProjectCategory } from "@/lib/content";
type Filter = "Alle" | ProjectCategory;
const filters: Filter[] = ["Alle", "Photovoltaik", "Speicher", "Wallbox"];
export function ProjectFilter() { const [active, setActive] = useState<Filter>("Alle"); const visible = active === "Alle" ? projects : projects.filter((project) => project.category === active); return <><div className="filter-bar" aria-label="Projekte filtern">{filters.map((filter) => <button className="filter-button" key={filter} type="button" aria-pressed={active === filter} onClick={() => setActive(filter)}>{filter}</button>)}</div><div className="project-grid all-projects" aria-live="polite">{visible.map((project) => <ProjectCard key={`${project.location}-${project.title}`} project={project} />)}</div></>; }
