## TODO

### Legal

- Consolidate Terms of Service into a single document across all DAOLABS/affiliates
- Template (Delaware or Nevada) UNA and Terms of Service
- Template NFT Collection
- Template for-profit entity
- Template non-profit entity, other than UNA
- Trust Template
- Source code licenses
- Legal Template licenses
- Terminology, https://docs.juicebox.money/language
- Figma, https://www.figma.com/file/8orucP9iXPsWnPhJa1guUF/JB-Treasury-UX?node-id=5347-109172&t=PpT0wWTM6Nfobqr4-0

### General

- Post regarding entities and relationships
- Blog post about JB protocol
- Blog post about JB-fork
- Blog post about DAOLABS applications
- Blog post about tokens and securities
- Services list, perpetual trust for blockchain access
- Flow chart on how to create JB to establish app, understanding protocol, and iteration between individuals
- Landing page for daolabs.wtf, i.e. treasury.daolabs.wtf, nfts.daolabs.wtf
- Trust, project annotation around trust or curation

### Design and Development Write-ups

- Editable landing pages for treasuries, collections, https://github.com/michael/editable-website
- Terminology for JB & NFTs, https://docs.juicebox.money/language
- Emergency & Security procedures

### Development

- Bring in markdown to docx, pdf into application
- Cloud function/tool https://github.com/macsplit/urltomarkdown
- markdown to pdf at https://cloudconvert.com/ is the same using the following on MacOSX

```
brew install pandoc
brew install --cask basictex
sudo ln -s -v /Library/TeX/texbin/pdflatex /usr/local/bin/pdflatex
pandoc example.md -s -o example.pdf
```

- Update scripts with a generate PDF which traverses the `docs/daos/governance` directory and automatically creates PDFs for each markdown file - low priority, it may be better to just do manually
