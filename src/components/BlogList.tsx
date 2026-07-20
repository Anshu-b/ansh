import type { CollectionEntry } from "astro:content"
import { createEffect, createSignal, For } from "solid-js"
import { cn } from "@lib/utils"

type Props = {
  tags: string[]
  data: CollectionEntry<"blog">[]
}

export default function BlogList({ data, tags }: Props) {
  const [filter, setFilter] = createSignal(new Set<string>())
  const [posts, setPosts] = createSignal<CollectionEntry<"blog">[]>([])

  createEffect(() => {
    setPosts(
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

  function formatDate(d: Date) {
    const pad = (n: number) => String(n).padStart(2, "0")
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
  }

  return (
    <div class="terminal-layout">
      {/* Sidebar */}
      <div class="terminal-sidebar">
        <div class="terminal-sidebar-header">
          <span style="color:#3fb950">// </span>
          <span style="color:#58a6ff;font-family:'JetBrains Mono',monospace;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.08em;">MISSION CLASSIFIER</span>
        </div>
        <ul class="terminal-tag-list">
          <For each={tags}>
            {(tag) => (
              <li>
                <button
                  onClick={() => toggleTag(tag)}
                  class="terminal-tag-btn"
                  data-active={filter().has(tag) ? "true" : "false"}
                >
                  <span class="terminal-checkbox">
                    {filter().has(tag) ? "[✓]" : "[ ]"}
                  </span>
                  <span class="terminal-tag-name">#{tag}</span>
                </button>
              </li>
            )}
          </For>
        </ul>
      </div>

      {/* Post list */}
      <div class="terminal-posts">
        <div class="terminal-count">
          <span style="color:#3fb950">$</span>{" "}
          <span style="color:#8b949e;">
            found {posts().length}/{data.length} entries
          </span>
        </div>
        <ul class="terminal-post-list">
          {posts().map((post) => (
            <li>
              <a
                href={`/ansh/blog/${post.slug}`}
                class="terminal-card"
                aria-label={post.data.title}
              >
                <div class="terminal-card-tags">
                  {post.data.tags.map((tag: string) => (
                    <span class="terminal-inline-tag">#{tag}</span>
                  ))}
                </div>
                <div class="terminal-card-title">{post.data.title}</div>
                {post.data.summary && (
                  <div class="terminal-card-summary">{post.data.summary}</div>
                )}
                <div class="terminal-card-footer">
                  <span class="terminal-card-date">{formatDate(post.data.date)}</span>
                  <span class="terminal-card-arrow">→ open</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .terminal-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 640px) {
          .terminal-layout {
            grid-template-columns: 220px 1fr;
          }
        }

        .terminal-sidebar {
          position: sticky;
          top: 5rem;
          height: fit-content;
        }

        .terminal-sidebar-header {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: #8b949e;
          margin-bottom: 0.75rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(63,185,80,0.2);
        }

        .terminal-tag-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .terminal-tag-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.35rem 0.5rem;
          background: transparent;
          border: none;
          cursor: pointer;
          border-radius: 4px;
          transition: background 0.2s ease;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
        }

        .terminal-tag-btn:hover {
          background: rgba(63,185,80,0.08);
        }

        .terminal-tag-btn[data-active="true"] .terminal-checkbox {
          color: #3fb950;
        }

        .terminal-tag-btn[data-active="true"] .terminal-tag-name {
          color: #3fb950;
        }

        .terminal-checkbox {
          color: #8b949e;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          flex-shrink: 0;
        }

        .terminal-tag-name {
          color: #8b949e;
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .terminal-count {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          margin-bottom: 1rem;
          padding: 0.5rem 0.75rem;
          background: rgba(63,185,80,0.05);
          border-left: 2px solid rgba(63,185,80,0.4);
        }

        .terminal-post-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .terminal-card {
          display: block;
          padding: 1rem 1.25rem;
          background: #161b22;
          border: 1px solid rgba(63,185,80,0.25);
          border-radius: 6px;
          text-decoration: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          cursor: pointer;
        }

        .terminal-card:hover {
          border-color: rgba(63,185,80,0.6);
          box-shadow: 0 0 12px rgba(63,185,80,0.15), 0 0 4px rgba(63,185,80,0.1);
          background: #1a2130;
        }

        .terminal-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 0.5rem;
        }

        .terminal-inline-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: rgba(63,185,80,0.7);
        }

        .terminal-card-title {
          color: #e6edf3;
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 0.35rem;
          line-height: 1.4;
        }

        .terminal-card-summary {
          color: #8b949e;
          font-size: 0.875rem;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 0.75rem;
        }

        .terminal-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .terminal-card-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: #8b949e;
        }

        .terminal-card-arrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: #3fb950;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .terminal-card:hover .terminal-card-arrow {
          opacity: 1;
        }
      `}</style>
    </div>
  )
}
