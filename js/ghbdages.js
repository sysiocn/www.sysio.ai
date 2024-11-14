function renderBadge() {
    const currentTimeHtml = `
        <div id="ghbdages_list">
            <a class="github-badge" target="_blank" href="https://hexo.io/" title="hexo:7.3.0">
                <img src="https://img.shields.io/badge/Frame-Hexo-blue?logo=hexo" alt="Static Badge">
            </a>
            <a class="github-badge" target="_blank" href="https://github.com/" title="github">
                <img src="https://img.shields.io/badge/Code-GitHub-181717?logo=GitHub&color=%23FF7102" alt="Static Badge">
            </a>
            <a class="github-badge" target="_blank" href="https://vercel.com/" title="vercel">
                <img src="https://img.shields.io/badge/Host-Vercel-%23F0D722?logo=Vercel" alt="Static Badge">
            </a>
            <a class="github-badge" target="_blank" href="https://analytics.sysio.ai/" title="umami">
                <img src="https://img.shields.io/badge/Analytics-Umami-%237FB100?logo=umami&logoColor=%237FB100" alt="Static Badge">
            </a>
            <a class="github-badge" target="_blank" href="https://analytics.sysio.ai/" title="umami">
                <img src="https://img.shields.io/badge/Analytics-Umami-%237FB100?logo=umami&logoColor=%237FB100" alt="Static Badge">
            </a>
        </div>`;

    const ghbdages = document.getElementById("ghbdages");
    if (ghbdages) {
        ghbdages.innerHTML = currentTimeHtml;
    }
}

window.onload = renderBadge;