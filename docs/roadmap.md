# Roadmap — מעבר מ-Lovable ל-Netlify

שיטת עבודה: מיישם + סוכן A (בודק כל חלק מול המסמך הזה) + סוכן B (בודק כל שלב מול `spec.md`). אחרי כל חלק יש שער אישור של הבעלים.
Branch: `p1-lovable-migration`. נקודת חזרה: tag `v1-nextjs-old` על `fe9839f`.

| חלק | מה | קריטריון קבלה | סטטוס |
|---|---|---|---|
| P0.1 | branch, tag, מסמכים | tag קיים; `spec.md`, `roadmap.md` ו-`pending-tasks.md` קיימים | ⏳ |
| P1.1 | מחיקת אתר ה-Next הישן | `git ls-files` = `.gitignore`, `AGENTS.md`, `CLAUDE.md`, `netlify.toml`, `docs/*` | ⏳ |
| P1.2 | העתקת ה-export כמו שהוא | `diff -r` מול ה-export ריק (על `src`, `public` וקבצי השורש שהועתקו) | ⏳ |
| P1.3 | תלויות | גרסאות ישירות = `bun.lock`; אין nitro; אין `bun.lock`/`bunfig.toml`; `src` לא השתנה | ⏳ |
| P1.4 | תמונות מקומיות | אין `__l5e` ב-`src`; רק שורת `url` השתנתה ב-13 קבצי JSON; גודל ואותיות השם תואמים | ⏳ |
| P1.5 | בנייה סטטית ו-`netlify.toml` | `npm run build` = 0; 5 קבצי HTML, favicon, robots ו-13 תמונות ב-`dist/client`; אין `.output`/`.netlify`/`.nitro` | ⏳ |
| P2.1 | סקריפט האימות וקו הבסיס | `npm run build && npm run verify` = 0 | ⏳ |
| P2.2 | עמוד 404 | `dist/client/404.html` קיים; `verify` עדיין עובר | ⏳ |
| P2.3 | בדיקה ויזואלית ואינטראקציה | צילומי מסך ב-390 וב-1280 זהים לאתר החי (חוץ מהתגית); אינטראקציות עובדות; אין שגיאות | ⏳ |
| P3.1 | תיעוד וניקיון | `check-ignore` תקין; אין אזכור ל-Next ב-`CLAUDE.md` וב-`AGENTS.md` | ⏳ |
| P3.2 | פריסת טיוטה ב-Netlify | 5 עמודים = 200 (כולל `/about` בלי לוכסן); 404 לכתובת לא קיימת; התמונות נטענות | ⏳ |
| P3.3 | עלייה לאוויר (push ל-main) | הפריסה במצב ready; האתר החי תקין | ⏳ |
| P3.3b | קישורים וכרטיסי יצירת קשר באתר החי | 11 קישורים נפתחים; `tel:` ו-`mailto:` נכונים | ⏳ |
| P3.4 | שינוי השם ל-makom-leshinui | https://makom-leshinui.netlify.app מחזיר 200 | ⏳ |
| P3.5 | מחיקת האתרים הישנים (ע"י הבעלים) | `netlify sites:list` מראה רק את makom-leshinui | ⏳ |
| P3.6 | סקיל מדריך (מקומי) | הסקיל קיים ב-`HYPNOSITE-V2/.claude/skills/` | ⏳ |

## חבילת רגרסיה (תוצאה מצופה)
1. `npm ci && npm run build`: קוד 0
2. `npm run lint`: 0 שגיאות. `npx tsc --noEmit`: 0 שגיאות
3. `npm run verify`: כל הבדיקות PASS (HTML ×5, CSS, 13 תמונות, 0 `__l5e`)
4. `diff -r` מול ה-export: רק שורת `url` ב-13 קבצי JSON
5. 5 העמודים מחזירים 200 (כולל `/about` בלי לוכסן); כתובת לא קיימת מחזירה 404
6. צילומי מסך ב-390 וב-1280 זהים לאתר החי, חוץ מתגית Lovable
7. תפריט המובייל, האקורדיון, Reveal, הניווט והקישורים עובדים
8. בקונסול וברשת: 0 שגיאות, 0 בקשות שמחזירות 404
9. אין שאריות Next.js ב-`git ls-files`
10. באתר החי: 11 הקישורים נפתחים, `tel:` ו-`mailto:` תקינים
