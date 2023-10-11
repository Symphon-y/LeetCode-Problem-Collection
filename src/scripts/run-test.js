import { execSync } from 'child_process';

if (process.argv.length > 3) {
  console.error('Too many arguments given');
  process.exit(1);
}

const testPathPattern = process.argv[2];

try {
  if (testPathPattern) {
    execSync(`npx jest --testPathPattern=${testPathPattern}`, {
      stdio: 'inherit',
    });
  } else {
    execSync(`npx jest`, {
      stdio: 'inherit',
    });
  }
} catch (error) {
  process.exit(1);
}
