import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} class="page-title-text">{title}</a>
      <a href="/" class="home-button">home</a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 1rem;
  margin: 0;
  font-family: var(--titleFont);
}
.page-title-text {
  display: inline;
}

.home-button {
  display: none;
  text-transform: lowercase;
}

/* On mobile */
@media (max-width: 768px) {
  .page-title-text {
    display: none;   /* hide the full title */
  }

  .home-button {
    display: inline; /* show Home button */
    font-size: 1.1rem;
    font-weight: bold;
    color: var(--secondary);
    text-decoration: none;
    padding: 0.2rem 0.5rem;
    border-radius: 6px;
    transition: background-color 0.3s ease;
  }

  .home-button:hover {
    background-color: var(--highlight);
    color: var(--tertiary);
  }
}

`

export default (() => PageTitle) satisfies QuartzComponentConstructor
