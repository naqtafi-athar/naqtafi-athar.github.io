# Link-in-bio page (أثر)

- `index.html`: the page (design, filters, search, tabs). Rarely changes.
- `data.js`: **the only file to update after each post.** Add one entry at the top of `POSTS`, and add a new person to `PEOPLE` once.
- The page opens with the latest 2 posts; «عرض المزيد» adds 6 more each time. Filter buttons by type and by scholar. The search box appears automatically once there are 30+ posts. Each person is listed once in «أصحاب الفضل».
- Hosting: free static hosting (GitHub Pages, or Cloudflare Pages / Netlify as alternatives). Not online yet.
- Local preview: `python3 -m http.server 8765` in this folder, then open http://localhost:8765/

- Pushing: this folder is its own git repo for naqtafi-athar/naqtafi-athar.github.io. The Mac's active GitHub account is alhabshi482; switch to naqtafi-athar before pushing (`gh auth switch -u naqtafi-athar`, then `gh auth setup-git`), and switch back after.
