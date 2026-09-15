# Session prompt: historical tiers for Zones 4, 5, 7A, 7B into LMN-web

**Open a new session by pasting this file's path and nothing else.** Written 2026-09-15,
after Part 1 (dfix DEFAULT correction) closed. This prompt covers Part 2 only.

## 0. Rules for this session

* Read `CLAUDE.md` at the repo root first. Chat in English, 1 to 3 sentences, no em dash,
  max ~80 words per reply. Findings go in the task doc, not chat.
* Every value put on the site traces to `idf_reader/docs_DONE/docs_LMN_web` (or wherever the
  historical campaign's results land, per its own plan). Nothing is typed by hand, nothing is
  "corrected" in this repo.
* No CDN, no build step. Any css/js change bumps the `?v=N` cache stamp on all fifteen pages
  in the same commit. Commit only when Koral asks.
* Cheap models for scanning and file peeks. Read `js/data.js` and `documentation.html` only
  with targeted offsets, never whole (80,000+ lines and 100+ KB).
* The task doc for this work is
  `docs_implementation/Part2-historicalcode sims/implementation_plan.md`. Append a Progress
  Log row after every step; never reformat earlier rows.

## 1. Gate check, do this before anything else

Open
`idf_reader/docs_ACTIVE/HistoricalCodebaseSims/HistoricalCodebaseSims_Implementation_Plan.md`,
Control list. Stages 0 to 4 must all read Done (Stage 5, Web, is this session's job). If any
of Stages 0-4 is not Done, stop and tell Koral in one line; do not start Stage 5 early.

Also confirm the results files exist: `submit/HIST_NU_all_results.csv` and
`HIST_NU_results.md`, at the location that plan's V-4 section names. As of 2026-09-15 neither
file exists anywhere under `idf_reader`.

Check the current `?v=N` stamp with a grep before assuming anything (it was `?v=31` as of
2026-09-15, after the dfix DEFAULT correction).

## 2. Stage 5, Web (once the gate passes)

Mirror `LMN-tool-main/docs_implementation/DONE/DONE-1983-NECB-Zone6/walkthrough.md` step by
step. The Zone 6 tooling lives in `Templates/1983-Quebec/` (`convert_1983_csv.py`,
`add_vintage_to_neighbourhoods.py`, `insert_data.py`); copy them into
`Templates/1983-National/` and parameterise by arm, do not edit the Zone 6 copies.

Arms and keys:

| Arm in CSV | data.js key | Region key | Popup shows button |
|---|---|---|---|
| `CAN_Z4_1983` | `vintage-1983-z4` | `necb-z4` | yes |
| `CAN_Z5_1983` | `vintage-1983-z5` | `necb-z5` | yes |
| `CAN_Z7A_1983` | `vintage-1983-z7a` | `necb-z7a` | yes |
| `CAN_Z7B_1983` | `vintage-1983-z7b` | `necb-z7b` | yes |

Zone 8 has no arm in this campaign (plan OD-3); `necb-z8` keeps only Standard and HPENV.

Steps, one Progress Log row each:

1. **Data.** Convert `HIST_NU_all_results.csv` per arm with the same EEM ladder map
   (`EEM_J_DEFAULT` to DEFAULT, `..._ENVELOPE` EEM1, `..._ENV_HVAC` EEM2, `..._ENV_HVAC_DHW`
   EEM3, `..._ENV_HVAC_DHW_EEM4` EEM4). Expect 35 NUs x 5 scenarios per arm. Append four
   `ENVELOPE_ENERGY_DATA["vintage-1983-z*"] = {...}` blocks after the Zone 6 block (search
   `ENVELOPE_ENERGY_DATA["vintage-1983-z6"]`), and add the four keys to every neighbourhood's
   `envelope` array in `NEIGHBOURHOODS`. Run the brace and key checks in `Templates/1983-Quebec/`.
2. **Config.** In `js/config.js`, extend the four maps that carry `vintage-1983-z6` (display
   name, self-map, region map, tier text `vintage1983`; line numbers have moved since 2026-09-10,
   grep for `vintage-1983-z6` fresh). Label per plan OD-2: "1983" with sub-label
   "Vintage stock 1975-1995" on all five cards. The definition text must say the four new tiers
   are the Quebec 1983 level carried to each zone by the MNEC 1997 ratio, not that zone's own
   1983 code, and drop "available for Montreal only".
3. **Popup and app.** In `js/app.js`, `getEnvelopeValue` and `parseEnvelopeValue` currently
   hardwire `z6`; make them zone-aware (grep fresh, line numbers have moved). The
   `#tier-btn-1983` visibility test and the selection check must accept the five regions with a
   historical arm.
4. **Downstream.** `js/energy-selection.js` and `js/energy.js` display-name maps, same four keys.
5. **Documentation.** `documentation.html` Section L (search `Section L: 1983`): add the four
   zones, the transfer rule in one paragraph, the provenance sentence, and links to the new
   validation PDFs. Copy `HIST_NU_validation_*.pdf` and `vintage_code_years_and_sources.pdf`
   from the plan's V-3/V-4 locations into `Content/References & Methodology/Reports/`.
6. **Stamp and check.** Bump `?v=N` on all fifteen pages. Open each of the five regions in
   the popup, pick 1983, confirm the card badge, the Layer 2 totals and the Layer 4 EEM ladder
   for one NU per zone against the CSV. Write the 5-zone spot check in the task doc.
7. **Closeout.** Write `walkthrough.md` next to the plan, move
   `docs_implementation/Part2-historicalcode sims/` to
   `docs_implementation/DONE/DONE-default-historicalData/` (the name the original session
   prompt reserved for full closeout), and append one row to the documentation-revisions
   round table if that file is still the living log. Do not commit; tell Koral it is ready.

## 3. What this session does not do

* No new simulations, no value edits by hand, no reopening of the transfer rule (decision of
  2026-08-07, final).
* No Comparison Mode work: it is offline by decision of 2026-09-10 and stays commented out.
* No Zone 8 historical tier.
* No email to CHV from this session; results go to her through the normal round letter.
