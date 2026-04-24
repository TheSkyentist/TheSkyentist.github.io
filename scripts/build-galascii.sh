#!/usr/bin/env bash
# Local helper: build the galascii applet from the sibling ../galascii
# checkout and drop the dist into content/galascii/ so Pelican picks it up.
# No-op when the sibling isn't there (CI does its own build from the
# upstream repo, so this is local-preview only).

set -euo pipefail

site_root="$(cd "$(dirname "$0")/.." && pwd)"
galascii_root="$(cd "$site_root/.." && pwd)/galascii"

if [ ! -d "$galascii_root" ]; then
  echo "pixi: $galascii_root not found, skipping local build (CI handles prod)"
  exit 0
fi

cd "$galascii_root"
GASCIILAXY_BASE=/galascii/ npm run build

rm -rf "$site_root/content/galascii"
cp -R dist "$site_root/content/galascii"
echo "pixi: galascii synced into content/galascii/"
