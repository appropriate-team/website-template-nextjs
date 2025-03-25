#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import prompts from 'prompts';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copyDir = (src, dest) => {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

(async () => {
  console.log(chalk.cyan.bold('\n✨ Create Next.js App with UI Framework'));

  const response = await prompts([
    {
      type: 'text',
      name: 'projectName',
      message: 'Project name:',
      initial: 'my-next-app',
    },
    {
      type: 'select',
      name: 'uiFramework',
      message: 'Select UI Framework:',
      choices: [
        { title: 'shadcn/ui', value: 'shadcn' },
        { title: 'Tailwind CSS only', value: 'tailwind' },
        { title: 'Material UI', value: 'mui' },
        { title: 'Chakra UI', value: 'chakra' },
        { title: 'Daisy UI', value: 'daisyui' },
      ],
    },
  ]);

  const { projectName, uiFramework } = response;
  const templatePath = path.join(__dirname, 'templates', uiFramework);
  const projectPath = path.join(process.cwd(), projectName);

  if (!fs.existsSync(templatePath)) {
    console.log(chalk.red(`❌ Template not found for "${uiFramework}"`));
    process.exit(1);
  }

  console.log(chalk.green(`\n🚀 Creating project at ${projectPath}...`));
  copyDir(templatePath, projectPath);

  const pkgPath = path.join(projectPath, 'package.json');
  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    pkg.name = projectName;
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
    console.log(
      chalk.green(`✔ Updated package.json name to "${projectName}"`)
    );
  }

  console.log(chalk.green('\n📦 Installing dependencies...'));
  execSync(`cd ${projectName} && npm install`, { stdio: 'inherit' });

  console.log(chalk.cyan(`\n✅ All done! Run your app:`));
  console.log(chalk.yellow(`\n  cd ${projectName} && npm run dev`));
})();
