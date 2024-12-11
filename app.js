const fs = require('fs/promises');
const path = require('path');

// Example usage
(async () => {
  const folderPath = './backend';
  try {
    await fs.rm(folderPath, { recursive: true, force: true });
    console.log('Folder deleted successfully!');
  } catch (err) {
    console.error('Error deleting folder:', err);
  }
})();
