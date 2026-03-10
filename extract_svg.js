const fs = require('fs');
const content = fs.readFileSync('public/rumah-bumn-page/indonesia.svg', 'utf-8');

const paths = [];
const pathBlocks = content.split('<path');

for (let i = 1; i < pathBlocks.length; i++) {
    const block = pathBlocks[i];

    // Extract d
    const dMatch = block.match(/d="([^"]+)"/);
    // Extract title
    const titleMatch = block.match(/title="([^"]+)"/);
    // Extract id
    const idMatch = block.match(/id="([^"]+)"/);

    if (dMatch && titleMatch && idMatch) {
        paths.push({
            id: idMatch[1],
            title: titleMatch[1],
            d: dMatch[1].replace(/\s+/g, ' ').trim()
        });
    }
}

const outContent = `export const mapPaths = ${JSON.stringify(paths, null, 2)};`;
fs.writeFileSync('src/components/RumahBUMN/MapData.ts', outContent);
console.log('Successfully extracted ' + paths.length + ' paths');
