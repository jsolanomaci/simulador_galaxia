import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const modelsTargetDir = path.join(projectRoot, 'public', 'models');
const dracoTargetDir = path.join(projectRoot, 'public', 'draco');

const exportsDirPrimary = path.resolve(projectRoot, '..', 'sistemas_starfield', 'exports');
const exportsDirScratch = 'C:\\Users\\julia\\.gemini\\antigravity-cli\\brain\\88e0e41e-9ee9-48f8-9663-2752e0756c5a\\scratch\\exports';

const REQUIRED_MODELS = [
  'solar_system.glb',
  'crystal_palace.glb',
  'medieval_world.glb',
  'coruscant.glb',
  'cyberpunk_city.glb',
];

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    try {
      fs.mkdirSync(dirPath, { recursive: true });
    } catch {
      // Ignorar si ya existe en sandbox de Windows
    }
  }
}

function copyOrLinkFile(src, dest) {
  if (!fs.existsSync(src)) return false;
  ensureDir(path.dirname(dest));
  try {
    fs.copyFileSync(src, dest);
    return true;
  } catch {
    try {
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      fs.linkSync(src, dest);
      return true;
    } catch {
      return false;
    }
  }
}

export function syncAssets() {
  ensureDir(modelsTargetDir);
  ensureDir(dracoTargetDir);

  // 1. Copiar o enlazar los 5 modelos .glb desde ../sistemas_starfield/exports/ (o scratch/exports/)
  for (const modelName of REQUIRED_MODELS) {
    const dest = path.join(modelsTargetDir, modelName);
    const srcPrimary = path.join(exportsDirPrimary, modelName);
    const srcScratch = path.join(exportsDirScratch, modelName);

    let chosenSrc = null;
    if (fs.existsSync(srcPrimary) && fs.existsSync(srcScratch)) {
      const mPrimary = fs.statSync(srcPrimary).mtimeMs;
      const mScratch = fs.statSync(srcScratch).mtimeMs;
      chosenSrc = mScratch >= mPrimary ? srcScratch : srcPrimary;
    } else if (fs.existsSync(srcPrimary)) {
      chosenSrc = srcPrimary;
    } else if (fs.existsSync(srcScratch)) {
      chosenSrc = srcScratch;
    }

    if (chosenSrc) {
      copyOrLinkFile(chosenSrc, dest);
      console.log(`[sync_assets] Modelo sincronizado: ${modelName}`);
    } else {
      console.warn(`[sync_assets] Aviso: No se encontró ${modelName}`);
    }
  }

  // 2. Copiar el decodificador Draco local desde node_modules/three/examples/jsm/libs/draco/gltf/
  const threeDracoGltf = path.join(
    projectRoot,
    'node_modules',
    'three',
    'examples',
    'jsm',
    'libs',
    'draco',
    'gltf'
  );
  const threeDracoRoot = path.join(
    projectRoot,
    'node_modules',
    'three',
    'examples',
    'jsm',
    'libs',
    'draco'
  );

  const dracoSourceDir = fs.existsSync(threeDracoGltf) ? threeDracoGltf : threeDracoRoot;
  if (fs.existsSync(dracoSourceDir)) {
    for (const file of fs.readdirSync(dracoSourceDir)) {
      const fullSrc = path.join(dracoSourceDir, file);
      if (fs.statSync(fullSrc).isFile()) {
        copyOrLinkFile(fullSrc, path.join(dracoTargetDir, file));
      }
    }
    console.log(`[sync_assets] Decodificador Draco local copiado en public/draco/`);
  }
}

syncAssets();
