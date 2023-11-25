---
title: 7. Contributing
sidebar_position: 8
---

Our legal documents, templates, and website source code are all completely open source and available on [GitHub](https://github.com/DAOLABS-WTF/daolabs-legal-documents).

## Developing

Our documents are written in [mdsvex](https://mdsvex.pngwn.io/docs/) (a combination of markdown and Svelte), and converted into web pages by a custom static site generator written in [Svelte](https://svelte.dev/).

The docs are automatically generated from a file structure adhering to:

```text
- src/docs/
    - Category1 (Top level folder is the category)
        - _category_.json (json file with the category name and position)
        - README.md (optional index markdown file to show on click of a collapsible)
        - SubCategory1 (Sub level folder is the sub category)
            - _category_.json (json file with the sub category name and position)
            - file1.md (markdown file)
            - file2.md (markdown file)
        - SubCategory2 (Sub level folder is the sub category)
            - _category_.json (json file with the sub category name and position)
            - file1.md (markdown file)
            - file2.md (markdown file)
    - Category2
        ...

Generates a routes file for the app to create the main header and sidebar.
```

To install dependencies and launch a dev server, run:

```bash
yarn && yarn run dev
```

To build:

```bash
yarn run build
```

## Formatting

To create new templates, create a Markdown (`.md`) file and a JSON (`.json`) file with matching names in a directory within `/src/docs/`:

```bash
touch template.md && touch template.json
```

Create your markdown document as normal. If you would like to include a variable, simply include it within brackets:

```md
## Document

This [File-name] is an **example** document for [Entity-name], created on [Date].
```

In the example above, `File-name`, `Entity-name`, and `Date` are replaceable. Next, add variables to your JSON file like so:

```json
[
	{
		"name": "File-name",
		"type": "text",
		"label": "Name of the File",
		"placeholder": "Memo",
		"value": "Memo"
	},
	{
		"name": "Entity-name",
		"type": "text",
		"label": "Your Entity's Name",
		"placeholder": "ACME Corporation",
		"value": "ACME Corporation"
	},
	{
		"name": "Date",
		"type": "date",
		"label": "Document's Date",
		"value": "2023-01-01"
	}
]
```

Save your JSON file, and the development server will refresh with the fields dictated by your JSON file. Make sure you understand the following JSON fields:

| Field         | Description                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------ |
| `name`        | The name of the bracketed variable to be replaced. Make sure to exactly match case and spelling. |
| `type`        | The variable's type. The most common options are `text`, `number`, and `date`.                   |
| `label`       | The label/description displayed to the user. Be as descriptive and as succinct as possible.      |
| `placeholder` | Placeholder text shown to the user when the field is empty.                                      |
| `value`       | Default pre-filled value shown when a page is loaded.                                            |

## Contributing

To contribute, make a pull request to our [GitHub Repository](https://github.com/DAOLABS-WTF/daolabs-legal-documents/pulls). Before contributing, make sure you fully understand our licenses and [our policies](/legal/policies/README.md). If you have any questions, add a comment to your pull request, [create an issue](https://github.com/DAOLABS-WTF/daolabs-legal-documents/issues/new/choose), or send an email to `f@daolabs.wtf`.
