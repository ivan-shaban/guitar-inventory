import { cp } from 'shelljs'

// Copy all the view templates
cp('-R', 'src/views', 'dist/')
