# Maya Torres: Web Design Portfolio

> **Note for instructors:** This is a model README for a fictional student. The "draft feedback" in the revisions section is illustrative, so students should write about the real feedback they received. The live link below is a placeholder.

**Live site:** https://YOUR-USERNAME.github.io/portfolio/

A three-page personal portfolio made for my web design course. It has a home page, a work page with a project filter, and an about page with a contact form.

## Pages and file structure

```text
portfolio/
├── index.html          Home
├── work.html           Projects, with a filter
├── about.html          About me and a contact form
├── css/
│   └── styles.css      One shared stylesheet for all three pages
├── js/
│   ├── filter.js       Project filter (work page)
│   └── contact-form.js Form validation (about page)
├── images/
│   └── avatar.svg      Illustration used on the home and about pages
└── README.md
```

## Design

### Color palette

All colors are set once at the top of `css/styles.css` as variables, so every page uses the same palette.

| Role | Color | Used for |
|------|-------|----------|
| Primary blue | `#1d4e89` | Links, buttons, card top borders |
| Dark blue | `#143a69` | Headings, hover states |
| Warm amber | `#b45309` | Small accents, such as the current-page underline and focus outline |
| Pale blue and white | `#e8eef7`, `#ffffff` | Tags, cards, backgrounds |

I checked that the text and background pairs have enough contrast to read comfortably.

### Two Gestalt choices

1. **Proximity.** Inside each project card, the title, description, and tags sit close together, and there is a larger gap between one card and the next. Visitors can tell at a glance which words belong to which project, without needing lines or boxes around every piece of text.
2. **Similarity.** All cards share the same white background, blue top border, and rounded corners, and all four filter buttons look the same. Because the elements look alike, visitors read them as one group of projects and one set of controls. The selected filter button is filled in blue, so the one difference stands out.

### Responsive design

The layout starts as a single column and adds columns as the screen gets wider. The cards use CSS Grid with `auto-fit`, so they fit one, two, or three across without extra rules. One media query at 48em switches the home and about page intros to two columns. I tested every page in DevTools at about 320px, 768px, and 1200px. At each width the content stays inside the screen, the navigation links do not overlap, and there is no sideways scrolling.

## JavaScript features

1. **Project filter (`js/filter.js`, work page).** Choosing a topic hides the projects that do not match. The selected button is marked with `aria-pressed`, and a line of text under the buttons says how many projects are showing. The buttons are real `<button>` elements, so Tab, Enter, and Space all work.
2. **Contact form validation (`js/contact-form.js`, about page).** Each field has a linked `<label>`. When the form is submitted, any problems show as messages next to the fields, along with a summary at the top, and focus moves to the first field with a problem. Messages say how to fix the problem, such as "Enter an email address like name@example.com." The form does not send anything.

## Revisions after draft feedback

*(Illustrative examples for this model.)*

1. **Feedback: "I could not tell which filter was selected."**
   I filled in the selected button with blue and added the `aria-pressed` attribute, plus a status line that says "Showing 2 of 6 projects: JavaScript." **How I tested:** I used only the keyboard, tabbing to each button and pressing Enter and then Space, and I checked that the right cards appeared and that the selected button changed each time.
2. **Feedback: "The form just said the field was invalid."**
   I replaced the general message with a specific one under each field, added a summary at the top, and made focus jump to the first field with a problem. **How I tested:** I submitted the empty form, then a bad email address and a short message, then a valid form, all with the keyboard. I also scanned the page with WAVE to make sure the labels were linked and the errors did not create new problems.

## Checks before submitting

- All navigation links work between the three pages, and I checked every link and image path for typos.
- Every page has a clear heading structure, with one `h1` per page.
- Every image has descriptive alt text.
- Both JavaScript features work with only the keyboard.

## How I published it

1. Created a GitHub repository and uploaded all the files, keeping the folder structure above.
2. In the repository, opened **Settings**, then **Pages**, and chose to publish from the main branch.
3. Opened the live link and tested every page again, because paths that work on my computer can break online.
