import type { CollectionEntry } from "astro:content"
import { createEffect, createSignal, For } from "solid-js"
import { cn } from "@lib/utils"

type Props = {
  tags: string[]
  data: CollectionEntry<"projects">[]
}

function deriveStatus(entry: CollectionEntry<"projects">): "DEPLOYED" | "IN PROGRESS" | "PROTOTYPE" {
  const data = entry.data as any
  if (data.repoUrl || data.demoUrl) return "DEPLOYED"
  const now = new Date()
  const sixMonthsAgo = new Date(now.getTime() - 6 * 30 * 24 * 60 * 60 * 1000)
  if (entry.data.date && entry.data.date > sixMonthsAgo) return "IN PROGRESS"
  return "PROTOTYPE"
}

function statusColor(status: string): string {
  if (status === "DEPLOYED") return "#3fb950"
  if (status === "IN PROGRESS") return "#f2cc60"
  return "#8b949e"
}

export default function ProjectList({ data, tags }: Props) {
  const [filter, setFilter] = createSignal(new Set<string>())
  const [projects, setProjects] = createSignal<CollectionEntry<"projects">[]>([])

  createEffect(() => {
    setProjects(
      data.filter((entry) =>
        Array.from(filter()).every((value) =>
          entry.data.tags.some(
            (tag: string) => tag.toLowerCase() === String(value).toLowerCase()
          )
        )
      )
    )
  })

  function toggleTag(tag: string) {
    setFilter((prev) =>
      new Set(
        prev.has(tag) ? [...prev].filter((t) => t !== tag) : [...prev, tag]
      )
    )
  }

  return (
    <div class="pl-layout">
      {/* Sidebar */}
      <div class="pl-sidebar">
        <div class="pl-sidebar-header">
          <span style="color:#3fb950">// </span>
          <span>filter by tag</span>
        </div>
        <ul class="pl-tag-list">
          <For each={tags}>
            {(tag) => (
              <li>
                <button
                  onClick={() => toggleTag(tag)}
                  class="pl-tag-btn"
                  data-active={filter().has(tag) ? "true" : "false"}
                >
                  <span class="pl-checkbox">
                    {filter().has(tag) ? "[✓]" : "[ ]"}
                  </span>
                  <span class="pl-tag-name">#{tag}</span>
                </button>
              </li>
            )}
          </For>
        </ul>
      </div>

      {/* Project list */}
      <div class="pl-projects">
        <div class="pl-count">
          <span style="color:#3fb950">$</span>{" "}
          <span>
            found {projects().length}/{data.length} projects
          </span>
        </div>
        <ul class="pl-project-list">
          {projects().map((project) => {
            const status = deriveStatus(project)
            const sColor = statusColor(status)
            return (
              <li>
                <a
                  href={`/ansh/projects/${project.slug}`}
                  class="pl-card"
                  aria-label={project.data.title}
                >
                  <div class="pl-card-header">
                    <span class="pl-status-dot" style={`color:${sColor}`}>◉</span>
                    <span class="pl-card-title">{project.data.title}</span>
                  </div>
                  <div class="pl-card-divider" />
                  {project.data.summary && (
                    <div class="pl-card-summary">{project.data.summary}</div>
                  )}
                  <div class="pl-card-footer">
                    <div class="pl-card-tags">
                      {project.data.tags.map((tag: string) => (
                        <span class="pl-inline-tag">#{tag}</span>
                      ))}
                    </div>
                    <div class="pl-status" style={`color:${sColor}`}>
                      {status} →
                    </div>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <style>{`
        .pl-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 640px) {
          .pl-layout {
            grid-template-columns: 200px 1fr;
          }
        }

        .pl-sidebar {
          position: sticky;
          top: 110px;
          height: fit-content;
        }

        .pl-sidebar-header {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          color: #8b949e;
          margin-bottom: 0.75rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(63,185,80,0.2);
          letter-spacing: 0.04em;
        }

        .pl-tag-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .pl-tag-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.3rem 0.5rem;
          background: transparent;
          border: none;
          cursor: pointer;
          border-radius: 3px;
          transition: background 0.15s ease;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.76rem;
        }

        .pl-tag-btn:hover {
          background: rgba(63,185,80,0.07);
        }

        .pl-tag-btn[data-active="true"] .pl-checkbox {
          color: #3fb950;
        }

        .pl-tag-btn[data-active="true"] .pl-tag-name {
          color: #3fb950;
        }

        .pl-checkbox {
          color: #8b949e;
          font-size: 0.72rem;
          flex-shrink: 0;
        }

        .pl-tag-name {
          color: #8b949e;
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .pl-count {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.76rem;
          color: #8b949e;
          margin-bottom: 1rem;
          padding: 0.4rem 0.7rem;
          background: rgba(63,185,80,0.04);
          border-left: 2px solid rgba(63,185,80,0.35);
        }

        .pl-project-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .pl-card {
          display: block;
          padding: 1rem 1.15rem;
          background: #161b22;
          border: 1px solid rgba(63,185,80,0.18);
          border-radius: 4px;
          text-decoration: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .pl-card:hover {
          border-color: rgba(63,185,80,0.55);
          box-shadow: 0 0 12px rgba(63,185,80,0.1);
        }

        .pl-card-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.4rem;
        }

        .pl-status-dot {
          font-size: 0.75rem;
          flex-shrink: 0;
        }

        .pl-card-title {
          color: #e6edf3;
          font-size: 0.95rem;
          font-weight: 500;
          line-height: 1.3;
        }

        .pl-card-divider {
          height: 1px;
          background: #21262d;
          margin: 0.4rem 0;
        }

        .pl-card-summary {
          color: rgba(201,209,217,0.65);
          font-size: 0.85rem;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 0.65rem;
        }

        .pl-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .pl-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .pl-inline-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.66rem;
          color: rgba(63,185,80,0.65);
          letter-spacing: 0.03em;
        }

        .pl-status {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.66rem;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }
      `}</style>
    </div>
  )
}
