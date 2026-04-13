import * as fs from 'node:fs';
import { log } from '../loggers/logger';

export const ensureDirectoryExist = (dirPath: string, description: string):void => {
 if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        log.info(`${description} directory created 🆗`);
    }
}
