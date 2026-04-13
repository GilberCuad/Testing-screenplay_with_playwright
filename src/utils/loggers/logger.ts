import winston from 'winston';
import fs from 'node:fs';
import path from 'node:path';

const logsDir = './target/logs';
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
}


const baseFormat = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(info => {
        const ts: string = (info.timestamp as string) ?? new Date().toISOString();
        return `${ts} [${info.level}] ${info.message}`;
    }),
);


const logger = winston.createLogger({
    format: baseFormat,
    transports: [
        new winston.transports.File({
            filename: path.join(logsDir, 'combined.log'),
            maxsize: 5_000_000,
            maxFiles: 3,
        }),
    ],
});

// timestamp configuration
if (process.env.CI !== 'true') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize({ all: true }),
            winston.format.timestamp({ format: 'HH:mm:ss' }),
            winston.format.printf(info => {
                const ts: string = (info.timestamp as string) ?? new Date().toISOString();
                return `${ts} [${info.level}] ${info.message}`;
            }),
        ),
    }));
}

// logger classes

export class Logger {
    constructor(private readonly context: string = 'App') { }

    info(message: string) {
        logger.info(`[${this.context}] ${message}`);
    }

    warn(message: string) {
        logger.warn(`[${this.context}] ${message}`);
    }

    error(message: string, err?: Error) {
        let fullMessage = `[${this.context}] ${message}`;

        if (err instanceof Error) {
            fullMessage += ` - ${err.message}`;
        }
        logger.error(fullMessage);
    }
}

export const log = new Logger('Log');
