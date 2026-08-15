const { existsSync } = require('node:fs')
const { execSync } = require('node:child_process')

if (!existsSync('.git')) {
  console.log('Skipping Lefthook install: .git directory not available.')
  process.exit(0)
}

execSync('pnpm exec lefthook install', { stdio: 'inherit' })

