# Data

## `durham_weather.csv`

Monthly weather at Durham University Observatory, January 1900 to
December 2025: 1512 rows (126 years × 12 months), no missing values.
Used by the *Working with data* tutorial.

| Column | Type | Meaning |
|--------|------|---------|
| `year` | integer | 1900–2025 |
| `month` | integer | 1–12 |
| `tmax_c` | double | mean daily maximum temperature (°C) |
| `tmin_c` | double | mean daily minimum temperature (°C) |
| `frost_days` | integer | days with an air frost |
| `rain_mm` | double | total rainfall (mm) |

**Source:** Met Office historic station data,
<https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/durhamdata.txt>,
downloaded 2026-09-28. Contains public sector information licensed
under the [Open Government Licence
v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).
© Crown copyright.

**Preparation:**

- Kept 1900–2025. Earlier years have a month with no temperature
  record (December 1883), and 2026 values are provisional.
- Dropped the `sun` (sunshine hours) column, which is missing for 435
  months, including every month since 2000.
- Removed the source's flags: `*` (value estimated) and `#` (sunshine
  from an automatic sensor). Estimated values are kept as numbers.
- Renamed columns: `yyyy` → `year`, `mm` → `month`, `tmax` →
  `tmax_c`, `tmin` → `tmin_c`, `af` → `frost_days`, `rain` → `rain_mm`.
