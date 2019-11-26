const markdownView = document.querySelector('#markdown-content');
const htmlView = document.querySelector('#html-content');
const marked = require('marked');

const renderToMarkdown = (markdown) => {
    htmlView.innerHTML = DOMPurify.sanitize(marked(markdown));
}

markdownView.addEventListener('keyup', e => {
    const currentContent = e.target.value;
    renderToMarkdown(currentContent);
});

