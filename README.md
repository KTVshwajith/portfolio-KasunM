# Dr Kasun Moolikagedara — Portfolio

Personal portfolio: research in video authentication and computer vision, live in-browser demos, projects, publications and experience.

**Live site:** https://ktvshwajith.github.io/portfolio-KasunM/

## Live demos

| Demo | What runs in the browser |
|---|---|
| **V_Chain ledger** | Frames are split into an 8 × 5 block matrix, every block is hashed with SHA-256, block hashes are combined into a Merkle root, and each frame is mined into a chain with proof of work. Visitors can hash their own video, alter a frame and watch verification locate the change. Uses the Web Crypto API. |
| **Posture analysis** | MediaPipe Pose (BlazePose, 33 landmarks) on a photo, video or webcam, with neck and torso inclination ported from [Pose-Detection-Neckline](https://github.com/KTVshwajith/Pose-Detection-Neckline) and joint angles from [Pose-Detection-ALL](https://github.com/KTVshwajith/Pose-Detection-ALL). Runs on the visitor's device; nothing is uploaded. |

## Files

- `index.html` — the whole site (HTML, CSS and JavaScript in one file, no build step)
- `kasun.jpg`, `presenting-poster.jpg`, `presenting-audience.jpg` — photos
- `.github/workflows/static.yml` — deploys to GitHub Pages on every push to `main`
