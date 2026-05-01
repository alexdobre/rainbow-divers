const fs = require('fs');
const path = require('path');

const galleryFolders = ['volcano', 'waterfalls', 'pitons', 'beach', 'diving', 'river', 'trail', 'view'];
const picDir = path.join(process.cwd(), 'public', 'pic');
const manifest = {};

const mediaExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.mp4', '.webm', '.ogg', '.mov'];

galleryFolders.forEach(folder => {
  const folderPath = path.join(picDir, folder);

  if (fs.existsSync(folderPath)) {
    const files = fs.readdirSync(folderPath);
    const mediaFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return mediaExtensions.includes(ext);
    });

    manifest[folder] = mediaFiles.sort();
  } else {
    manifest[folder] = [];
  }
});

// Write manifest to public directory
const manifestPath = path.join(process.cwd(), 'public', 'gallery-manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

console.log('Gallery manifest generated successfully!');
console.log(`Total folders: ${Object.keys(manifest).length}`);
Object.entries(manifest).forEach(([folder, files]) => {
  console.log(`  ${folder}: ${files.length} files`);
});
