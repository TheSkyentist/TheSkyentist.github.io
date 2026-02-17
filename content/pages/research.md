Title: Astronomy Research
Subtitle: Accretting Black Holes and Data Science
Template: page
Slug: research
Featured_image: 

## The Hidden Monsters in Galaxies

### Obscured Active Galactic Nuclei

When supermassive black holes at the centers of galaxies accrete material, they release a huge amount of energy across the entire electromagnetic spectrum. However, many Active Galactic Nuclei (AGN) are obscured behind large amounts of dust and gas, which can mask their signatures. My work involves in selecting and characterizing AGN using the infrared, from dust-obscured AGN in the local universe with the Wide-Infrared Space Explorer (WISE) to the high-redshift population of Little Red Dots (LRDs), which are thought to be enshrouded by dense gas, with NIRSpec Spectroscopy from the James Webb Space Telescope (JWST). 

### AGN Influence on Host Galaxies

### The Distant Universe

---

## Code Development
### unite: Unified Numerical Integration Tool for spEctroscopy

At Steward Observatory I worked with the JWST NIRCam Extragalactic Science Team to prepare for the JADES GTO Survey. JWST allows us to robustly detect and collect statistics for galaxies present in the era when the universe was less than a billion years old.

Before the launch of JWST, I worked with the [JAGUAR galaxy mock catalog](http://fenrir.as.arizona.edu/jwstmock/). The presence of neutral hydrogen absorbs most of all the light bluewards of the Lyman Alpha line. As the rest frame position of this cutoff changes with redshift, searching for "LyA dropouts" is therefore a robust way of searching for high-redshift galaxies. I worked on calibrating potential color-color cuts for upcoming surveys with JWST and the numbers of high redshift galaxies that can be accurately recovered with this technique.

I was second author on [Simulating JWST/NIRCam Color Selection of High-Redshift Galaxies](https://ui.adsabs.harvard.edu/abs/2020ApJ...892..125H/abstract), a work which aimed to be a tool for the community in designing surveys for finding high-redshift dropout galaxies using JWST.

<img src="{static}/images/JAGUAR.jpg" alt="JAGUAR" style="max-width: 60%; display: block; margin: 1em auto;" />

### grizli: Grism redshift & line

### GELATO: Galaxy/AGN Emission Line Analysis TOol

At the Space Telescope Science Institute I worked on finding Low-Ionization Emission Region (LIER) galaxies at higher redshifts (z~0.9). While LIER-like emission was believed to be constrained predominantly in the nucleus of galaxies (e.g. LINERs), spatially resolved spectroscopic studies have measured LIER-like emission out to kpc scales.

Using 3D-HST data analyzed by the Grizli library for space-based slitless spectroscopy, I determined 8 candidates with extended LIER emission. All 8 candidates showed evidence for kpc-scale ionization and show no evidence for the presence of an AGN, ruling out SMBH accretion as the driving source of the ionization.

I was lead author on a publication detailing these results, [Spatially Extended Low Ionization Emission Regions (LIERs) at z∼0.9](https://ui.adsabs.harvard.edu/abs/2018ApJ...868...16H/abstract) which was the first work to identify LIER galaxies out to moderate redshifts.

<img src="{static}/images/LIERs.jpg" alt="LIERs" style="max-width: 60%; display: block; margin: 1em auto;" />

---

## Code Development

### GELATO

[GELATO (Galaxy/AGN Emission Line Analysis TOol)](https://github.com/TheSkyentist/GELATO) is my spectroscopic fitting code, a flexible framework for fitting emission lines with specific attention to the complex line profiles of AGN. GELATO was developed as part of my systematic analysis of AGN in mid-IR color space and has been used in multiple publications.

<img src="{static}/images/gelato.png" alt="GELATO" style="max-width: 60%; display: block; margin: 1em auto;" />
