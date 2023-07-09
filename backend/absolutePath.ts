import 'module-alias/register'
import { addAliases } from 'module-alias'

addAliases({
  '@const': `./src/const`,
  '@routes': `/src/routes`,
})
