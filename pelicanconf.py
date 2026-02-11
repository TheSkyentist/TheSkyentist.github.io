# Pelican configuration file

AUTHOR = 'Raphael E. Hviding'
SITENAME = 'Raphael E. Hviding'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'Europe/Berlin'
DEFAULT_LANG = 'en'

# Theme
THEME = 'theme'
THEME_STATIC_DIR = 'assets'

# No blog/articles — this is a pages-only site
ARTICLE_PATHS = []
DIRECT_TEMPLATES = []
DEFAULT_PAGINATION = False

# Pages config
PAGE_PATHS = ['pages']
PAGE_SAVE_AS = '{slug}.html'
PAGE_URL = '{slug}.html'

# Static files
STATIC_PATHS = ['images', 'files', 'extra']
EXTRA_PATH_METADATA = {
    'extra/robots.txt': {'path': 'robots.txt'},
    'extra/.nojekyll': {'path': '.nojekyll'},
    'extra/favicon.ico': {'path': 'favicon.ico'},
}

# URL settings
RELATIVE_URLS = True

# Disable feeds for a personal site
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Disable unused pages
ARCHIVES_SAVE_AS = ''
AUTHORS_SAVE_AS = ''
CATEGORIES_SAVE_AS = ''
TAGS_SAVE_AS = ''

# Markdown extensions
MARKDOWN = {
    'extension_configs': {
        'markdown.extensions.extra': {},
        'markdown.extensions.meta': {},
        'markdown.extensions.attr_list': {},
    },
    'output_format': 'html5',
}
