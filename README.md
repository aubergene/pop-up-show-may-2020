# Can everyone see my screen?

Goldsmiths Pop Up Show May 2020

## Google Docs

The data is stored in two Google docs

- [Schedule in tidy data format](https://docs.google.com/spreadsheets/d/1PLsk6MgvP7PwRUIpnyXuSI-HxLkBr6F9IXe2yyzqILo/edit#gid=0)
- [Google form of final submissions with social links](https://docs.google.com/spreadsheets/d/1MhbU4lBGUuNYMPz77Qdo86Rlj-9H-kMq6R8a-a-I9Vc/edit)

## How to run a build

- Download the sheets above and raw in to `raw`, overwriting the existing data
- Run `npm run process` to clean the data, it will output a report on any errors in to `public/issues.txt`
- Run `npm run build`, this builds the site in the `docs` folder
- Commit the output and push to Github

## Other stuff

- [Original schedule - above schedule was adapted from this](https://docs.google.com/spreadsheets/d/1-e2Q15Gr9izaPOxXPwiRYBRzFk7TuVAJ8zNdh4h5P_E/edit?ts=5ec84caf#gid=0)
