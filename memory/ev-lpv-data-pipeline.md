---
name: ev-lpv-data-pipeline
description: How EV/V2G and LPV neighbourhood data is generated, stored, and consumed in the LMN tool
metadata:
  type: project
---

EV/V2G and LPV data lives in TWO places and both must be kept in sync: the source CSVs (`Templates/NUS_EV.csv`, `Templates/NUs_LPV.csv`) AND hand-transcribed JS objects in `js/data.js` (`EV_V2G_DATA` and `LPV_DATA`). **The HTML pages read only `data.js`, never the CSVs** — `layer3_ev_v2g_mobility_output.html`/`js/ev-v2g-breakdown.js` and `layer4_lpv_breakdown.html`/`js/lpv.js`. Neighbourhood is passed via `?neighbourhood=<code>` URL param; EV1 vs EV2 scenario comes from `sessionStorage.mobilitySelections` (EV2 if both `ev` and `v2g_stations` selected).

EV values are fully reproducible from a formula: `Templates/Content_Layer3_Transportation/calculate_ev_scenarios.py` (25 kWh/day per household at the documented params). Only per-NU inputs are household count and residential floor area. I wrote `Templates/Content_Layer3_Transportation/generate_ev_lpv_data.py` which derives households/GFA per NU from building composition (back-solved per-building: detached=1HH/220m², attached=1/180, mid-rise(4-St)=32/3136, high-rise(10-St)=160/23512, scaled for 15/20-St) and regenerates all 35 NUs into both CSVs and the `data.js` blocks (idempotent, splices by comment markers).

LPV has NO generation formula — all NUs share one placeholder (20%/10%/400W/475kWp/608MWh/yr). Commercial/industrial NUs (CC retail, CC-FD, IC data centers, MU-W2) have 0 households → 0 EV demand → "Load Balanced - Net Zero" by design.

On 2026-06-22 the original RC-MR2/MR3/HR2 EV demand values were found inconsistent (26.25 kWh/HH vs formula's 25, and mismatched their own storage-loss); regeneration corrected them (6720→6400, 10080→9600, 16800→16000). See [[user-prefers-sonnet-haiku-for-scans]].

Authoritative external morphology data (NOT in this repo): `C:\Users\o_iseri\Desktop\idf_reader\outputs\outputs_NUs_key_drivers\neighbourhood_morphology.csv` has all 35 NUs with real `site_area_m2` (uniform 21,717 m² ≈ 5.37 acres — the "5-acre standardized parcel"), `total_floor_area_m2`, `footprint_area_m2`, FAR, `n_buildings`, `class_residential` (building counts, which MATCH the NU_RES model) — but NO household/dwelling-unit counts. OPEN ITEM: morphology floor areas differ a lot from NUS_EV.csv's (esp. high-rise: RC-HR2 morph 9,404 vs EV CSV 94,050); adopting them would change only totalFloorArea + per-m² balance, not EV demand. LPV decided to stay uniform at 5 acres. EV + landscape-PV assumptions trace to Hachem-Vermette, Energy Reports 14 (2025) 4492–4507 (ref [24]), not in repo. Publications folder: `C:\Users\o_iseri\Desktop\idf_reader\docs_DONE\docs_publications`.