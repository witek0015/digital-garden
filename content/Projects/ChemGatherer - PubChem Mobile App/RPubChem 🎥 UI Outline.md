---
Project: RPubChem
Date: 2025-03-27
Tags: [RPubChem]
---
- The app will have 3 main panes:
	1. **Favourites** - where all the search results that were added to favourites are. 
	2. **Search** - search engine with advanced queries
	3. **Results** - dataframe with results of current search
- Additionally, there will be 2 additional side panes:
	1. **Pages** (on the left) - folders with saved favourites from different search queries (eg. Medicine, Solvents)
	2. **Settings** (on the right) - theme, color, deleting all data.
- **Search pane**
	- single choice checkbox with method of searching (SMILES, name, CID, AID, etc.)
	- search bar - the meat of this pane
	- multiple choice checkbox with required properties, with the first checkbox being [ ] Check All
	- search button - colored gray until above fields are completed, then changes color
- **Results**
	- above the results, there will be a pop-up menu that allows to change property filters, allowing to show less content (for users that want only to see eg. molecular mass)
	- a table with search results, and requested properties. Additional column with a button - add to favourites. Indicator if something is in favourites already - maybe a button that allows to delete something instead of add.
	- add to favourites button opens a pop up which requires to choose a folder or create a new one.
	- on the upper right - export button which allows to save the dataframe to csv
- **Favourites**
	- Title of dataframe - to know which page is user on (eg. Medicine, Solvents)
	- A dataframe updated whne something is added to favourites
	- Same features as with **Results** tab - pop-up filter and export
	- Instead of add to favourites column, a delete from favourites column
- **Pages pane**
	- functions as 'folders' for favourites dataframes 
	- list of pages, each with a rename button, delete button and a button that allows swiping up and down to change order
	- clicking on a page changes the favourites dataframe into respective dataframe. 
- **Settings pane**
	- self explanatory - settings of theme (ios/android) and color (dark/light)
