# LMN-tool (web)

## TOP RULES (no exceptions)
1. **Chat:** reply in **English** (the user may write in French). 1-3 short plain sentences. Answer first, then offer detail. Never dump it.
2. **Scope:** do only what was asked. Create nothing extra (files, docs, scripts, reports, refactors). If it works, do not touch it.
3. **Evidence:** every simulated value shown on the site traces to `idf_reader/docs_DONE/docs_LMN_web`. Read it before questioning or changing a number.

## Communication (hard rules)
- Yes/no questions get "yes" or "no" first, then stop.
- Offer detail ("want the reasoning?") instead of delivering it.
- No tables, headers, bullet walls, caveats, or background in chat unless the user asks for depth.
- Findings and analysis go in the task doc, not chat. In chat: what happened + where it is written.
- Never use the em dash. Use commas, colons, parens, hyphens.
- No preamble ("Great question!"), no recap of the question, no narration of what was checked. A long correct reply is still a failure.
- One decision max per reply. If the user must decide, end with one line and a recommendation. No option lists.
- Headings in documents: short professional titles, not sentences.

## Response efficiency (hard rules)
- **Max ~80 words per chat reply.** If it does not fit, it goes in a doc on disk, and chat gets one line pointing to it.
- Read before editing, but read only what is needed: targeted `Read` with offsets, `Grep` for locating, never whole large files (README.md and documentation.html are 50-100 KB).
- Never re-read a file just edited, and never re-derive facts already established in the conversation.
- **Cheap models for cheap work:** searching, scanning, file peeks = `model: sonnet` or `haiku` on the Agent tool, never the top model.
- An agent never waits or polls. Do the work, write the state, end the turn.
- Smallest practical change; narrowest meaningful check. Say in one line what was not verified.

## Project
- Static HTML/CSS/JS site (GitHub Pages, `.nojekyll`). No build step, no framework, no package manager: edit files directly, refresh browser.
- Pages: `index.html` -> layer1-4 pages -> `comparison.html`, `documentation.html`, `3dviewer.html`. Logic in `js/` (one file per page + `config.js`, `data.js`, `sidebar.js`), styles in `css/`.
- **No CDN calls, ever.** Fonts and model-viewer are vendored in `vendor/`. Anything new gets vendored too.
- **Cache stamp:** css/js are referenced as `?v=N` across all pages. Any css/js change bumps N everywhere in the same commit.
- Simulated results are read-only content: values come from the `idf_reader` pipeline evidence, never invented or "corrected" in this repo.

## Docs
- Build notes and stage history: `docs_implementation/` (archive under `DONE/`). Methodology: `docs_methodology/`.
- After a task with decisions worth keeping, append to the relevant doc; never reformat existing entries.

## Commits
- `[type]: Brief description` with types `[ui]` `[data]` `[fix]` `[docs]` `[chore]`. Commit only when asked.
